/**
 * Related Resources Resolver
 *
 * Finds related resources for an article based on:
 * 1. Explicit relatedSlugs from frontmatter (highest priority)
 * 2. Shared category
 * 3. Shared tags
 *
 * Shared across all TSP-managed sites.
 */

import type { CollectionEntry } from 'astro:content';

export function getRelatedResources(
  current: CollectionEntry<'resources'>,
  allResources: CollectionEntry<'resources'>[],
  limit: number = 3
): CollectionEntry<'resources'>[] {
  const others = allResources.filter(
    (r) => r.slug !== current.slug && !r.data.draft
  );

  // Priority 1: Explicit related slugs
  const explicit = current.data.relatedSlugs || [];
  if (explicit.length > 0) {
    const matched = explicit
      .map((slug: string) => others.find((r) => r.slug === slug))
      .filter(Boolean) as CollectionEntry<'resources'>[];
    if (matched.length >= limit) return matched.slice(0, limit);
    // Fill remaining slots with category/tag matches
    const remaining = others.filter((r) => !matched.includes(r));
    return [...matched, ...scoreAndSort(current, remaining)].slice(0, limit);
  }

  return scoreAndSort(current, others).slice(0, limit);
}

function scoreAndSort(
  current: CollectionEntry<'resources'>,
  candidates: CollectionEntry<'resources'>[]
): CollectionEntry<'resources'>[] {
  const currentTags = new Set(current.data.tags || []);
  const currentCategory = current.data.category;

  const scored = candidates.map((r) => {
    let score = 0;
    if (r.data.category && r.data.category === currentCategory) score += 3;
    const rTags = r.data.tags || [];
    for (const tag of rTags) {
      if (currentTags.has(tag)) score += 1;
    }
    return { resource: r, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((s) => s.resource);
}
