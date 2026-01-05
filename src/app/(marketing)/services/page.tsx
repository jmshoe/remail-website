import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Mail,
  Search,
  Users,
  FileText,
  BarChart3,
  RefreshCw,
  ArrowRight,
  Check,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { JsonLd, breadcrumbSchema, serviceSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Direct Mail Automation Services | REmail',
  description:
    'Complete direct mail automation for real estate investors. Campaign management, skip tracing, list building, template design, analytics, and drip campaigns. Start your free trial.',
  keywords: [
    'direct mail services',
    'direct mail automation',
    'real estate mail services',
    'skip tracing service',
    'direct mail campaign management',
  ],
  openGraph: {
    title: 'Direct Mail Automation Services | REmail',
    description:
      'Complete direct mail automation for real estate investors. Campaign management, skip tracing, and more.',
    url: 'https://remaildirect.com/services',
  },
  alternates: {
    canonical: 'https://remaildirect.com/services',
  },
}

const services = [
  {
    id: 'direct-mail',
    icon: Mail,
    name: 'Direct Mail Campaigns',
    description:
      'Automated postcard and letter campaigns that run on autopilot. Upload your list, choose a template, and we handle printing, addressing, and mailing.',
    features: [
      'Postcards (4x6, 6x9, 6x11)',
      'Check letters',
      'Professional letters',
      'Custom mail pieces',
      '5-7 day delivery',
      'USPS tracking',
    ],
    image: '/images/services/direct-mail-campaigns.jpg',
    imageAlt: 'Clean postcards and letters on a modern workspace, showcasing direct mail automation',
  },
  {
    id: 'skip-tracing',
    icon: Search,
    name: 'Skip Tracing',
    description:
      'Find property owner contact information instantly. Get phone numbers, emails, and verified mailing addresses for your target properties.',
    features: [
      'Phone numbers (mobile & landline)',
      'Email addresses',
      'Verified mailing addresses',
      'Batch processing',
      'Real-time lookups',
      'High match rates',
    ],
    image: '/images/services/skip-tracing.jpg',
    imageAlt: 'Modern data visualization dashboard with search interface, representing skip tracing technology',
  },
  {
    id: 'lists',
    icon: Users,
    name: 'List Building',
    description:
      'Access motivated seller lists filtered by your exact criteria. Target the property owners most likely to sell.',
    features: [
      'Absentee owners',
      'Pre-foreclosure',
      'Probate properties',
      'Tax delinquent',
      'Vacant properties',
      'Tired landlords',
      'High equity',
      'Custom filters',
    ],
    image: '/images/services/list-building.jpg',
    imageAlt: 'Modern map visualization with property markers, representing smart list building',
  },
  {
    id: 'templates',
    icon: FileText,
    name: 'Template Designer',
    description:
      'Create professional mail pieces with our drag-and-drop designer. Use proven templates or build your own from scratch.',
    features: [
      'Drag-and-drop editor',
      'Proven templates library',
      'Custom branding',
      'Variable data (name, address)',
      'QR codes',
      'Professional design help',
    ],
    image: '/images/services/template-designer.jpg',
    imageAlt: 'Design interface mockup showing postcard templates and design tools',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    name: 'Campaign Analytics',
    description:
      'Track every metric that matters. Know exactly which campaigns are generating responses and deals.',
    features: [
      'Response tracking',
      'ROI calculation',
      'A/B testing',
      'Delivery confirmation',
      'Call tracking',
      'Conversion attribution',
    ],
    image: '/images/services/campaign-analytics.jpg',
    imageAlt: 'Modern analytics dashboard with charts and graphs showing campaign metrics',
  },
  {
    id: 'drip',
    icon: RefreshCw,
    name: 'Drip Campaigns',
    description:
      'Set up automated follow-up sequences. Research shows 5-7 touches dramatically increases response rates.',
    features: [
      'Multi-touch sequences',
      'Automated scheduling',
      'Response-based triggers',
      'List suppression',
      'Sequence builder',
      'Performance tracking',
    ],
    image: '/images/services/drip-campaigns.jpg',
    imageAlt: 'Workflow visualization showing automated campaign sequences and timelines',
  },
]

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://remaildirect.com' },
          { name: 'Services', url: 'https://remaildirect.com/services' },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: 'Direct Mail Automation',
          description:
            'Complete direct mail automation platform for real estate investors including campaign management, skip tracing, list building, and analytics.',
        })}
      />

      {/* Hero */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Direct Mail Automation Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Everything you need to run successful direct mail campaigns.
              From list building to analytics, we have got you covered.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="mt-6 text-3xl font-bold text-foreground">
                    {service.name}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-8 gap-2">
                    <Link href="/contact">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Visual */}
                <div
                  className={`rounded-2xl bg-slate-100 p-8 ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <div className="aspect-video relative rounded-lg overflow-hidden bg-slate-200">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Automate Your Direct Mail?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Start your free trial today. No credit card required.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-white text-primary hover:bg-blue-50 shadow-lg"
            >
              <Link href="/contact">Get Started Free</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
