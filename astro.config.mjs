import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: replace with the clinic's real domain before launch (used for canonical URLs, sitemap, structured data).
  site: 'https://www.example.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-IN', kn: 'kn-IN', hi: 'hi-IN' },
      },
    }),
  ],
});
