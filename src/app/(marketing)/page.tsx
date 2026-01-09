import { Metadata } from 'next'
import { Hero } from '@/components/marketing/Hero'
import { WhyREmail } from '@/components/marketing/WhyREmail'
import { OurApproach } from '@/components/marketing/OurApproach'
import { Features } from '@/components/marketing/Features'
import { HowItWorks } from '@/components/marketing/HowItWorks'
import { Testimonials } from '@/components/marketing/Testimonials'
import { FAQ } from '@/components/marketing/FAQ'
import { CTA } from '@/components/marketing/CTA'
import { JsonLd, productSchema, faqSchema, reviewSchema } from '@/components/seo/JsonLd'
import { faqData } from '@/data/faq'

// Testimonial data for review schema
const testimonialReviews = [
  {
    author: 'Marcus Thompson',
    rating: 5,
    body: 'REmail completely transformed our direct mail strategy. We went from sending 200 postcards manually to 2,000+ automated. Our response rate actually went UP.',
    date: '2024-11-15',
  },
  {
    author: 'Sarah Chen',
    rating: 5,
    body: 'The skip tracing integration alone is worth the price. I used to pay $0.15/record elsewhere. Now it is built right in and the data is more accurate.',
    date: '2024-10-22',
  },
  {
    author: 'David Rodriguez',
    rating: 5,
    body: 'Finally, a direct mail platform that understands real estate investors. The templates are proven winners and the drip campaigns keep my pipeline full.',
    date: '2024-09-18',
  },
]

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
    url: 'https://www.remaildirect.com',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.remaildirect.com',
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={productSchema()} />
      <JsonLd data={faqSchema(faqData)} />
      <JsonLd data={reviewSchema(testimonialReviews)} />
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
