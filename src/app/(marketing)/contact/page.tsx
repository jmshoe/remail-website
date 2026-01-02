import { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { ContactForm } from '@/components/forms/ContactForm'
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Contact Us | REmail Direct Mail Automation',
  description:
    'Get in touch with the REmail team. Questions about direct mail automation for real estate? We are here to help wholesalers and investors get started.',
  openGraph: {
    title: 'Contact Us | REmail Direct Mail Automation',
    description:
      'Get in touch with the REmail team. Questions about direct mail automation for real estate?',
    url: 'https://remail.com/contact',
  },
  alternates: {
    canonical: 'https://remail.com/contact',
  },
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@remail.com',
    href: 'mailto:hello@remail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Austin, TX',
    href: null,
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Fri 9am-6pm CT',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://remail.com' },
          { name: 'Contact', url: 'https://remail.com/contact' },
        ])}
      />

      {/* Hero */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Have questions about direct mail automation? Ready to start your first campaign?
              We would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form and info */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Send us a message</h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and we will get back to you within 24 hours.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
              <p className="mt-2 text-muted-foreground">
                Prefer to reach out directly? Here is how you can contact us.
              </p>

              <div className="mt-8 space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional CTA */}
              <div className="mt-12 rounded-2xl bg-slate-900 p-8">
                <h3 className="text-lg font-semibold text-white">
                  Ready to get started?
                </h3>
                <p className="mt-2 text-slate-400">
                  Book a free demo call with our team to see REmail in action.
                </p>
                <a
                  href="https://calendly.com/remail/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
                >
                  Schedule a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
