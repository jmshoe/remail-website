import {
  Mail,
  Users,
  Zap,
  BarChart3,
  FileText,
  RefreshCw,
  MapPin,
  Search,
} from 'lucide-react'

const features = [
  {
    name: 'Direct Mail Automation',
    description:
      'Schedule and send postcards and letters automatically. Set it and forget it while your campaigns work for you.',
    icon: Mail,
  },
  {
    name: 'Skip Tracing Integration',
    description:
      'Access to skip tracing APIs from trusted third-party providers. Find phone numbers, emails, and mailing addresses.',
    icon: Search,
  },
  {
    name: 'Smart List Building',
    description:
      'Target absentee owners, pre-foreclosures, probate leads, tax delinquent properties, and more.',
    icon: Users,
  },
  {
    name: 'Template Designer',
    description:
      'Create professional postcards and letters with our drag-and-drop designer. Proven templates included.',
    icon: FileText,
  },
  {
    name: 'Campaign Analytics',
    description:
      'Track response rates, ROI, and conversion metrics. Know exactly what is working.',
    icon: BarChart3,
  },
  {
    name: 'Drip Campaigns',
    description:
      'Set up automated follow-up sequences. Hit the same list multiple times for maximum response.',
    icon: RefreshCw,
  },
  {
    name: 'Multi-Market Support',
    description:
      'Run campaigns in multiple markets simultaneously. Scale your business across cities and states.',
    icon: MapPin,
  },
  {
    name: 'Lightning Fast',
    description:
      '3-day turnaround from design to delivery. Your mail hits mailboxes before the competition.',
    icon: Zap,
  },
]

export function Features() {
  return (
    <section className="section-padding bg-slate-50" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary">Everything you need</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Direct Mail Marketing Made Simple
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From list building to campaign tracking, REmail has all the tools you need
            to reach motivated sellers and close more deals.
          </p>
        </div>

        {/* Features grid */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="group relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
