import { Target, Workflow, Users, Database } from 'lucide-react'

const approaches = [
  {
    icon: Target,
    title: 'Avatar Targeted Campaigns',
    description:
      'Content and copy that actually speaks to your ideal seller, not at them. We craft mail pieces that speak your seller\'s language — not generic junk that gets tossed.',
  },
  {
    icon: Workflow,
    title: 'Automated End-to-End',
    description:
      'Simply upload your lists and let our platform manage the data, segmentation, suppressions, and direct mail fulfillment. You stay informed and in control every step of the way.',
  },
  {
    icon: Users,
    title: 'Done-With-You Mail',
    description:
      'No black boxes with unclear results. Unlike others who disappear after sending, we collaborate throughout with full process visibility.',
  },
  {
    icon: Database,
    title: 'Data-Driven List Selection',
    description:
      'No matter the data source, we isolate the best performing segments to drive hot leads. No dumping in stale leads — we optimize your best segments relentlessly.',
  },
]

export function OurApproach() {
  return (
    <section className="section-padding bg-slate-900 text-white" id="approach">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-accent">Our Approach</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Mail Engineered for Success
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Transparency, targeting, and tested creative — no exceptions.
            Here&apos;s how we outperform the competition.
          </p>
        </div>

        {/* Approaches grid */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {approaches.map((item, index) => (
              <div
                key={item.title}
                className="group relative rounded-2xl bg-slate-800/50 p-6 ring-1 ring-slate-700 transition-all duration-200 hover:bg-slate-800 hover:ring-primary/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-slate-500">0{index + 1}</span>
                      <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: '20M+', label: 'Mailers Sent' },
              { value: '1.2%', label: 'Avg Response Rate' },
              { value: '5.2x', label: 'Avg ROAS' },
              { value: 'Proven', label: 'Templates' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-white md:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
