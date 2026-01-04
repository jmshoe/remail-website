import { Metadata } from 'next'
import Link from 'next/link'
import { Check, HelpCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Pricing | REmail Direct Mail Automation',
  description:
    'Simple, transparent pricing for direct mail automation. No monthly fees on mail volume. Pay only for what you send. 90-day contract guarantee.',
  keywords: [
    'direct mail pricing',
    'postcard mailing cost',
    'real estate direct mail cost',
    'bulk mail pricing',
    'direct mail automation pricing',
  ],
  openGraph: {
    title: 'Pricing | REmail Direct Mail Automation',
    description:
      'Simple, transparent pricing for direct mail automation. No monthly fees on mail volume. 90-day contract guarantee.',
    url: 'https://remaildirect.com/pricing',
  },
  alternates: {
    canonical: 'https://remaildirect.com/pricing',
  },
}

const tiers = [
  {
    id: 'deal-flow-foundation',
    name: 'Deal Flow Foundation',
    tagline: 'Perfect for getting started with direct mail',
    term: 'Monthly',
    termMonths: 1,
    setupFee: 999,
    setupFeeWaived: false,
    monthlyManagement: 1999,
    totalToday: 2998,
    savings: 0,
    totalSavings: 0,
    highlighted: false,
    ctaText: 'Get Started',
    ctaStyle: 'outline',
    features: [
      'Unlimited mail volume',
      '4 top performing creatives',
      'Mail volume + spend reporting',
      'Training included',
    ],
    addOns: [
      { name: 'CRM Integration', price: '$500' },
      { name: 'ROAS Reporting', price: '$1,250' },
      { name: 'Mail Forecasting', price: '$1,000' },
      { name: 'Offer Price Enrichment API', price: '$0.02/record' },
    ],
  },
  {
    id: 'contract-catalyst',
    name: 'Contract Catalyst',
    tagline: 'Best for investors sending 25,000+ mailers monthly',
    term: '6 Month',
    termMonths: 6,
    setupFee: 999,
    setupFeeWaived: true,
    monthlyManagement: 1699,
    totalToday: 10194,
    savings: 2799,
    totalSavings: 3299,
    highlighted: true,
    badge: 'Most Popular',
    ctaText: 'Get Started',
    ctaStyle: 'filled',
    features: [
      'Everything in Deal Flow Foundation',
      'Training included',
      'CRM Integration included',
      'ROAS Reporting: $1,250 (discounted add-on)',
      'Mail Forecasting: $1,000 (discounted add-on)',
      'Offer Price Enrichment API: $0.02/record',
      'Priority Support',
    ],
  },
  {
    id: 'market-maximizer',
    name: 'Market Maximizer',
    tagline: 'For teams sending 50,000+ pieces/month',
    term: '12 Month',
    termMonths: 12,
    setupFee: 999,
    setupFeeWaived: true,
    monthlyManagement: 1499,
    totalToday: 17988,
    savings: 6999,
    totalSavings: 10749,
    highlighted: false,
    ctaText: 'Contact Sales',
    ctaStyle: 'outline',
    features: [
      'Everything in Contract Catalyst',
      'Training included',
      'CRM Integration included',
      'ROAS Reporting included',
      'Mail Forecasting included',
      'Offer Price Enrichment API: $0.01/record (50% discount)',
      'Priority Support',
      'Dedicated Account Manager',
    ],
  },
]

const mailPricing = [
  { type: 'Postcards', price: 0.6 },
  { type: 'Letters', price: 0.65 },
  { type: 'Check Letter Snap Pack', price: 0.67 },
  { type: 'Handwritten', price: 0.9 },
]

const addons = [
  {
    name: 'Skip Tracing',
    price: '$0.08/record',
    description: 'Phone, email, and address lookup',
  },
  {
    name: 'List Building',
    price: '$0.03/record',
    description: 'Absentee, pre-foreclosure, probate lists',
  },
  {
    name: 'Custom Design',
    price: '$99/design',
    description: 'Professional template design',
  },
]

function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

function formatPriceDecimal(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price)
}

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://remaildirect.com' },
          { name: 'Pricing', url: 'https://remaildirect.com/pricing' },
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
              No monthly fees on mail volume. Pay only for what you send. Volume discounts
              available.
            </p>
            <div className="mt-6">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                90 Day Contract Guarantee — If you don&apos;t get a contract in your first 90 days,
                you get your money back
              </Badge>
            </div>
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
                  tier.highlighted
                    ? 'ring-2 ring-primary scale-105 shadow-lg z-10'
                    : 'ring-slate-200 hover:ring-primary/50'
                )}
              >
                {tier.badge && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white">
                    {tier.badge}
                  </Badge>
                )}

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{tier.tagline}</p>
                  {tier.termMonths === 1 ? (
                    <Badge className="mt-2 bg-slate-100 text-slate-700 hover:bg-slate-100">
                      Month-to-Month Contract
                    </Badge>
                  ) : (
                    <Badge className="mt-2 bg-slate-100 text-slate-700 hover:bg-slate-100">
                      {tier.term} Contract
                    </Badge>
                  )}

                  <div className="mt-6">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-5xl font-bold text-foreground">
                          {formatPrice(tier.totalToday)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">Total Today</p>
                      {tier.setupFeeWaived && (
                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-sm text-muted-foreground line-through">
                            Setup: {formatPrice(tier.setupFee)}
                          </span>
                          <span className="text-sm font-medium text-green-600">Included</span>
                        </div>
                      )}
                      {!tier.setupFeeWaived && (
                        <p className="mt-1 text-sm text-muted-foreground">
                          Setup: {formatPrice(tier.setupFee)} + First Month:{' '}
                          {formatPrice(tier.monthlyManagement)}
                        </p>
                      )}
                      <p className="mt-1 text-sm text-muted-foreground">
                        Then {formatPrice(tier.monthlyManagement)}/month
                      </p>
                      {tier.savings > 0 && (
                        <Badge className="mt-2 bg-green-100 text-green-800 hover:bg-green-100">
                          Save {formatPrice(tier.savings)}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                <ul className="mt-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-teal-500" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={cn('mt-8 w-full')}
                  variant={tier.ctaStyle === 'filled' ? 'default' : 'outline'}
                >
                  <Link href={tier.id === 'market-maximizer' ? '/contact' : '/contact'}>
                    {tier.ctaText}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Per Mail Piece Pricing */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Per Mail Piece Pricing
            </h2>
            <p className="mt-4 text-muted-foreground">
              All tiers share the same per-piece pricing. Direct mail costs increase July 13th,
              2025. All cost increases will pass through to clients.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {mailPricing.map((item) => (
              <div
                key={item.type}
                className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 text-center"
              >
                <h3 className="font-semibold text-foreground">{item.type}</h3>
                <p className="mt-2 text-2xl font-bold text-primary">
                  {formatPriceDecimal(item.price)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Optional Add-On Services
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

      {/* Service Inclusion Matrix */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground text-center">
              What&apos;s Included in Each Tier
            </h2>
            <div className="mt-12 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                      Service
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">
                      Deal Flow Foundation
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">
                      Contract Catalyst
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">
                      Market Maximizer
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      Unlimited Mail Volume
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Check className="mx-auto h-5 w-5 text-teal-500" />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Check className="mx-auto h-5 w-5 text-teal-500" />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Check className="mx-auto h-5 w-5 text-teal-500" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      4 Top Performing Creatives
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Check className="mx-auto h-5 w-5 text-teal-500" />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Check className="mx-auto h-5 w-5 text-teal-500" />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Check className="mx-auto h-5 w-5 text-teal-500" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      Mail Volume + Spend Reporting
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Check className="mx-auto h-5 w-5 text-teal-500" />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Check className="mx-auto h-5 w-5 text-teal-500" />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Check className="mx-auto h-5 w-5 text-teal-500" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-muted-foreground">Training</td>
                    <td className="px-4 py-3 text-center">
                      <Check className="mx-auto h-5 w-5 text-teal-500" />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Check className="mx-auto h-5 w-5 text-teal-500" />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Check className="mx-auto h-5 w-5 text-teal-500" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-muted-foreground">Setup Fee Waived</td>
                    <td className="px-4 py-3 text-center">
                      <X className="mx-auto h-5 w-5 text-slate-400" />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Check className="mx-auto h-5 w-5 text-teal-500" />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Check className="mx-auto h-5 w-5 text-teal-500" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-muted-foreground">CRM Integration</td>
                    <td className="px-4 py-3 text-center text-sm text-muted-foreground">$500</td>
                    <td className="px-4 py-3 text-center">
                      <Check className="mx-auto h-5 w-5 text-teal-500" />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Check className="mx-auto h-5 w-5 text-teal-500" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-muted-foreground">ROAS Reporting</td>
                    <td className="px-4 py-3 text-center text-sm text-muted-foreground">$1,250</td>
                    <td className="px-4 py-3 text-center text-sm text-muted-foreground">$1,250</td>
                    <td className="px-4 py-3 text-center">
                      <Check className="mx-auto h-5 w-5 text-teal-500" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-muted-foreground">Mail Forecasting</td>
                    <td className="px-4 py-3 text-center text-sm text-muted-foreground">$1,000</td>
                    <td className="px-4 py-3 text-center text-sm text-muted-foreground">$1,000</td>
                    <td className="px-4 py-3 text-center">
                      <Check className="mx-auto h-5 w-5 text-teal-500" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      Offer Price Enrichment API
                    </td>
                    <td className="px-4 py-3 text-center text-sm text-muted-foreground">
                      $0.02/rec
                    </td>
                    <td className="px-4 py-3 text-center text-sm text-muted-foreground">
                      $0.02/rec
                    </td>
                    <td className="px-4 py-3 text-center text-sm text-muted-foreground">
                      $0.01/rec
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-muted-foreground">Priority Support</td>
                    <td className="px-4 py-3 text-center">
                      <X className="mx-auto h-5 w-5 text-slate-400" />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Check className="mx-auto h-5 w-5 text-teal-500" />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Check className="mx-auto h-5 w-5 text-teal-500" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      Dedicated Account Manager
                    </td>
                    <td className="px-4 py-3 text-center">
                      <X className="mx-auto h-5 w-5 text-slate-400" />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <X className="mx-auto h-5 w-5 text-slate-400" />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Check className="mx-auto h-5 w-5 text-teal-500" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
