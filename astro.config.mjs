import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// Blog article images sit below the fold. Lazy-load them after build so they don't
// compete with the header photo (Largest Contentful Paint). Markdown output has no
// hook for this in Astro's default processor, so we patch the built HTML.
function lazyBlogImages() {
  return {
    name: 'lazy-blog-images',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const blogDir = join(fileURLToPath(dir), 'blog');
        const entries = await readdir(blogDir, { withFileTypes: true }).catch(() => []);
        for (const e of entries.filter((e) => e.isDirectory())) {
          const file = join(blogDir, e.name, 'index.html');
          const html = await readFile(file, 'utf8').catch(() => null);
          if (!html) continue;
          const start = html.indexOf('class="container narrow prose"');
          if (start < 0) continue;
          const body = html
            .slice(start)
            .replace(/<img(?![^>]*\bloading=)/g, '<img loading="lazy" decoding="async"');
          await writeFile(file, html.slice(0, start) + body);
        }
      },
    },
  };
}

export default defineConfig({
  // The clinic's domain (used for canonical URLs, sitemap, structured data).
  site: 'https://www.satvaayur.in',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
    lazyBlogImages(),
  ],
});
