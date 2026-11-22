// Turns original photos into two web-ready copies.
//
//   photos/<path>/<any photo>.jpg|jpeg|png|webp|heic   (originals, NOT published)
//     -> public/<path>/<name>-sm.webp   (~720 px, carousel box)
//     -> public/<path>/<name>-lg.webp   (~2000 px, full-screen view)
//     -> src/data/event-photos.json     (photo list per folder, keyed by <path>, in file-name order)
//
// e.g. photos/events/open-day/*  ->  public/events/open-day/*   (key "events/open-day")
//      photos/about/*            ->  public/about/*             (key "about")
//
// Runs automatically before `npm run dev` and `npm run build`, or on its own with `npm run photos`.
// Only new or changed photos are re-processed. Copies of deleted originals are removed.

import { readdir, stat, mkdir, rm, writeFile, readFile, rmdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC_DIR = path.join(ROOT, 'photos');
const PUBLIC_DIR = path.join(ROOT, 'public');
const MANIFEST = path.join(ROOT, 'src', 'data', 'event-photos.json');

const SIZES = {
  sm: { box: 720, quality: 75 },
  lg: { box: 2000, quality: 80 },
};
const IMAGE_EXT = /\.(jpe?g|png|webp|tiff?|heic|heif|avif)$/i;
const COPY = /^(.*)-(sm|lg)\.webp$/;

const slugify = (name) =>
  name
    .replace(/\.[^.]+$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'photo';

const isNewer = async (src, out) => {
  if (!existsSync(out)) return true;
  const [s, o] = await Promise.all([stat(src), stat(out)]);
  return s.mtimeMs > o.mtimeMs;
};

/** Every folder under photos/ that directly contains images, as 'a/b' paths. */
async function findCollections(dir, rel = '') {
  const found = [];
  const entries = await readdir(dir, { withFileTypes: true });
  if (rel && entries.some((e) => e.isFile() && IMAGE_EXT.test(e.name))) found.push(rel);
  for (const e of entries.filter((e) => e.isDirectory()).sort((a, b) => a.name.localeCompare(b.name))) {
    found.push(...(await findCollections(path.join(dir, e.name), rel ? `${rel}/${e.name}` : e.name)));
  }
  return found;
}

/** Remove this script's copies in public/<key> that aren't in `keep`; drop the folder if left empty. */
async function removeStaleCopies(key, keep) {
  const outFolder = path.join(PUBLIC_DIR, ...key.split('/'));
  if (!existsSync(outFolder)) return 0;
  let removed = 0;
  for (const f of await readdir(outFolder)) {
    const m = f.match(COPY);
    if (m && !keep.has(m[1])) {
      await rm(path.join(outFolder, f));
      removed++;
    }
  }
  if ((await readdir(outFolder)).length === 0) await rmdir(outFolder);
  return removed;
}

async function main() {
  const previous = existsSync(MANIFEST) ? JSON.parse(await readFile(MANIFEST, 'utf8')) : {};
  const manifest = {};
  let made = 0;
  let removed = 0;

  if (!existsSync(SRC_DIR)) await mkdir(SRC_DIR, { recursive: true });
  const collections = await findCollections(SRC_DIR);

  for (const key of collections) {
    const srcFolder = path.join(SRC_DIR, ...key.split('/'));
    const outFolder = path.join(PUBLIC_DIR, ...key.split('/'));
    const files = (await readdir(srcFolder)).filter((f) => IMAGE_EXT.test(f)).sort();
    await mkdir(outFolder, { recursive: true });

    const used = new Set();
    const entries = [];
    for (const file of files) {
      let slug = slugify(file);
      for (let n = 2; used.has(slug); n++) slug = `${slugify(file)}-${n}`;
      used.add(slug);

      const src = path.join(srcFolder, file);
      let width = 0;
      let height = 0;
      for (const [suffix, { box, quality }] of Object.entries(SIZES)) {
        const out = path.join(outFolder, `${slug}-${suffix}.webp`);
        if (await isNewer(src, out)) {
          await sharp(src).rotate().resize({ width: box, height: box, fit: 'inside', withoutEnlargement: true }).webp({ quality }).toFile(out);
          made++;
        }
        if (suffix === 'lg') ({ width, height } = await sharp(out).metadata());
      }
      entries.push({ file, slug, width, height });
    }
    manifest[key] = entries;
    removed += await removeStaleCopies(key, used);
  }

  // Folders whose originals were removed entirely: clear out their copies only
  for (const key of Object.keys(previous)) {
    if (!manifest[key]) removed += await removeStaleCopies(key, new Set());
  }

  await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
  const total = Object.values(manifest).reduce((n, list) => n + list.length, 0);
  console.log(`[photos] ${total} photo(s) in ${collections.length} folder(s); ${made} copy(ies) made, ${removed} stale removed.`);
}

main().catch((err) => {
  console.error('[photos] failed:', err);
  process.exit(1);
});
