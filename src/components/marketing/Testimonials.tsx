import { Star } from 'lucide-react'

const testimonials = [
  {
    content:
      'REmail completely transformed our direct mail strategy. We went from sending 200 postcards manually to 2,000+ automated. Our response rate actually went UP.',
    author: 'Marcus Thompson',
    role: 'Wholesaler, Dallas TX',
    initials: 'MT',
    gradient: 'from-blue-500 to-blue-700',
    rating: 5,
    metric: '12 deals closed',
  },
  {
    content:
      'The skip tracing integration alone is worth the price. I used to pay $0.15/record elsewhere. Now it is built right in and the data is more accurate.',
    author: 'Sarah Chen',
    role: 'Fix & Flip Investor, Phoenix AZ',
    initials: 'SC',
    gradient: 'from-emerald-500 to-emerald-700',
    rating: 5,
    metric: '$127k profit',
  },
  {
    content:
      'Finally, a direct mail platform that understands real estate investors. The templates are proven winners and the drip campaigns keep my pipeline full.',
    author: 'David Rodriguez',
    role: 'Wholesaler, Atlanta GA',
    initials: 'DR',
    gradient: 'from-amber-500 to-amber-700',
    rating: 5,
    metric: '4.8% response rate',
  },
]

const stats = [
  { value: '5.2x', label: 'Avg ROAS' },
  { value: '2.4M', label: 'Mailers Sent' },
  { value: '1.2%', label: 'Avg Response Rate' },
  { value: '$12M+', label: 'Deals Closed' },
]

export function Testimonials() {
  return (
    <section className="section-padding bg-slate-900" id="testimonials">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-accent">Trusted by investors</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Real Results from Real Investors
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            See how wholesalers and flippers are using REmail to find more deals.
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="relative rounded-2xl bg-slate-800 p-8"
            >
              {/* Rating */}
              <div className="flex gap-0.5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="mt-4">
                <p className="text-base text-slate-300">&quot;{testimonial.content}&quot;</p>
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.gradient} text-sm font-bold text-white`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>

              {/* Metric badge */}
              <div className="absolute top-8 right-8">
                <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {testimonial.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
