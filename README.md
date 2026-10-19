# Satva Ayurveda Clinic — website

Static site built with Astro. English at `/`, Kannada at `/kn/`, Hindi at `/hi/`.

```
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Adding a blog post

Create `src/content/blog/<lang>/<slug>.md` (`<lang>` is `en`, `kn` or `hi`):

```md
---
title: 'Post title (under ~60 characters)'
description: 'One or two sentences shown in Google results (max 170 characters).'
pubDate: 2026-11-01
category: 'Diet'
# updatedDate: 2026-12-01
# draft: true        # hidden from the built site
---

Post body in Markdown.
```

Use the **same file name** for translations of the same post, so Google links the languages together.

## Before launch — replace placeholders

- `astro.config.mjs` — `site` (real domain)
- `src/config.ts` — clinic name, doctor, phone, WhatsApp, address, coordinates, maps links, social links
- `src/i18n/ui.ts` — all `[bracketed]` text, hours; have Kannada and Hindi reviewed by a native speaker
- `src/data/treatments.ts` — treatment copy (doctor to review; no "cure" claims)
- `src/content/blog/` — replace the sample posts
- `PhotoPlaceholder` components — swap for real photos
- `public/og-default.png` — social share image (1200×630)
