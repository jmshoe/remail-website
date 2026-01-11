/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Explicitly disable trailing slashes to prevent redirect chains
  trailingSlash: false,

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },

  // Domain redirects - redirect all non-www to www (canonical domain)
  async redirects() {
    return [
      // Redirect non-www to www (canonical)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'remaildirect.com' }],
        destination: 'https://www.remaildirect.com/:path*',
        permanent: true,
      },
      // Redirect alternate domains to canonical www domain
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'remail.com' }],
        destination: 'https://www.remaildirect.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.remail.com' }],
        destination: 'https://www.remaildirect.com/:path*',
        permanent: true,
      },
      // Legacy URL redirects (from old Wix site)
      {
        source: '/privacy-policy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/post/dc-home-buyer-east-coast-home-buyer',
        destination: '/blog/direct-mail-automation-case-study-10x-roas',
        permanent: true,
      },
      {
        source: '/post/new-jersey-home-buyer',
        destination: '/blog/direct-mail-case-study-43-percent-lower-cost-per-lead',
        permanent: true,
      },
      {
        source: '/post/easy-sell-new-jersey-home-buyer',
        destination: '/blog/direct-mail-case-study-43-percent-lower-cost-per-lead',
        permanent: true,
      },
      // Catch-all for old /post/* URLs - redirect to blog index
      {
        source: '/post/:slug*',
        destination: '/blog',
        permanent: true,
      },
    ]
  },

  // Headers for security and caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        // Cache static assets
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

}

module.exports = nextConfig
