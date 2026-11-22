// HOW TO ADD EVENT PHOTOS
// 1. Put the original photos in a folder under  photos/events/<folder-name>/
//    (any size, straight from the camera is fine; this folder is NOT published)
// 2. Set `folder: '<folder-name>'` on the event below.
// 3. Run `npm run dev` or `npm run build` (or `npm run photos`). A small copy for the
//    carousel and a large copy for the full-screen view are made automatically.
// Photos appear in file-name order. Use `cover` to pick which photo shows first, and
// `photoOptions` to set alt text or cropping for a photo by its position in file-name
// order (1 = first file). Tall photos are cropped toward their upper part by default.

import photoManifest from './event-photos.json';

export interface PhotoOptions {
  /** Short description of the photo for screen readers */
  alt?: string;
  /** CSS object-position for cropping inside the carousel box, e.g. 'center 65%' */
  position?: string;
}

export interface LabEvent {
  title: string;
  /** Free text, e.g. 'March 2026' */
  date: string;
  description: string;
  /** Folder name under photos/events/. Leave out to show placeholder slides. */
  folder?: string;
  /** Number of the photo (in file-name order) to show first */
  cover?: number;
  photoOptions?: Record<number, PhotoOptions>;
}

export interface EventPhoto {
  /** Paths relative to public/ */
  small: string;
  large: string;
  alt: string;
  position?: string;
}

export const events: LabEvent[] = [
  {
    title: 'SIL Launch',
    date: 'February 2026',
    description: 'In February 2026, 200+ students attended the SIL launch event, which was followed by seminars from faculty and industry experts.',
    folder: 'sil-launch',
    photoOptions: {
      1: { alt: 'Packed lecture theatre of students at the SIL launch' },
      2: { alt: 'Speaker presenting the Electrical Hobby Group × Student Innovation Lab slide' },
      3: { alt: 'Speaker addressing students at the SIL launch', position: 'center 65%' },
      4: { alt: 'Organisers in front of the audience at the SIL launch' },
    },
  },
  {
    title: 'AI Impact Summit 2026',
    date: '2026',
    description:
      'SIL student projects were showcased at the AI Impact Summit 2026 in Delhi. One of them won Best Student Project in the Physical AI Challenge organized by Qualcomm and Arduino.',
    folder: 'ai-impact-summit',
    photoOptions: {
      1: { alt: 'SIL students receiving the Best Student Project award on stage' },
    },
  },
  {
    title: 'SIL Open Day',
    date: '2026',
    description:
      'SIL students showcased their project progress under the SuRGE (Summer Research Grant for Excellence) 2026 program. More than 50 projects were funded under SuRGE, and 12 of the best were on display.',
    folder: 'open-day',
    cover: 5,
  },
  {
    title: 'Ministry of Defence & Army Visit',
    date: '2026',
    description:
      'Ministry of Defence officials and senior Army personnel visited SIL on multiple occasions. The lab also collaborates on research with several defence units.',
    folder: 'defence-visit',
    cover: 2,
    photoOptions: {
      2: { alt: 'Visiting delegation with SIL members and robots in front of the SIL wall' },
    },
  },
  {
    title: 'First Hardware Hackathon',
    date: '2026',
    description: "The lab's first hardware hackathon, built around multimodal sensing and mesh solving.",
    folder: 'hardware-hackathon',
    photoOptions: {
      1: { alt: 'Teams working on line-follower robots on printed track mats in the lab' },
      2: { alt: 'Hackathon team standing behind their robot on the track mats' },
      3: { alt: 'Wired robot on a bench in front of oscilloscopes and test equipment' },
      4: { alt: 'Spiral line-follower track mats laid out on the lab floor' },
    },
  },
  {
    title: 'Physical AI Workshop',
    date: 'July 2026',
    description: 'A Physical AI workshop organized by Arduino representatives.',
    folder: 'arduino-workshop',
  },
  {
    title: '3D Printing Workshops',
    date: '2026',
    description: '3D printing workshops organized by SIL.',
    folder: '3d-printing-workshops',
  },
  {
    title: "Freshers' Tour",
    date: '2026',
    description: 'SIL tour organized for the 2026 UG and PG freshers.',
    folder: 'freshers-tour',
    photoOptions: {
      1: { alt: 'Freshers gathered in front of the SIL wall' },
    },
  },
];

const manifest = photoManifest as Record<string, { slug: string; width: number; height: number }[]>;

/** The generated web copies for an event, in file-name order. */
export function getEventPhotos(ev: LabEvent): EventPhoto[] {
  if (!ev.folder) return [];
  const list = manifest[`events/${ev.folder}`] ?? [];
  const photos = list.map(({ slug, width, height }, i) => {
    const opts = ev.photoOptions?.[i + 1] ?? {};
    return {
      small: `events/${ev.folder}/${slug}-sm.webp`,
      large: `events/${ev.folder}/${slug}-lg.webp`,
      alt: opts.alt ?? `${ev.title}, photo ${i + 1} of ${list.length}`,
      // Tall photos: keep faces in frame by cropping toward the top
      position: opts.position ?? (height > width ? 'center 30%' : undefined),
    };
  });
  const c = (ev.cover ?? 1) - 1;
  if (c > 0 && c < photos.length) photos.unshift(...photos.splice(c, 1));
  return photos;
}
