/**
 * Reading Time Calculator
 *
 * Estimates reading time for article content.
 * Shared across all TSP-managed sites.
 */

const WORDS_PER_MINUTE = 225;

export function calculateReadingTime(content: string): string {
  const text = content
    .replace(/---[\s\S]*?---/, '') // Remove frontmatter
    .replace(/<[^>]*>/g, '')       // Remove HTML tags
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove image markdown
    .replace(/\[([^\]]*)\]\(.*?\)/g, '$1') // Keep link text
    .trim();

  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));

  return `${minutes} min read`;
}
