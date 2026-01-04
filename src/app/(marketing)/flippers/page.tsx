import { Metadata } from 'next'
import Link from 'next/link'
import {
  Home,
  TrendingUp,
  Clock,
  DollarSign,
  MapPin,
  BarChart3,
  Check,
  ArrowRight,
  Star,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Direct Mail for House Flippers | Find Off-Market Deals | REmail',
  description:
    'Direct mail automation for fix and flip investors. Find distressed properties, reach motivated sellers, and source more off-market deals. Built for house flippers who want to scale.',
  keywords: [
    'house flipping',
    'fix and flip marketing',
    'real estate flipping',
    'distressed property leads',
    'off-market deals',
    'direct mail for flippers',
  ],
  openGraph: {
    title: 'Direct Mail for House Flippers | Find Off-Market Deals | REmail',
    description:
      'Direct mail automation for fix and flip investors. Find distressed properties and source more deals.',
    url: 'https://remaildirect.com/flippers',
  },
  alternates: {
    canonical: 'https://remaildirect.com/flippers',
  },
}

const benefits = [
  {
    icon: Home,
    title: 'Find Distressed Properties',
    description:
      'Target pre-foreclosures, code violations, vacant homes, and properties needing major repairs.',
  },
  {
    icon: Clock,
    title: 'Beat the Competition',
    description:
      'Get to sellers before properties hit the MLS. Off-market deals mean better margins.',
  },
  {
    icon: TrendingUp,
    title: 'Scale Your Pipeline',
    description:
      'Automated campaigns mean consistent deal flow without spending all day marketing.',
  },
  {
    icon: DollarSign,
    title: 'Better Purchase Prices',
    description:
      'Motivated sellers from direct mail typically accept 10-20% below market value.',
  },
]

const targetLists = [
  { name: 'Pre-Foreclosure', description: 'Homeowners behind on payments' },
  { name: 'Code Violations', description: 'Properties with city citations' },
  { name: 'Vacant Properties', description: 'Homes sitting empty' },
  { name: 'Absentee Owners', description: 'Out-of-state property owners' },
  { name: 'High Equity', description: 'Owners with significant equity' },
  { name: 'Probate', description: 'Inherited properties' },
  { name: 'Tax Delinquent', description: 'Behind on property taxes' },
  { name: 'Tired Landlords', description: 'Long-term rental owners' },
]

const testimonial = {
  content:
    'I was spending $5k/month on PPC with inconsistent results. Switched to REmail for direct mail and now I am getting 3x the leads at half the cost. Found my best flip deal ever through a yellow letter campaign.',
  author: 'Sarah Chen',
  role: 'Fix & Flip Investor, Phoenix AZ',
  metric: '$127k profit on last flip',
}

export default function FlippersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://remaildirect.com' },
          { name: 'For Flippers', url: 'https://remaildirect.com/flippers' },
        ])}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-20 lg:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-6 bg-accent/20 text-accent hover:bg-accent/20">
              For Fix & Flip Investors
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Source More{' '}
              <span className="text-accent">Off-Market Deals</span>{' '}
              with Direct Mail
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Find distressed properties and motivated sellers before they hit the MLS.
              Automated direct mail campaigns built for house flippers.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button size="lg" asChild className="gap-2">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-white/30 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/50"
              >
                <Link href="#lists">See Target Lists</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Flippers Choose REmail
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Stop competing on the MLS. Find deals others miss.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target lists */}
      <section id="lists" className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Target the Right Properties
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Access lists of motivated sellers filtered by your exact criteria.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {targetLists.map((list) => (
              <div
                key={list.name}
                className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md hover:-translate-y-1"
              >
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold text-foreground">{list.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {list.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-slate-900 p-8 lg:p-12">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <blockquote className="mt-6">
                <p className="text-xl text-white lg:text-2xl">
                  &quot;{testimonial.content}&quot;
                </p>
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent" />
                <div>
                  <p className="font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-slate-400">{testimonial.role}</p>
                </div>
              </div>
              <Badge className="mt-6 bg-accent text-white hover:bg-accent">
                {testimonial.metric}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator teaser */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <BarChart3 className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
              Calculate Your ROI
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Most flippers see a 5-10x return on their direct mail investment.
              With average flip profits of $30-50k, even one deal pays for a year of campaigns.
            </p>
            <div className="mt-8 rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-foreground">$500</p>
                  <p className="text-sm text-muted-foreground">Avg Campaign Cost</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">3-5</p>
                  <p className="text-sm text-muted-foreground">Leads Generated</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">$35k+</p>
                  <p className="text-sm text-muted-foreground">Avg Flip Profit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Find Your Next Flip?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Start sending direct mail to distressed property owners today.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-blue-50 shadow-lg"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/50 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white"
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
