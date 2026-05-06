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
    // TSP-published posts may omit excerpt; default to empty string
    excerpt: z.string().optional().default(''),
    // .catch() ensures any unparsable or absent publishDate defaults gracefully
    // instead of crashing the Cloudflare build
    publishDate: z.coerce.date().catch(new Date('2020-01-01')),
    updatedDate: z.coerce.date().optional(),
    // author is optional — TSP may publish without explicit authorship
    author: z.string().optional().default(''),
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
    // SEO + AI discoverability fields (TSP seo_ai patch)
    focusKeyphrase: z.string().optional(),
    ogTitle: z.string().optional(),
    ogDescription: z.string().optional(),
    twitterTitle: z.string().optional(),
    twitterDescription: z.string().optional(),
    twitterImage: z.string().optional(),
    reviewedBy: z.string().optional(),
    schemaType: z.string().default('Article'),
    faqItems: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
    keyTakeaways: z.array(z.string()).default([]),
    quotableLines: z.array(z.string()).default([]),
  }),
});

export const collections = { resources };
