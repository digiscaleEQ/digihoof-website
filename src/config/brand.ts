/**
 * DigiHoof Brand Configuration
 *
 * Centralizes all brand-specific design tokens and metadata.
 * Future TSP-managed sites (Daniel Equine, EQPACS, etc.) will have
 * their own brand.ts with overridden values while sharing the same
 * architectural structure.
 */

export const brand = {
  name: 'DigiHoof',
  tagline: 'Standardized hoof radiograph reporting platform.',
  operator: 'DigiScan LLC (USA)',
  copyright: '© DigiHoof. All rights reserved.',

  appUrl: 'https://app.digihoof.com/login',
  appLabel: 'Clinic Login',

  logo: {
    src: '/images/DIGIHOOFbluewhite.png',
    alt: 'DigiHoof logo',
    height: 52,
  },

  colors: {
    primary: '#2b8fd6',
    primaryHover: '#227bb9',
    background: '#232833',
    backgroundAlt: '#2c3240',
    backgroundFooter: '#202633',
    text: '#ffffff',
    textBody: '#c9cfdb',
    textMuted: '#9ea5b5',
    textSubtle: '#7d8596',
    textDim: '#6b7385',
    border: '#32394a',
    borderLight: '#3a4253',
    success: '#22c55e',
    error: '#ef4444',
    cardBg: '#2c3240',
  },

  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    heading: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },

  radius: {
    small: '6px',
    medium: '8px',
    large: '12px',
    card: '14px',
  },

  spacing: {
    sectionPadding: '120px',
    containerMax: '1140px',
    contentMax: '720px',
  },

  seo: {
    siteName: 'DigiHoof',
    defaultTitle: 'DigiHoof | Hoof Radiograph Reports for Veterinarians & Farriers',
    defaultDescription:
      'DigiHoof generates standardized, shareable hoof radiograph reports that bridge the communication gap between veterinarians and farriers. Built for busy equine practices.',
    canonicalBase: 'https://digihoof.com',
    ogDefaultImage: '/images/DIGIHOOFbluewhite.png',
    twitterHandle: '',
  },
} as const;

export type Brand = typeof brand;
