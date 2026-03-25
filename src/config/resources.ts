/**
 * Resources Configuration
 *
 * Defines settings for the Resources (publishing) section.
 * Maps to the TSP workspace_website_config fields.
 */

export const resourcesConfig = {
  /** Public-facing label for the section */
  sectionLabel: 'Resources',

  /** Base route for resources */
  routeBase: '/resources',

  /** Content root path in repo (for TSP publishing contract) */
  contentRoot: 'src/content/resources',

  /** Content format */
  contentFormat: 'md' as const,

  /** Default author for published resources */
  defaultAuthor: 'DigiHoof',

  /** Number of featured resources to show on landing page */
  featuredCount: 1,

  /** Enable category filtering */
  enableCategories: true,

  /** Enable tag display */
  enableTags: true,

  /** Enable related resources at bottom of articles */
  enableRelatedResources: true,

  /** Enable table of contents in articles */
  enableToc: true,

  /** Enable CTA block at bottom of articles */
  enableCta: true,

  /** Default CTA configuration */
  defaultCta: {
    title: 'Ready to streamline your hoof radiograph reporting?',
    text: 'Get started with DigiHoof today and bridge the communication gap between veterinarians and farriers.',
    href: '/support',
    buttonLabel: 'Request Information',
  },

  /** Resources landing page copy */
  landingHero: {
    title: 'Resources',
    subtitle:
      'Expert insights on hoof radiograph reporting, equine imaging best practices, and veterinary-farrier collaboration.',
  },

  /** Items per page for pagination (0 = show all) */
  itemsPerPage: 0,
} as const;
