/**
 * SEO Utilities
 *
 * Generates meta tags, Open Graph, Twitter Card, and canonical URL data.
 * Shared across all TSP-managed sites.
 */

import { brand } from '../config/brand';

export interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishDate?: Date;
  updatedDate?: Date;
  author?: string;
  noindex?: boolean;
}

export function buildSEO(props: SEOProps, currentPath: string) {
  const title = props.title
    ? `${props.title} | ${brand.seo.siteName}`
    : brand.seo.defaultTitle;

  const description = props.description || brand.seo.defaultDescription;

  const canonical = props.canonicalUrl || `${brand.seo.canonicalBase}${currentPath}`;

  const ogImage = props.ogImage
    ? props.ogImage.startsWith('http')
      ? props.ogImage
      : `${brand.seo.canonicalBase}${props.ogImage}`
    : `${brand.seo.canonicalBase}${brand.seo.ogDefaultImage}`;

  return {
    title,
    description,
    canonical,
    ogImage,
    ogType: props.ogType || 'website',
    publishDate: props.publishDate?.toISOString(),
    updatedDate: props.updatedDate?.toISOString(),
    author: props.author || brand.name,
    noindex: props.noindex || false,
    siteName: brand.seo.siteName,
    twitterHandle: brand.seo.twitterHandle,
  };
}
