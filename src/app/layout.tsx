import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { GoogleTagManager, GoogleTagManagerNoScript, ConsentBanner } from '@/components/analytics'

// Skip static generation for all pages
export const dynamic = 'force-dynamic'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://www.remaildirect.com'),
  title: {
    default: 'REmail - Direct Mail Automation for Real Estate Investors',
    template: '%s | REmail',
  },
  description:
    'Automate your real estate direct mail campaigns. Send postcards and letters to motivated sellers with our easy-to-use platform built for wholesalers and fix-and-flip investors.',
  keywords: [
    'direct mail',
    'real estate investors',
    'wholesaling',
    'fix and flip',
    'motivated sellers',
    'real estate marketing',
    'direct mail automation',
    'postcards',
    'yellow letters',
  ],
  authors: [{ name: 'REmail' }],
  creator: 'REmail',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.remaildirect.com',
    siteName: 'REmail',
    title: 'REmail - Direct Mail Automation for Real Estate Investors',
    description:
      'Automate your real estate direct mail campaigns. Send postcards and letters to motivated sellers.',
    images: [
      {
        url: '/seo/og-image.png',
        width: 1200,
        height: 630,
        alt: 'REmail - Direct Mail Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'REmail - Direct Mail Automation for Real Estate Investors',
    description:
      'Automate your real estate direct mail campaigns. Send postcards and letters to motivated sellers.',
    images: ['/seo/twitter-image.png'],
    creator: '@remail',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <GoogleTagManager />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`min-h-screen bg-white antialiased ${inter.className}`}>
        <GoogleTagManagerNoScript />
        {children}
        <ConsentBanner />
      </body>
    </html>
  )
}
