import Link from 'next/link'
import { ArrowRight, Mail, Phone, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Stop Guessing. Start Closing.
          </h2>
          <p className="mt-6 text-lg leading-8 text-blue-100">
            Take control. Get leads. Win deals. Let&apos;s build a direct mail campaign
            that delivers motivated seller leads and real growth.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="w-full gap-2 bg-white text-primary hover:bg-blue-50 sm:w-auto"
            >
              <Link href="/contact">
                <FileText className="h-4 w-4" />
                Get Free 7-Figure Blueprint
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full gap-2 border-white/30 bg-transparent text-white hover:bg-white/10 sm:w-auto"
            >
              <Link href="/contact">
                Schedule Strategy Session
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href="mailto:hello@remail.com"
              className="flex items-center gap-2 text-sm text-blue-100 hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4" />
              hello@remail.com
            </a>
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 text-sm text-blue-100 hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4" />
              (555) 123-4567
            </a>
          </div>

          <p className="mt-6 text-sm text-blue-200">
            Experience the difference of data-driven, transparent direct mail.
          </p>
        </div>
      </div>
    </section>
  )
}
