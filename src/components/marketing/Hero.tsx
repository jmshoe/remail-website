import Link from 'next/link'
import { ArrowRight, CheckCircle, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const highlights = [
  '20M+ mailers sent',
  'Full transparency',
  'Done-with-you approach',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-32">
        {/* Left content */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <Badge variant="secondary" className="mb-6 gap-1.5 py-1.5 px-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Trusted by 500+ Real Estate Investors
          </Badge>

          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Automated Direct Mail{' '}
            <span className="gradient-text">That Never Stops Working</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground lg:text-xl max-w-xl">
            Done-with-you direct mail backed by 20 million+ mailers sent. Full transparency,
            real-time control, and campaigns engineered to turn cold leads into closed deals.
          </p>

          {/* Highlights */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-accent" />
                {item}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button size="lg" asChild className="gap-2 shadow-lg shadow-primary/25">
              <Link href="/contact">
                Get Free 7-Figure Direct Mail Blueprint
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2">
              <Link href="/contact">
                Schedule Strategy Session
              </Link>
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[
                'from-blue-400 to-blue-600',
                'from-emerald-400 to-emerald-600',
                'from-amber-400 to-amber-600',
                'from-rose-400 to-rose-600',
                'from-violet-400 to-violet-600',
              ].map((gradient, i) => (
                <div
                  key={i}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${gradient} ring-2 ring-white text-xs font-semibold text-white`}
                >
                  {['JT', 'SC', 'MR', 'KL', 'DW'][i]}
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1">
                <span className="font-bold text-foreground">Real investors</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground">who ditched the black box</p>
            </div>
          </div>
        </div>

        {/* Right content - Product preview */}
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            {/* Main card */}
            <div className="relative rounded-2xl bg-slate-900 p-2 shadow-2xl ring-1 ring-slate-900/5">
              <div className="rounded-xl bg-slate-800 p-6">
                {/* Mock dashboard header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs text-slate-400">dashboard.remail.com</div>
                </div>

                {/* Mock stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="rounded-lg bg-slate-700/50 p-4">
                    <p className="text-2xl font-bold text-white">20M+</p>
                    <p className="text-xs text-slate-400">Mailers Sent</p>
                  </div>
                  <div className="rounded-lg bg-slate-700/50 p-4">
                    <p className="text-2xl font-bold text-accent">4.2%</p>
                    <p className="text-xs text-slate-400">Avg Response</p>
                  </div>
                  <div className="rounded-lg bg-slate-700/50 p-4">
                    <p className="text-2xl font-bold text-white">5.2x</p>
                    <p className="text-xs text-slate-400">Avg ROAS</p>
                  </div>
                </div>

                {/* Mock campaign list */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-lg bg-slate-700/50 p-3">
                    <div>
                      <p className="text-sm font-medium text-white">Absentee Owners - Dallas</p>
                      <p className="text-xs text-slate-400">1,200 recipients • Full visibility</p>
                    </div>
                    <Badge className="bg-accent text-white">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-slate-700/50 p-3">
                    <div>
                      <p className="text-sm font-medium text-white">Pre-Foreclosure - Austin</p>
                      <p className="text-xs text-slate-400">850 recipients • Data-driven</p>
                    </div>
                    <Badge variant="secondary">Scheduled</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 rounded-xl bg-white p-4 shadow-lg ring-1 ring-slate-900/5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium">New Response!</p>
                  <p className="text-xs text-muted-foreground">Motivated seller ready to talk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
