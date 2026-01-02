import { Metadata } from 'next'
import Link from 'next/link'
import { Check, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Pricing | REmail Direct Mail Automation',
  description:
    'Simple, transparent pricing for direct mail automation. Postcards from $0.50, letters from $0.85. No minimum orders, no monthly fees. Pay only for what you send.',
  keywords: [
    'direct mail pricing',
    'postcard mailing cost',
    'real estate direct mail cost',
    'bulk mail pricing',
  ],
  openGraph: {
    title: 'Pricing | REmail Direct Mail Automation',
    description:
      'Simple, transparent pricing for direct mail automation. Postcards from $0.50. No minimums.',
    url: 'https://remail.com/pricing',
  },
  alternates: {
    canonical: 'https://remail.com/pricing',
  },
}

const tiers = [
  {
    name: 'Starter',
    id: 'starter',
    price: { postcard: '$0.65', letter: '$1.00' },
    description: 'Perfect for getting started with direct mail.',
    features: [
      'No minimum orders',
      'All postcard sizes',
      'Basic templates',
      'Email support',
      '5-day delivery',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    id: 'professional',
    price: { postcard: '$0.50', letter: '$0.85' },
    description: 'Best for active investors sending 500+ pieces/month.',
    features: [
      'Everything in Starter',
      'Volume discounts',
      'Skip tracing ($0.08/record)',
      'Drip campaigns',
      'Priority 3-day delivery',
      'Phone support',
      'CRM integrations',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    id: 'enterprise',
    price: { postcard: 'Custom', letter: 'Custom' },
    description: 'For teams sending 5,000+ pieces/month.',
    features: [
      'Everything in Professional',
      'Custom pricing',
      'Dedicated account manager',
      'API access',
      'Custom integrations',
      'White-label options',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

const addons = [
  { name: 'Skip Tracing', price: '$0.08/record', description: 'Phone, email, and address lookup' },
  { name: 'List Building', price: '$0.03/record', description: 'Absentee, pre-foreclosure, probate lists' },
  { name: 'Custom Design', price: '$99/design', description: 'Professional template design' },
]

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://remail.com' },
          { name: 'Pricing', url: 'https://remail.com/pricing' },
        ])}
      />

      {/* Hero */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              No monthly fees. No minimums. Pay only for what you send.
              Volume discounts available.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={cn(
                  'relative rounded-2xl bg-white p-8 shadow-sm ring-1 transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
                  tier.popular
                    ? 'ring-2 ring-primary scale-105 shadow-lg z-10'
                    : 'ring-slate-200 hover:ring-primary/50'
                )}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}

                <div className="text-center">
                  <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>

                  <div className="mt-6">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold text-foreground">
                        {tier.price.postcard}
                      </span>
                      <span className="text-muted-foreground">/postcard</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Letters from {tier.price.letter}
                    </p>
                  </div>
                </div>

                <ul className="mt-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={cn(
                    'mt-8 w-full',
                    tier.popular ? '' : 'variant-outline'
                  )}
                  variant={tier.popular ? 'default' : 'outline'}
                >
                  <Link href={tier.id === 'enterprise' ? '/contact' : '/contact'}>
                    {tier.cta}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Optional Add-ons
            </h2>
            <p className="mt-4 text-muted-foreground">
              Enhance your campaigns with additional services.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="font-semibold text-foreground">{addon.name}</h3>
                <p className="mt-1 text-2xl font-bold text-primary">{addon.price}</p>
                <p className="mt-2 text-sm text-muted-foreground">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <HelpCircle className="mx-auto h-12 w-12 text-muted-foreground" />
            <h2 className="mt-4 text-2xl font-bold text-foreground">
              Have questions about pricing?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Check out our FAQ or contact our team for a custom quote.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Button asChild variant="outline">
                <Link href="/#faq">View FAQ</Link>
              </Button>
              <Button asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
