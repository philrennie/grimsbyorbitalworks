import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ─── Ships ────────────────────────────────────────────
// The heart of the site. Each ship has a profile, story, and build log.
const ships = defineCollection({
  loader: glob({ base: './src/content/ships', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      shipClass: z.string().optional(),
      classification: z.string().optional(),
      status: z.enum(['active', 'decommissioned', 'lost', 'unknown', 'refit']).default('active'),
      builtYear: z.string().optional(),
      heroImage: image().optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
    }),
});

// ─── Company ──────────────────────────────────────────
// Broader lore: history, people, yards, competitors, culture.
const company = defineCollection({
  loader: glob({ base: './src/content/company', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      heroImage: image().optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      sortOrder: z.number().default(0),
      draft: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
    }),
});

// ─── Workshop ─────────────────────────────────────────
// Model-building content: techniques, tools, materials.
const workshop = defineCollection({
  loader: glob({ base: './src/content/workshop', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      heroImage: image().optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      draft: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
    }),
});

// ─── Journal ──────────────────────────────────────────
// Blog-format activity feed: build updates, lore drops, reflections.
const journal = defineCollection({
  loader: glob({ base: './src/content/journal', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      heroImage: image().optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      draft: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = { ships, company, workshop, journal };
