'use client'

import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useAttribution } from '@/hooks/useAttribution'
import { analytics } from '@/components/analytics/GoogleTagManager'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  company: z.string().optional(),
  investorType: z.enum(['wholesaler', 'flipper', 'buy-and-hold', 'agent', 'other']).optional(),
  monthlyVolume: z.enum(['under-10000', '10000-25000', '25000-50000', 'over-50000']).optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

interface ContactFormProps {
  variant?: 'full' | 'compact'
  source?: string
}

export function ContactForm({ variant = 'full', source = 'contact-page' }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const formStartTracked = useRef(false)
  const attribution = useAttribution()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const handleFormInteraction = () => {
    if (!formStartTracked.current) {
      formStartTracked.current = true
      analytics.formStart(source)
    }
  }

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          source,
          // Include attribution data
          utmSource: attribution.utmSource,
          utmMedium: attribution.utmMedium,
          utmCampaign: attribution.utmCampaign,
          utmContent: attribution.utmContent,
          utmTerm: attribution.utmTerm,
          gclid: attribution.gclid,
          referrer: attribution.referrer,
          landingPage: attribution.landingPage,
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Something went wrong')
      }

      // Track successful form submission
      analytics.formSubmit(source)
      analytics.generateLead({ source })

      setStatus('success')
      reset()
      formStartTracked.current = false // Reset for potential new submission
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl bg-accent/10 p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-accent" />
        <h3 className="mt-4 text-lg font-semibold text-foreground">Message Sent!</h3>
        <p className="mt-2 text-muted-foreground">
          Thanks for reaching out. We will get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus('idle')}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} onFocus={handleFormInteraction} className="space-y-6">
      {status === 'error' && (
        <div className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive flex items-center gap-2">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name">
            Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            placeholder="John Smith"
            {...register('name')}
            className={errors.name ? 'border-destructive' : ''}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register('email')}
            className={errors.email ? 'border-destructive' : ''}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(980) 277-7437"
            {...register('phone')}
          />
        </div>

        {/* Company */}
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            placeholder="Your company name"
            {...register('company')}
          />
        </div>

        {variant === 'full' && (
          <>
            {/* Investor Type */}
            <div className="space-y-2">
              <Label htmlFor="investorType">I am a...</Label>
              <select
                id="investorType"
                {...register('investorType')}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Select one...</option>
                <option value="wholesaler">Wholesaler</option>
                <option value="flipper">Fix & Flipper</option>
                <option value="buy-and-hold">Buy & Hold Investor</option>
                <option value="agent">Real Estate Agent</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Monthly Volume */}
            <div className="space-y-2">
              <Label htmlFor="monthlyVolume">Expected monthly mail volume</Label>
              <select
                id="monthlyVolume"
                {...register('monthlyVolume')}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Select one...</option>
                <option value="under-10000">Under 10,000</option>
                <option value="10000-25000">10,000-25,000</option>
                <option value="25000-50000">25,000-50,000</option>
                <option value="over-50000">50,000+</option>
              </select>
            </div>
          </>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Tell us about your direct mail goals..."
          {...register('message')}
          className={errors.message ? 'border-destructive' : ''}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <Button type="submit" size="lg" className="w-full" disabled={status === 'loading'}>
        {status === 'loading' ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        By submitting this form, you agree to our{' '}
        <a href="/privacy" className="underline hover:text-foreground">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  )
}
