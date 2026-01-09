import { Organization, WebSite, Product, FAQPage, BreadcrumbList } from 'schema-dts'

type JsonLdProps = {
  data: Organization | WebSite | Product | FAQPage | BreadcrumbList | Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Base URL constant
const BASE_URL = 'https://www.remaildirect.com'

// Pre-built schema generators
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'REmail',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description:
      'Direct mail automation platform for real estate investors. Automate postcards, letters, and campaigns to find motivated sellers.',
    sameAs: [
      'https://twitter.com/remail',
      'https://linkedin.com/company/remail',
      'https://youtube.com/@remail',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-980-277-7437',
      contactType: 'sales',
      availableLanguage: 'English',
    },
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'REmail',
    url: 'https://www.remaildirect.com',
    description:
      'Direct mail automation platform for real estate investors. Automate postcards, letters, and campaigns to find motivated sellers.',
    publisher: {
      '@type': 'Organization',
      name: 'REmail',
      url: 'https://www.remaildirect.com',
    },
  }
}

export function productSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'REmail Direct Mail Automation',
    description:
      'Automated direct mail platform for real estate investors. Send postcards and letters to motivated sellers.',
    brand: {
      '@type': 'Brand',
      name: 'REmail',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '1499',
      highPrice: '1999',
      offerCount: '3',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function serviceSchema(service: {
  name: string
  description: string
  provider?: string
  areaServed?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: service.provider || 'REmail',
    },
    areaServed: {
      '@type': 'Country',
      name: service.areaServed || 'United States',
    },
  }
}

// SoftwareApplication schema for pricing/product pages
export function softwareApplicationSchema(options?: {
  lowPrice?: string
  highPrice?: string
  ratingValue?: string
  reviewCount?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'REmail Direct Mail Automation',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web Browser',
    description:
      'Done-with-you direct mail automation platform for real estate investors. Automate postcards, letters, and campaigns to find motivated sellers.',
    url: BASE_URL,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: options?.lowPrice || '1499',
      highPrice: options?.highPrice || '1999',
      offerCount: '3',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: options?.ratingValue || '4.9',
      reviewCount: options?.reviewCount || '127',
      bestRating: '5',
      worstRating: '1',
    },
    provider: {
      '@type': 'Organization',
      name: 'REmail',
      url: BASE_URL,
    },
  }
}

// Review schema with AggregateRating for testimonials
export function reviewSchema(
  reviews: Array<{
    author: string
    rating: number
    body: string
    date?: string
  }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'REmail Direct Mail Automation',
    description:
      'Done-with-you direct mail automation platform for real estate investors.',
    brand: {
      '@type': 'Brand',
      name: 'REmail',
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: r.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating.toString(),
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: r.body,
      datePublished: r.date || new Date().toISOString().split('T')[0],
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: (
        reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
      ).toFixed(1),
      reviewCount: reviews.length.toString(),
      bestRating: '5',
      worstRating: '1',
    },
  }
}

// HowTo schema for tutorial/guide blog posts
export function howToSchema(howTo: {
  name: string
  description: string
  steps: Array<{ name: string; text: string; image?: string }>
  totalTime?: string
  estimatedCost?: { currency: string; value: string }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    description: howTo.description,
    ...(howTo.totalTime && { totalTime: howTo.totalTime }),
    ...(howTo.estimatedCost && {
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: howTo.estimatedCost.currency,
        value: howTo.estimatedCost.value,
      },
    }),
    step: howTo.steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
      ...(step.image && {
        image: {
          '@type': 'ImageObject',
          url: step.image,
        },
      }),
    })),
  }
}

// ItemList schema for blog index and list pages
export function itemListSchema(
  items: Array<{ name: string; url: string; description?: string; image?: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: item.url,
      name: item.name,
      ...(item.description && { description: item.description }),
      ...(item.image && {
        image: {
          '@type': 'ImageObject',
          url: item.image,
        },
      }),
    })),
  }
}

// ProfessionalService schema for service pages
export function professionalServiceSchema(options?: {
  services?: Array<{ name: string; description?: string }>
}) {
  const defaultServices = [
    { name: 'Direct Mail Postcards', description: 'Automated postcard campaigns for real estate investors' },
    { name: 'Direct Mail Letters', description: 'Professional letter campaigns including check letters and yellow letters' },
    { name: 'Skip Tracing', description: 'Find owner contact information including phone, email, and mailing addresses' },
    { name: 'List Building', description: 'Targeted list building for absentee owners, pre-foreclosures, and probate leads' },
    { name: 'Campaign Analytics', description: 'Track response rates, ROI, and conversion metrics' },
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'REmail Direct Mail Services',
    description:
      'Done-with-you direct mail automation services for real estate investors including wholesalers, fix-and-flippers, and buy-and-hold investors.',
    url: `${BASE_URL}/services`,
    image: `${BASE_URL}/logo.png`,
    telephone: '+1-980-277-7437',
    email: 'support@remaildirect.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Charlotte',
      addressRegion: 'NC',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    priceRange: '$$',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Direct Mail Services',
      itemListElement: (options?.services || defaultServices).map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          ...(service.description && { description: service.description }),
        },
      })),
    },
    provider: {
      '@type': 'Organization',
      name: 'REmail',
      url: BASE_URL,
    },
  }
}

// WebApplication schema for calculator/tool pages
export function webApplicationSchema(app: {
  name: string
  description: string
  url: string
  applicationCategory?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: app.name,
    description: app.description,
    url: app.url,
    applicationCategory: app.applicationCategory || 'BusinessApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    provider: {
      '@type': 'Organization',
      name: 'REmail',
      url: BASE_URL,
    },
  }
}

// LocalBusiness schema (if needed for local SEO)
export function localBusinessSchema(options?: {
  address?: { street?: string; city: string; state: string; zip?: string }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#localbusiness`,
    name: 'REmail',
    description: 'Direct mail automation platform for real estate investors.',
    url: BASE_URL,
    image: `${BASE_URL}/logo.png`,
    telephone: '+1-980-277-7437',
    email: 'support@remaildirect.com',
    address: {
      '@type': 'PostalAddress',
      ...(options?.address?.street && { streetAddress: options.address.street }),
      addressLocality: options?.address?.city || 'Charlotte',
      addressRegion: options?.address?.state || 'NC',
      ...(options?.address?.zip && { postalCode: options.address.zip }),
      addressCountry: 'US',
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  }
}
