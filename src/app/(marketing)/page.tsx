import { Metadata } from 'next'
import { Hero } from '@/components/marketing/Hero'
import { WhyREmail } from '@/components/marketing/WhyREmail'
import { OurApproach } from '@/components/marketing/OurApproach'
import { Features } from '@/components/marketing/Features'
import { HowItWorks } from '@/components/marketing/HowItWorks'
import { Testimonials } from '@/components/marketing/Testimonials'
import { FAQ } from '@/components/marketing/FAQ'
import { CTA } from '@/components/marketing/CTA'
import { JsonLd, productSchema, faqSchema } from '@/components/seo/JsonLd'
import { faqData } from '@/data/faq'

export const metadata: Metadata = {
  title: {
    absolute: 'Direct Mail Automation for Real Estate Investors | REmail',
  },
  description:
    'Done-with-you direct mail backed by 20M+ mailers sent. Full transparency, real-time control, and campaigns engineered to turn cold leads into closed deals. Built for wholesalers and flippers.',
  keywords: [
    'direct mail automation',
    'real estate direct mail',
    'direct mail marketing real estate',
    'wholesaling direct mail',
    'real estate postcards',
    'motivated seller letters',
    'direct mail services',
    'real estate marketing automation',
    'done with you direct mail',
  ],
  openGraph: {
    title: 'Automated Direct Mail That Never Stops Working | REmail',
    description:
      'Done-with-you direct mail backed by 20M+ mailers sent. Full transparency, data-driven targeting, and campaigns built to close deals.',
    url: 'https://remaildirect.com',
    type: 'website',
  },
  alternates: {
    canonical: 'https://remaildirect.com',
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={productSchema()} />
      <JsonLd data={faqSchema(faqData)} />
      <Hero />
      <WhyREmail />
      <OurApproach />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  )
}
