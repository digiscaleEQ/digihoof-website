/**
 * Content Collection Schema
 *
 * Defines the resources content collection with the full frontmatter
 * contract required by the TSP publishing system.
 */

import { defineCollection, z } from 'astro:content';

const resources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    ogImage: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    canonicalUrl: z.string().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    readingTimeOverride: z.string().optional(),
    ctaVariant: z.string().default('default'),
    ctaTitle: z.string().optional(),
    ctaText: z.string().optional(),
    ctaHref: z.string().optional(),
    relatedSlugs: z.array(z.string()).default([]),
  }),
});

export const collections = { resources };
