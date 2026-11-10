import type { FaqItem } from '../i18n/types';
import { SUPPORT_EMAIL } from '../config/site';
import { SITE_ORIGIN, absoluteAssetUrl, canonicalUrl, getOrganizationSameAs } from '../config/seo';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'FC27 Cheats',
    url: `${SITE_ORIGIN}/`,
    inLanguage: 'en-US',
    description:
      'Shop FC 27 cheats for Windows—player ESP, opponent radar, soft aim, shot assist and stream-proof overlays. Always check the live status banner after EA patches at fc27-cheats.net.',
  };
}

export function organizationSchema() {
  const sameAs = getOrganizationSameAs();

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FC27 Cheats',
    url: `${SITE_ORIGIN}/`,
    logo: `${SITE_ORIGIN}/logo.svg`,
    email: SUPPORT_EMAIL,
    ...(sameAs.length > 0 ? { sameAs } : {}),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: SUPPORT_EMAIL,
        url: canonicalUrl('/support/'),
        availableLanguage: ['English'],
        areaServed: 'Worldwide',
      },
    ],
  };
}

export function collectionPageSchema(input: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: input.name,
    description: input.description,
    url: canonicalUrl(input.url),
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'FC27 Cheats',
      url: `${SITE_ORIGIN}/`,
    },
  };
}

export function webPageSchema(input: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: input.name,
    description: input.description,
    url: canonicalUrl(input.url),
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'FC27 Cheats',
      url: `${SITE_ORIGIN}/`,
    },
  };
}

function plainTextAnswer(html: string): string {
  return html
    .replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

/** Cap FAQ rich-result entities — Google recommends a focused set, not every UI FAQ. */
export const FAQ_SCHEMA_LIMIT = 8;

export function faqPageSchema(
  items: Array<Pick<FaqItem, 'q' | 'a'>>,
  options: { limit?: number } = {},
) {
  const limit = options.limit ?? FAQ_SCHEMA_LIMIT;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.slice(0, limit).map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: plainTextAnswer(item.a),
      },
    })),
  };
}

export function itemListSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: canonicalUrl(item.url),
    })),
  };
}

export function discussionForumPostingSchema(input: {
  name: string;
  text: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DiscussionForumPosting',
    headline: input.name,
    articleBody: input.text,
    url: canonicalUrl(input.url),
    author: {
      '@type': 'Organization',
      name: 'FC27 Cheats',
    },
    isPartOf: {
      '@type': 'CollectionPage',
      name: 'FC27 Cheats Community Forum',
      url: canonicalUrl('/forum/'),
    },
  };
}

function offerUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return canonicalUrl(path);
}

export function productSchema(input: {
  name: string;
  description: string;
  url: string;
  offerUrl: string;
  image?: string;
  sku?: string;
  /** USD starting price — required for Product rich results; omit Offer when unknown. */
  priceUsd?: number;
  priceCurrency?: string;
}) {
  const productUrl = canonicalUrl(input.url);
  const hasPrice = typeof input.priceUsd === 'number' && Number.isFinite(input.priceUsd);

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: input.name,
    description: input.description,
    url: productUrl,
    sku: input.sku ?? input.url.replace(/\//g, '-'),
    brand: {
      '@type': 'Brand',
      name: 'FC27 Cheats',
    },
    ...(input.image ? { image: absoluteAssetUrl(input.image) } : {}),
    // Only emit Offer when we have a real price — priceless Offers fail Product rich-result eligibility.
    ...(hasPrice
      ? {
          offers: {
            '@type': 'Offer',
            url: offerUrl(input.offerUrl),
            priceCurrency: input.priceCurrency ?? 'USD',
            price: input.priceUsd!.toFixed(2),
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'Organization',
              name: 'FC27 Cheats',
            },
          },
        }
      : {}),
  };
}

/** @deprecated Prefer productSchema for product/cheat detail pages. */
export function softwareApplicationSchema(input: {
  name: string;
  description: string;
  url: string;
  image?: string;
  offerUrl?: string;
}) {
  return productSchema({
    name: input.name,
    description: input.description,
    url: input.url,
    offerUrl: input.offerUrl ?? input.url,
    image: input.image,
  });
}

export function articleSchema(input: {
  name: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.name,
    description: input.description,
    url: canonicalUrl(input.url),
    image: absoluteAssetUrl(input.image),
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    inLanguage: 'en-US',
    author: {
      '@type': 'Organization',
      name: 'FC27 Cheats',
    },
    publisher: {
      '@type': 'Organization',
      name: 'FC27 Cheats',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_ORIGIN}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl(input.url),
    },
  };
}

export function parseBlogDate(date: string): string {
  const parsed = Date.parse(date);
  if (Number.isNaN(parsed)) return new Date().toISOString().slice(0, 10);
  return new Date(parsed).toISOString().slice(0, 10);
}
