import { Metadata } from 'next'
import { BookOpen, AlertTriangle, CheckCircle } from 'lucide-react'
import { CalBooking } from '@/components/marketing/CalBooking'
import { TechStackCard } from '@/components/marketing/TechStackCard'

// No-index to prevent search engine crawling (lead magnet thank you page)
export const metadata: Metadata = {
  title: '7-Figure Direct Mail Blueprint | REmail',
  description: 'Your free 7-Figure Direct Mail Blueprint. Learn the exact strategies behind 20M+ mailers and millions in closed deals.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

const whatYoullLearn = [
  {
    title: 'The Million-Dollar Marketing Mistake',
    description: 'How to avoid lighting your marketing budget on fire with one critical shift.',
  },
  {
    title: '5 "Marketing Graveyard" Pitfalls',
    description: 'The silent killers that bury ROI before campaigns even launch.',
  },
  {
    title: 'The 4-Pillar Framework',
    description: 'The foundation that routinely produces 4-10x ROAS for our clients.',
  },
  {
    title: 'The Exact 90-Day Roll-Out Plan',
    description: 'Step-by-step blueprint to launch, optimize, and scale profitably.',
  },
]

const commonPitfalls = [
  {
    title: 'Spray-and-Pray',
    description: 'Random lists + no tracking = zero insight on what actually works.',
  },
  {
    title: 'Manual Mayhem',
    description: 'Spreadsheet typos burn cash at $0.50+ per piece. Every. Single. Time.',
  },
  {
    title: 'One-Touch Wonder',
    description: 'Successful sellers need ~7+ touches. One mailer won\'t cut it.',
  },
  {
    title: 'Generic Message Massacre',
    description: '"Me-too" copy gets trashed with junk mail. Stand out or get ignored.',
  },
  {
    title: 'Data Black-Hole',
    description: 'No centralized data = can\'t double-down on winners or kill losers.',
  },
]

const techStack = [
  {
    category: 'CRM',
    name: 'REsimpli',
    description: 'All-in-one, AI-driven platform built specifically for real-estate investors.',
    logo: '/images/logos/resimpli.png',
    affiliateUrl: 'https://tr.ee/k49r3h',
  },
  {
    category: 'Marketing Automation',
    name: 'Customer.io',
    description: 'A data-centric customer engagement platform that lets you drive omni-channel marketing.',
    logo: '/images/logos/customerio.png',
    affiliateUrl: 'https://tr.ee/mPf7UU',
  },
  {
    category: 'Direct Mail',
    name: 'LOB',
    description: 'REST API that generates, personalizes, and mails letters or postcards on demand.',
    logo: '/images/logos/lob.png',
    affiliateUrl: 'https://tr.ee/Hsm499',
  },
  {
    category: 'Data Sources',
    name: 'Property Radar',
    description: 'An API-driven, data-rich prospecting platform built for real-estate investors and agents.',
    logo: '/images/logos/propertyradar.png',
    affiliateUrl: 'https://tr.ee/h2V6So',
  },
  {
    category: 'Dashboards',
    name: 'Plecto',
    description: 'Streams data from CRMs, spreadsheets, and databases into live TV dashboards.',
    logo: '/images/logos/plecto.png',
    affiliateUrl: 'https://tr.ee/ROi9aJ',
  },
]

export default function BlueprintPage() {
  return (
    <>
      {/* Hero Section with Video */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              7-Figure Direct Mail Blueprint
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              The exact strategies behind 20M+ mailers and millions in closed deals.
            </p>
          </div>

          {/* Video Embed */}
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="aspect-video w-full overflow-hidden rounded-xl shadow-2xl bg-slate-900">
              <iframe
                src="https://www.youtube.com/embed/nnlOSjtdsi0?rel=0&modestbranding=1"
                title="7-Figure Direct Mail Blueprint Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Content Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* What You'll Learn */}
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                What You&apos;ll Learn
              </h2>
              <ul className="mt-8 space-y-6">
                {whatYoullLearn.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-muted-foreground">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Common Pitfalls To Avoid */}
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Common Pitfalls To Avoid
              </h2>
              <ul className="mt-8 space-y-6">
                {commonPitfalls.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 flex-shrink-0">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-muted-foreground">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Tech Stack Section */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              Recommended Tech Stack
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The tools we use and recommend for building a 7-figure direct mail operation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {techStack.map((item) => (
              <TechStackCard key={item.name} {...item} />
            ))}
          </div>

          {/* Affiliate disclosure */}
          <p className="mt-8 text-center text-xs text-muted-foreground">
            * Some links are affiliate links. We only recommend tools we actually use.
          </p>
        </div>
      </section>

      {/* CTA Section Header */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Want More? Book a Call Today.
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Get personalized guidance on implementing the blueprint for your specific market and goals.
          </p>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {[
              'Review your current direct mail strategy',
              'Identify quick wins and optimization opportunities',
              'Get a custom 90-day action plan',
              'No pressure, no obligation',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-blue-50">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cal.com Booking Section - Full Width */}
      <section className="bg-slate-50 py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden ring-1 ring-slate-900/5">
            <CalBooking mode="inline" />
          </div>
        </div>
      </section>
    </>
  )
}
