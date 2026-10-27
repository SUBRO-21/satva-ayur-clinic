import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // The clinic's domain (used for canonical URLs, sitemap, structured data).
  site: 'https://www.satvaayur.in',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
