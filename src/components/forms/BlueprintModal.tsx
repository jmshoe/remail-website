'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, AlertCircle, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { useAttribution } from '@/hooks/useAttribution'
import { analytics } from '@/components/analytics/GoogleTagManager'

const blueprintSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().optional(),
  email: z.string().email('Please enter a valid email'),
  marketingSpend: z.enum(['under-1000', '1000-5000', '5000-10000', '10000-25000', 'over-25000']).optional(),
  mailVolume: z.enum(['under-5000', '5000-10000', '10000-25000', '25000-50000', 'over-50000']).optional(),
  crm: z.enum(['podio', 'follow-up-boss', 'salesforce', 'hubspot', 'rei-blackbook', 'propstream', 'other', 'none']).optional(),
})

type BlueprintFormData = z.infer<typeof blueprintSchema>

interface BlueprintModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BlueprintModal({ open, onOpenChange }: BlueprintModalProps) {
  const router = useRouter()
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const formStartTracked = useRef(false)
  const attribution = useAttribution()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BlueprintFormData>({
    resolver: zodResolver(blueprintSchema),
  })

  const handleFormInteraction = () => {
    if (!formStartTracked.current) {
      formStartTracked.current = true
      analytics.formStart('blueprint-modal')
    }
  }

  const onSubmit = async (data: BlueprintFormData) => {
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/blueprint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          source: 'blueprint-modal',
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
      analytics.formSubmit('blueprint-modal')
      analytics.generateLead({ source: 'blueprint-modal' })

      // Close modal and redirect to blueprint page
      onOpenChange(false)
      router.push('/blueprint')
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit')
    }
  }

  const handleClose = () => {
    onOpenChange(false)
    // Reset state after animation completes
    setTimeout(() => {
      setStatus('idle')
      setErrorMessage('')
      reset()
      formStartTracked.current = false
    }, 200)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        {/* Header with gradient accent */}
        <div className="relative bg-gradient-to-br from-primary to-primary/80 px-6 py-8 text-white">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                <FileText className="h-5 w-5" />
              </div>
            </div>
            <DialogHeader className="text-left">
              <DialogTitle className="text-2xl font-bold text-white">
                Get the 7-Figure Direct Mail Blueprint
              </DialogTitle>
              <DialogDescription className="text-white/80 mt-2">
                The exact strategies behind 20M+ mailers and millions in closed deals.
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} onFocus={handleFormInteraction} className="p-6 space-y-5">
          {status === 'error' && (
            <div className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive flex items-center gap-2">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              {errorMessage}
            </div>
          )}

          {/* Name fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">
                First Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="firstName"
                placeholder="John"
                {...register('firstName')}
                className={errors.firstName ? 'border-destructive' : ''}
              />
              {errors.firstName && (
                <p className="text-xs text-destructive">{errors.firstName.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Smith"
                {...register('lastName')}
              />
            </div>
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
              <p className="text-xs text-destructive">{errors.email.message}</p>
            )}
          </div>

          {/* Marketing Spend */}
          <div className="space-y-2">
            <Label htmlFor="marketingSpend">Marketing Spend</Label>
            <select
              id="marketingSpend"
              {...register('marketingSpend')}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="">How much do you spend on marketing per month?</option>
              <option value="under-1000">Under $1,000</option>
              <option value="1000-5000">$1,000 - $5,000</option>
              <option value="5000-10000">$5,000 - $10,000</option>
              <option value="10000-25000">$10,000 - $25,000</option>
              <option value="over-25000">$25,000+</option>
            </select>
          </div>

          {/* Mail Volume */}
          <div className="space-y-2">
            <Label htmlFor="mailVolume">Mail Volume</Label>
            <select
              id="mailVolume"
              {...register('mailVolume')}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="">How much mail do you send per month?</option>
              <option value="under-5000">Under 5,000</option>
              <option value="5000-10000">5,000 - 10,000</option>
              <option value="10000-25000">10,000 - 25,000</option>
              <option value="25000-50000">25,000 - 50,000</option>
              <option value="over-50000">50,000+</option>
            </select>
          </div>

          {/* CRM */}
          <div className="space-y-2">
            <Label htmlFor="crm">CRM</Label>
            <select
              id="crm"
              {...register('crm')}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="">Which CRM do you use?</option>
              <option value="podio">Podio</option>
              <option value="follow-up-boss">Follow Up Boss</option>
              <option value="salesforce">Salesforce</option>
              <option value="hubspot">HubSpot</option>
              <option value="rei-blackbook">REI BlackBook</option>
              <option value="propstream">PropStream</option>
              <option value="other">Other</option>
              <option value="none">None / Not sure</option>
            </select>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            size="lg"
            className="w-full shadow-lg shadow-primary/25"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              'Get the Blueprint'
            )}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            By submitting, you agree to our{' '}
            <a href="/privacy" className="underline hover:text-foreground">
              Privacy Policy
            </a>
            . We&apos;ll never spam you.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
