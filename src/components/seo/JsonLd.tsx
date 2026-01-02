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

// Pre-built schema generators
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'REmail',
    url: 'https://remail.com',
    logo: 'https://remail.com/logo.png',
    description:
      'Direct mail automation platform for real estate investors. Automate postcards, letters, and campaigns to find motivated sellers.',
    sameAs: [
      'https://twitter.com/remail',
      'https://linkedin.com/company/remail',
      'https://youtube.com/@remail',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-REmail',
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
    url: 'https://remail.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://remail.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
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
      lowPrice: '0.50',
      highPrice: '2.00',
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
