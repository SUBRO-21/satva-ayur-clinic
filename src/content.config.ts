import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { clinic } from './config';

// Blog posts live in src/content/blog/<lang>/<slug>.md.
// Use the same file name across languages so translations are linked for Google (hreflang).
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default(clinic.doctor.name),
    category: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
