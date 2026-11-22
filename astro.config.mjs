import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dsamruddhi.github.io',                                                                                                                    
  base: '/sil-website/',  
  integrations: [
    tailwind(),
    sitemap(),
  ],
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
