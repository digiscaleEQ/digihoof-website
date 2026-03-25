/**
 * Navigation Configuration
 *
 * Defines all navigation items for header and footer.
 * Reusable across TSP-managed sites — each site provides its own nav config.
 */

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  highlight?: boolean;
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources' },
  { label: 'Tutorials', href: '/tutorials' },
  { label: 'Support', href: '/support' },
];

export const footerColumns: FooterColumn[] = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Security', href: '/security' },
      { label: 'Terms', href: '/terms' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Liability', href: '/liability' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Support', href: '/support' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Resources', href: '/resources' },
      { label: 'Tutorials', href: '/tutorials' },
    ],
  },
];
