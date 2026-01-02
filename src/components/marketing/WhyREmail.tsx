import { Mail, Users, Eye, BarChart3 } from 'lucide-react'

const differentiators = [
  {
    icon: Mail,
    stat: '20M+',
    title: 'Mailers Delivered',
    description:
      'Real volume, real results, across every market. Proven track record with quantifiable outcomes.',
  },
  {
    icon: Users,
    title: 'Done-With-You Model',
    description:
      'We work alongside you, not just for you. Collaboration, not campaigns on autopilot. Your success is our success.',
  },
  {
    icon: Eye,
    title: 'Full Transparency',
    description:
      'Every cost, every step, visible to you. Complete access to processes, performance metrics, and campaign data.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Everything',
    description:
      'No fluff, only tested tactics that drive ROI. Every decision backed by analytics and continuous testing.',
  },
]

export function WhyREmail() {
  return (
    <section className="section-padding bg-white" id="why-remail">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-primary">Why REmail</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ditch the Black Box. Demand Results.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            You deserve to know exactly where your marketing dollars go — no hidden fees,
            no secret algorithms. We work with you, not for you. You stay in control. We deliver the leads.
          </p>
        </div>

        {/* Differentiators grid */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="group relative flex gap-5 rounded-2xl bg-slate-50 p-6 transition-all duration-200 hover:bg-slate-100"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/25">
                  <item.icon className="h-7 w-7" />
                </div>
                <div>
                  {item.stat && (
                    <p className="text-2xl font-bold text-primary">{item.stat}</p>
                  )}
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 p-8 text-center ring-1 ring-slate-200">
          <p className="text-lg text-slate-700">
            At REmail, we&apos;re not just a mail vendor — we&apos;re your partner in crushing lead generation.
            Unlike the black-box agencies that leave you guessing, we put you in the driver&apos;s seat
            with full transparency and collaboration.
          </p>
        </div>
      </div>
    </section>
  )
}
