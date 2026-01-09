import { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, TrendingUp, Target, HelpCircle, ChevronDown, Mail, BarChart3, Users, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { JsonLd, breadcrumbSchema, faqSchema } from '@/components/seo/JsonLd'
import { ROASCalculator } from '@/components/calculators/ROASCalculator'
import { CalBooking } from '@/components/marketing/CalBooking'

export const metadata: Metadata = {
  title: 'Direct Mail ROAS Calculator | Free ROI Tool for Real Estate Investors | REmail',
  description:
    'Calculate your direct mail return on ad spend (ROAS) with our free calculator. See expected ROI based on mail volume, response rates, and deal values. Built for real estate investors.',
  keywords: [
    'direct mail ROAS calculator',
    'direct mail ROI calculator',
    'postcard ROI calculator',
    'direct mail cost per acquisition',
    'real estate marketing ROI',
    'direct mail response rate calculator',
    'direct mail campaign calculator',
    'wholesaling direct mail calculator',
  ],
  openGraph: {
    title: 'Direct Mail ROAS Calculator | Free ROI Tool',
    description:
      'Calculate your direct mail return on ad spend. Free sensitivity analysis tool for real estate investors.',
    url: 'https://www.remaildirect.com/direct-mail-roas-calculator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Direct Mail ROAS Calculator',
    description: 'Free ROAS calculator for real estate direct mail campaigns',
  },
  alternates: {
    canonical: 'https://www.remaildirect.com/direct-mail-roas-calculator',
  },
}

const faqs = [
  {
    question: 'What is a good ROAS for direct mail?',
    answer:
      'A good ROAS for direct mail real estate campaigns is 3x or higher, meaning you earn $3 for every $1 spent. Most successful investors target 3-5x ROAS. Below 2x may indicate issues with list quality, mail piece design, or follow-up process. Top performers often achieve 5x or higher ROAS through optimized campaigns and consistent mailing.',
  },
  {
    question: 'How do you calculate direct mail ROI?',
    answer:
      'Direct mail ROI = (Net Revenue - Total Cost) / Total Cost × 100. For example, if you spend $15,000 on mail and close deals worth $45,000 in profit, your ROI is 200% ((45,000-15,000)/15,000 × 100). ROAS is similar but expressed as a multiplier: $45,000 / $15,000 = 3x ROAS.',
  },
  {
    question: 'What response rate should I expect from direct mail?',
    answer:
      'Typical direct mail response rates for real estate range from 0.3% to 1%, with 0.4-0.6% being average for well-targeted lists. Response rate depends on list quality, mail piece design, market conditions, and timing. Absentee owner lists typically perform better than general owner lists. Consistent mailing over 3-6 months improves response rates.',
  },
  {
    question: 'How can I improve my direct mail ROAS?',
    answer:
      'Improve ROAS by: (1) Using high-quality, targeted lists like absentee owners, pre-foreclosure, or high-equity properties; (2) A/B testing mail piece designs and messaging; (3) Following up with leads within 24-48 hours; (4) Mailing consistently (5,000+ pieces/month); (5) Tracking response sources to identify best-performing lists and campaigns.',
  },
  {
    question: 'How many mail pieces should I send per month?',
    answer:
      'Most successful real estate investors send 10,000-25,000 mail pieces per month for consistent deal flow. Starting with 5,000 pieces/month is reasonable for testing, but scaling to 15,000+ pieces monthly typically yields better results due to increased brand recognition and touchpoints. Consistency matters more than volume—mailing monthly is better than sporadic large sends.',
  },
]

const howItWorks = [
  {
    icon: Mail,
    title: 'Enter Your Campaign Details',
    description:
      'Input your planned mail volume, cost per piece, and expected conversion rates based on your market and experience.',
  },
  {
    icon: BarChart3,
    title: 'Review Sensitivity Analysis',
    description:
      'See how different response rates affect your results with our funnel tables showing best-case, expected, and worst-case scenarios.',
  },
  {
    icon: Target,
    title: 'Understand Your ROAS',
    description:
      'Get a clear picture of your expected return on ad spend and identify which metrics have the biggest impact on profitability.',
  },
  {
    icon: Zap,
    title: 'Optimize Your Campaign',
    description:
      'Use the insights to adjust your strategy, improve list quality, or refine your follow-up process for better returns.',
  },
]

// Software Application schema for the calculator tool
function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Direct Mail ROAS Calculator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description:
      'Free calculator to estimate return on ad spend (ROAS) for direct mail marketing campaigns. Built for real estate investors.',
    featureList: [
      'Real-time ROAS calculation',
      'Funnel sensitivity analysis',
      'Response rate projections',
      'Cost per lead analysis',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '45',
      bestRating: '5',
      worstRating: '1',
    },
  }
}

// HowTo schema for featured snippets
function howToSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Direct Mail ROAS',
    description:
      'Learn how to calculate your direct mail return on ad spend using our free calculator.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Enter mail volume',
        text: 'Enter the number of mail pieces you plan to send each month.',
      },
      {
        '@type': 'HowToStep',
        name: 'Set cost per piece',
        text: 'Input your average cost per mail piece including printing and postage.',
      },
      {
        '@type': 'HowToStep',
        name: 'Define conversion rates',
        text: 'Set your expected lead qualification rate, contract rate, and close rate.',
      },
      {
        '@type': 'HowToStep',
        name: 'Review results',
        text: 'Analyze your expected ROAS and review the sensitivity analysis tables.',
      },
    ],
  }
}

export default function DirectMailROASCalculatorPage() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://www.remaildirect.com' },
          { name: 'Direct Mail ROAS Calculator', url: 'https://www.remaildirect.com/direct-mail-roas-calculator' },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={howToSchema()} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-16 lg:py-24">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4" variant="secondary">
              <Calculator className="mr-1 h-3 w-3" />
              Free Tool
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Direct Mail{' '}
              <span className="gradient-text">ROAS Calculator</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Calculate your expected return on ad spend for direct mail campaigns. Input your
              assumptions and see a complete funnel sensitivity analysis with projected ROI ranges.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <a href="#calculator">
                  <Calculator className="mr-2 h-4 w-4" />
                  Use Calculator
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#how-it-works">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  How It Works
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-12 flex justify-center">
            <a
              href="#calculator"
              className="flex flex-col items-center text-muted-foreground transition-colors hover:text-primary"
            >
              <span className="text-sm">Scroll to calculator</span>
              <ChevronDown className="mt-1 h-5 w-5 animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="scroll-mt-20 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ROASCalculator />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="scroll-mt-20 bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How to Use This Calculator
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Follow these steps to get accurate ROAS projections for your direct mail campaigns.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step, index) => (
              <div
                key={step.title}
                className="group relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Common questions about direct mail ROAS and how to improve your campaign performance.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5"
                >
                  <h3 className="flex items-start gap-3 text-lg font-semibold text-foreground">
                    <HelpCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    {faq.question}
                  </h3>
                  <p className="mt-3 pl-8 text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
              <TrendingUp className="mr-2 h-4 w-4" />
              Ready to achieve 3x+ ROAS?
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let Us Handle Your Direct Mail Campaigns
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Stop guessing and start seeing consistent results. REmail manages everything from list
              building to mail fulfillment, so you can focus on closing deals.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <CalBooking
                mode="button"
                variant="default"
                size="lg"
                className="bg-white text-primary hover:bg-blue-50"
              >
                <Users className="mr-2 h-4 w-4" />
                Schedule Strategy Call
              </CalBooking>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-white/50 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-blue-200">
              No commitment required. See if REmail is right for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom SEO Content */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="prose prose-slate mx-auto max-w-3xl">
            <h2>Understanding Direct Mail ROAS for Real Estate Investors</h2>
            <p>
              Return on Ad Spend (ROAS) is a critical metric for real estate investors using direct
              mail to find motivated sellers. Unlike traditional marketing metrics, ROAS for direct
              mail campaigns takes into account the entire funnel from mail piece to closed deal.
            </p>
            <p>
              The key to maximizing your direct mail ROAS is understanding each stage of the funnel:
              response rate, lead qualification, contract rate, and close rate. Our calculator helps
              you visualize how changes at each stage impact your bottom line.
            </p>
            <h3>Why Response Rate Matters Less Than You Think</h3>
            <p>
              Many investors focus solely on response rate, but the real leverage is in your
              conversion rates. A campaign with a 0.3% response rate but 10% contract rate can
              outperform a 0.6% response rate with 5% contracts. Use the sensitivity tables above to
              see how these metrics interact.
            </p>
            <h3>The Power of Consistent Mailing</h3>
            <p>
              Direct mail campaigns compound over time. First-time mailers typically see 2-3x ROAS,
              while investors who mail consistently for 6+ months often achieve 4-6x ROAS due to
              brand recognition, timing, and optimized targeting.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
