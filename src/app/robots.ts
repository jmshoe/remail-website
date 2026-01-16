import { MetadataRoute } from 'next'

// Ensure canonical domain always uses www.
const baseUrl = (process.env.NEXT_PUBLIC_APP_URL || 'https://www.remaildirect.com')
  .replace('://remaildirect.com', '://www.remaildirect.com')
  .replace(/\/+$/, '')

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/dashboard/',
          '/_next/',
          '/admin/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
