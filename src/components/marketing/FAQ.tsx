'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { faqData } from '@/data/faq'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section-padding bg-white" id="faq">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Section header */}
          <div className="text-center">
            <p className="text-sm font-semibold text-primary">FAQ</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know about direct mail automation for real estate investing.
            </p>
          </div>

          {/* FAQ list */}
          <div className="mt-12 divide-y divide-slate-200">
            {faqData.map((faq, index) => (
              <div key={faq.question} className="py-6">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-start justify-between text-left"
                >
                  <span className="text-base font-semibold text-foreground">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 text-muted-foreground transition-transform duration-200',
                        openIndex === index && 'rotate-180'
                      )}
                    />
                  </span>
                </button>
                <div
                  className={cn(
                    'mt-4 overflow-hidden transition-all duration-200',
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  )}
                >
                  <p className="text-base text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Still have questions?{' '}
              <a href="/contact" className="font-semibold text-primary hover:underline">
                Contact our team
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
