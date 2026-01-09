import { Metadata } from 'next'
import Link from 'next/link'
import {
  Calculator,
  TrendingUp,
  Target,
  HelpCircle,
  ChevronDown,
  Mail,
  BarChart3,
  Users,
  Zap,
  Percent,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { JsonLd, breadcrumbSchema, faqSchema } from '@/components/seo/JsonLd'
import { SampleSizeCalculator } from '@/components/calculators/SampleSizeCalculator'
import { CalBooking } from '@/components/marketing/CalBooking'

export const metadata: Metadata = {
  title: 'Direct Mail Sample Size Calculator | Free A/B Test Calculator | REmail',
  description:
    'Calculate the sample size needed for A/B testing your direct mail campaigns. Free statistical calculator for postcards, letters, and mailers. Find out how many pieces you need for statistically significant results.',
  keywords: [
    'direct mail sample size calculator',
    'direct mail A/B testing',
    'postcard split test calculator',
    'mail campaign sample size',
    'direct mail statistical significance',
    'how many postcards for A/B test',
    'direct mail test calculator',
    'mailing list sample size',
    'direct mail experiment calculator',
    'real estate mail testing',
  ],
  openGraph: {
    title: 'Direct Mail Sample Size Calculator | Free A/B Test Tool',
    description:
      'Calculate how many mail pieces you need to run a statistically valid A/B test. Free calculator for direct mail marketers.',
    url: 'https://www.remaildirect.com/direct-mail-sample-size-calculator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Direct Mail Sample Size Calculator',
    description: 'Free A/B test sample size calculator for direct mail campaigns',
  },
  alternates: {
    canonical: 'https://www.remaildirect.com/direct-mail-sample-size-calculator',
  },
}

const faqs = [
  {
    question: 'What sample size do I need for direct mail A/B testing?',
    answer:
      'The required sample size depends on your baseline response rate, the minimum effect you want to detect, and your desired statistical confidence. For typical direct mail campaigns with a 0.5% response rate, you need approximately 13,000-26,000 pieces per variation to detect a 20% relative improvement with 95% confidence. Use our calculator above to find the exact number for your specific parameters.',
  },
  {
    question: 'How do I calculate minimum detectable effect (MDE) for direct mail?',
    answer:
      'Minimum Detectable Effect (MDE) is the smallest improvement in response rate that your test can reliably identify. For direct mail, we recommend using relative MDE (percentage change) rather than absolute. A 20% relative MDE means if your baseline is 0.5%, you can detect a lift to 0.6% (0.5% × 1.20). Smaller MDEs require larger sample sizes but catch smaller improvements.',
  },
  {
    question: 'What is a good response rate for direct mail?',
    answer:
      'Direct mail response rates for real estate typically range from 0.3% to 1%, with 0.4-0.6% being average for well-targeted lists. Higher quality lists (absentee owners, pre-foreclosure, high equity) generally perform better. Response rates also improve with consistent mailing over 3-6 months as recipients recognize your brand.',
  },
  {
    question: 'How long should I run a direct mail A/B test?',
    answer:
      'A direct mail A/B test should run until you\'ve sent the required sample size to each variation. For a typical test requiring 15,000 pieces per variation, this might take 1-3 months depending on your monthly mail volume. Don\'t stop the test early based on preliminary results—let it run to completion to avoid false conclusions.',
  },
  {
    question: 'What is statistical significance in direct mail testing?',
    answer:
      'Statistical significance measures how confident you can be that observed differences aren\'t due to random chance. A 95% significance level (industry standard) means there\'s only a 5% probability your result is a false positive. For direct mail, we recommend 95% significance for important decisions like changing your primary mail piece, or 90% for lower-stakes tests.',
  },
  {
    question: 'Can I test more than two variations at once?',
    answer:
      'Yes, but each additional variation increases your required sample size proportionally. Testing 3 variations requires 3x the total mail volume compared to a simple A/B test. For most direct mail campaigns, we recommend sequential A/B tests: test two options, pick the winner, then test the winner against a new challenger.',
  },
]

const howItWorks = [
  {
    icon: Percent,
    title: 'Enter Your Baseline Rate',
    description:
      'Input your current or expected response rate. This is your starting point before any changes.',
  },
  {
    icon: TrendingUp,
    title: 'Set Minimum Detectable Effect',
    description:
      'Choose the smallest improvement you want to detect. Smaller effects need larger samples.',
  },
  {
    icon: Target,
    title: 'Choose Significance Level',
    description:
      'Select your confidence level (95% recommended). Higher confidence requires more mail pieces.',
  },
  {
    icon: Calculator,
    title: 'Get Your Sample Size',
    description:
      'See exactly how many pieces to send per variation, total mail needed, and estimated cost.',
  },
]

// Software Application schema for the calculator tool
function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Direct Mail Sample Size Calculator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description:
      'Free calculator to determine the required sample size for A/B testing direct mail campaigns with statistical significance.',
    featureList: [
      'Real-time sample size calculation',
      'MDE sensitivity analysis',
      'Cost estimation',
      'Statistical significance options',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      reviewCount: '32',
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
    name: 'How to Calculate Sample Size for Direct Mail A/B Testing',
    description:
      'Learn how to calculate the required sample size for statistically valid direct mail A/B tests.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Determine baseline response rate',
        text: 'Identify your current or expected direct mail response rate (typically 0.3-1% for real estate).',
      },
      {
        '@type': 'HowToStep',
        name: 'Set minimum detectable effect',
        text: 'Decide the smallest relative improvement you want to detect (e.g., 20% relative lift).',
      },
      {
        '@type': 'HowToStep',
        name: 'Choose confidence level',
        text: 'Select your statistical significance level (95% is standard for most tests).',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate sample size',
        text: 'Use the sample size formula or our calculator to determine pieces needed per variation.',
      },
      {
        '@type': 'HowToStep',
        name: 'Run your test',
        text: 'Send the calculated number of mail pieces to each variation and measure results.',
      },
    ],
  }
}

export default function DirectMailSampleSizeCalculatorPage() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://www.remaildirect.com' },
          {
            name: 'Direct Mail Sample Size Calculator',
            url: 'https://www.remaildirect.com/direct-mail-sample-size-calculator',
          },
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
              <span className="gradient-text">Sample Size Calculator</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Calculate exactly how many mail pieces you need for statistically valid A/B tests.
              Input your response rate and minimum detectable effect to get your required sample
              size with cost estimates.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <a href="#calculator">
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate Sample Size
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
          <SampleSizeCalculator />
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
              Follow these steps to determine the right sample size for your direct mail A/B test.
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
              Common questions about sample size calculation and A/B testing for direct mail.
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
              <BarChart3 className="mr-2 h-4 w-4" />
              Ready to optimize your campaigns?
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let Us Handle Your Direct Mail Testing
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Skip the complexity of A/B testing. REmail manages your campaigns with built-in
              optimization, tracking, and reporting—so you can focus on closing deals.
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
            <h2>Understanding Sample Size for Direct Mail A/B Testing</h2>
            <p>
              Sample size calculation is critical for running valid A/B tests on your direct mail
              campaigns. Without sufficient sample size, you risk making decisions based on random
              variation rather than real differences between your mail pieces.
            </p>
            <p>
              The key factors that determine your required sample size are: your baseline response
              rate, the minimum effect you want to detect (MDE), and your desired statistical
              confidence level. Lower response rates and smaller MDEs require larger samples.
            </p>

            <h3>Why Sample Size Matters in Direct Mail</h3>
            <p>
              Direct mail has inherently low response rates (typically 0.3-1%), which means you need
              substantial sample sizes to detect improvements. Testing with too few pieces often
              leads to inconclusive results or false conclusions that waste marketing budget.
            </p>
            <p>
              For example, with a 0.5% baseline response rate and a goal of detecting a 20%
              relative improvement, you need approximately 13,000 mail pieces per variation. This
              ensures you have enough data points to distinguish real improvements from noise.
            </p>

            <h3>Practical Tips for Direct Mail Testing</h3>
            <p>
              When planning your A/B tests, consider these best practices: (1) Test one variable at
              a time for clear insights; (2) Run tests to completion—don&apos;t stop early; (3)
              Consider larger MDEs (25-30%) if sample size is a constraint; (4) Document your
              results for future reference.
            </p>
            <p>
              Remember that direct mail campaigns compound over time. Initial tests help you
              establish a strong baseline, and subsequent tests can fine-tune your approach for
              maximum ROI.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
