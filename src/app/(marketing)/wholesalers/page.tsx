import { Metadata } from 'next'
import Link from 'next/link'
import {
  Target,
  TrendingUp,
  Zap,
  DollarSign,
  Users,
  BarChart3,
  Check,
  ArrowRight,
  Star,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Direct Mail for Wholesalers | Find Motivated Sellers | REmail',
  description:
    'Direct mail automation built for real estate wholesalers. Find motivated sellers, send targeted campaigns, and close more deals. Skip tracing, list building, and drip campaigns included.',
  keywords: [
    'wholesaling direct mail',
    'wholesaling real estate',
    'motivated sellers',
    'real estate wholesaler marketing',
    'direct mail for wholesalers',
    'absentee owner marketing',
  ],
  openGraph: {
    title: 'Direct Mail for Wholesalers | Find Motivated Sellers | REmail',
    description:
      'Direct mail automation built for real estate wholesalers. Find motivated sellers and close more deals.',
    url: 'https://www.remaildirect.com/wholesalers',
  },
  alternates: {
    canonical: 'https://www.remaildirect.com/wholesalers',
  },
}

const benefits = [
  {
    icon: Target,
    title: 'Target Motivated Sellers',
    description:
      'Reach absentee owners, pre-foreclosures, probate properties, and other motivated seller lists.',
  },
  {
    icon: Zap,
    title: 'Faster Than Competition',
    description:
      '5-day delivery gets your mail in hands before other wholesalers even send theirs.',
  },
  {
    icon: TrendingUp,
    title: 'Higher Response Rates',
    description:
      'Our proven templates average 1.2% response rates. Get more calls and more deals.',
  },
  {
    icon: DollarSign,
    title: 'Lower Cost Per Deal',
    description:
      'Volume discounts and automation mean you spend less per mailer, improving your ROI.',
  },
]

const features = [
  'Absentee owner lists',
  'Pre-foreclosure lists',
  'Probate property lists',
  'Tax delinquent lists',
  'Skip tracing integration',
  'Drip campaign automation',
  'Proven yellow letter templates',
  'We buy houses postcards',
  'Response tracking',
  'CRM integration',
]

const testimonial = {
  content:
    'REmail changed our wholesaling business. We went from 2-3 deals per month to 8-10 just by scaling our direct mail. The automation saves us 20+ hours per week.',
  author: 'Marcus Thompson',
  role: 'Wholesaler, Dallas TX',
  metric: '12 deals in 90 days',
}

export default function WholesalersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://www.remaildirect.com' },
          { name: 'For Wholesalers', url: 'https://www.remaildirect.com/wholesalers' },
        ])}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-20 lg:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-6 bg-accent/20 text-accent hover:bg-accent/20">
              For Real Estate Wholesalers
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Find More{' '}
              <span className="text-accent">Motivated Sellers</span>{' '}
              with Direct Mail
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Automate your direct mail campaigns and focus on what matters: closing deals.
              REmail was built specifically for wholesalers who want to scale.
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
                <Link href="#features">See Features</Link>
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
              Why Wholesalers Choose REmail
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Built by investors, for investors. We understand your business.
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

      {/* Features list */}
      <section id="features" className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Everything You Need to Scale Your Wholesaling Business
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From finding motivated sellers to tracking responses, REmail has
                all the tools you need in one platform.
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="mt-8 gap-2">
                <Link href="/services">
                  View All Features
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Testimonial */}
            <div className="flex items-center">
              <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="mt-4">
                  <p className="text-lg text-foreground">
                    &quot;{testimonial.content}&quot;
                  </p>
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent" />
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <Badge className="mt-4 bg-accent/10 text-accent hover:bg-accent/10">
                  {testimonial.metric}
                </Badge>
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
              Ready to Close More Wholesale Deals?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Join wholesalers using REmail to find motivated sellers.
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
