import { Upload, Palette, Send, TrendingUp } from 'lucide-react'

const steps = [
  {
    step: '01',
    name: 'Connect Your Data',
    description:
      'Connect your data or use our built-in list tools to find absentee owners, pre-foreclosures, and more.',
    icon: Upload,
  },
  {
    step: '02',
    name: 'Design Your Mailer',
    description:
      'Choose from proven templates or create your own. Check letters, offer letters, postcards, and professional letters available.',
    icon: Palette,
  },
  {
    step: '03',
    name: 'Launch Campaign',
    description:
      'Set your schedule and hit send. We print, address, and mail everything for you. Delivery as fast as 5-7 days.',
    icon: Send,
  },
  {
    step: '04',
    name: 'Track Results',
    description:
      'Monitor response rates and ROI in real-time. Optimize campaigns based on what is performing.',
    icon: TrendingUp,
  },
]

export function HowItWorks() {
  return (
    <section className="section-padding bg-white" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary">Simple process</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How Direct Mail Automation Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get your first campaign live in under a week. No design skills required.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.name} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-gradient-to-r from-primary/20 to-primary/5 lg:block" />
                )}

                <div className="relative flex flex-col items-center text-center">
                  {/* Step number */}
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/5 ring-1 ring-primary/10">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  <span className="mt-4 text-xs font-bold tracking-widest text-primary">
                    STEP {step.step}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {step.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
