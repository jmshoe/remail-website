import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { JsonLd, organizationSchema, websiteSchema } from '@/components/seo/JsonLd'
import { GoogleTagManager, GoogleTagManagerNoScript } from '@/components/analytics/GoogleTagManager'

// Allow static pages while supporting client components via proper boundaries
export const dynamic = 'force-dynamic'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <GoogleTagManager />
      <GoogleTagManagerNoScript />
      <JsonLd data={organizationSchema()} />
      <JsonLd data={websiteSchema()} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
