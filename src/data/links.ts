/**
 * Centralized External Links Configuration
 * =========================================
 * This file is the SINGLE SOURCE OF TRUTH for all external links used across the site.
 *
 * When generating content (blog posts, landing pages), always reference these links.
 * When adding new affiliate links or updating social profiles, edit this file.
 */

// =============================================================================
// SOCIAL MEDIA LINKS
// =============================================================================

export const socialLinks = {
  twitter: 'https://x.com/JasonMMacht',
  linkedin: 'https://www.linkedin.com/in/jasonmacht/',
  youtube: 'https://www.youtube.com/@jmacht',
  // Add more social platforms as needed:
  // instagram: 'https://instagram.com/remail',
  // facebook: 'https://facebook.com/remail',
  // tiktok: 'https://tiktok.com/@remail',
} as const

// =============================================================================
// AFFILIATE LINKS
// =============================================================================

export type AffiliateLink = {
  url: string
  label: string
  description?: string
}

export const affiliateLinks: Record<string, AffiliateLink> = {
  // Data & Skip Tracing
  propStream: {
    url: 'https://tr.ee/e0aEUd',
    label: 'PropStream',
    description: 'Property data and skip tracing platform',
  },
  batchSkipTracing: {
    url: 'https://batchskiptracing.com',
    label: 'Batch Skip Tracing',
    description: 'Bulk skip tracing service',
  },

  // Direct Mail Services
  lob: {
    url: 'https://tr.ee/Hsm499',
    label: 'Lob',
    description: 'Direct mail API and automation',
  },
  click2Mail: {
    url: 'https://click2mail.com',
    label: 'Click2Mail',
    description: 'Online direct mail service',
  },

  // CRM & Tools
  reiSift: {
    url: 'https://reisift.io',
    label: 'REI Sift',
    description: 'Real estate investor data management',
  },
  podio: {
    url: 'https://podio.com',
    label: 'Podio',
    description: 'CRM and project management',
  },
  customerio: {
    url: 'https://tr.ee/mPf7UU',
    label: 'Customer.io',
    description: 'Marketing automation platform',
  },
  resimpli: {
    url: 'https://tr.ee/k49r3h',
    label: 'REsimpli',
    description: 'Real estate investor CRM',
  },
  pipedrive: {
    url: 'https://tr.ee/VW9f09',
    label: 'PipeDrive',
    description: 'API Driven CRM',
  },

  // Add more affiliate links as needed:
  // example: {
  //   url: 'https://example.com?ref=remail',
  //   label: 'Example Tool',
  //   description: 'What this tool does',
  // },
}

// =============================================================================
// EXTERNAL RESOURCES
// =============================================================================

export const externalResources = {
  // Industry resources
  usps: {
    url: 'https://usps.com',
    label: 'USPS',
    description: 'United States Postal Service',
  },

  // Educational resources
  biggerPockets: {
    url: 'https://biggerpockets.com',
    label: 'BiggerPockets',
    description: 'Real estate investing community',
  },

  // Add more resources as needed
} as const

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get all social links as an array for mapping
 */
export function getSocialLinksArray() {
  return Object.entries(socialLinks).map(([key, url]) => ({
    platform: key,
    url,
  }))
}

/**
 * Get all affiliate links as an array for mapping
 */
export function getAffiliateLinksArray() {
  return Object.entries(affiliateLinks).map(([key, link]) => ({
    id: key,
    ...link,
  }))
}

// =============================================================================
// TYPE EXPORTS
// =============================================================================

export type SocialPlatform = keyof typeof socialLinks
export type AffiliateLinkId = keyof typeof affiliateLinks
export type ExternalResourceId = keyof typeof externalResources
