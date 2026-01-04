import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { rateLimit } from '@/lib/rate-limit'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  investorType: z.enum(['wholesaler', 'flipper', 'buy-and-hold', 'agent', 'other']).optional(),
  monthlyVolume: z.enum(['under-10000', '10000-25000', '25000-50000', 'over-50000']).optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  source: z.string().optional(),
  // Attribution fields
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  utmContent: z.string().optional(),
  utmTerm: z.string().optional(),
  gclid: z.string().optional(),
  referrer: z.string().optional(),
  landingPage: z.string().optional(),
})

// n8n webhook endpoints
const N8N_WEBHOOK_URLS = {
  test: 'https://n8n-ijvn.onrender.com/webhook-test/18191fbf-498a-4719-b52f-b186ea5b99a5',
  production: 'https://n8n-ijvn.onrender.com/webhook/18191fbf-498a-4719-b52f-b186ea5b99a5',
}

function getWebhookUrl(): string {
  const isDevelopment = process.env.NODE_ENV === 'development'
  return isDevelopment ? N8N_WEBHOOK_URLS.test : N8N_WEBHOOK_URLS.production
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
               request.headers.get('x-real-ip') ||
               'unknown'
    const userAgent = request.headers.get('user-agent') || undefined

    // Rate limit: 5 submissions per minute per IP
    const rateLimitResult = rateLimit(`contact:${ip}`, { limit: 5, windowMs: 60000 })
    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many requests. Please try again later.',
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil(rateLimitResult.resetIn / 1000)),
          },
        }
      )
    }

    const body = await request.json()

    // Validate the request body
    const validatedData = contactSchema.parse(body)

    // Prepare webhook payload with all data including metadata
    const webhookPayload = {
      ...validatedData,
      ip: ip !== 'unknown' ? ip : null,
      userAgent: userAgent || null,
    }

    // Forward to n8n webhook
    const webhookUrl = getWebhookUrl()
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookPayload),
    })

    if (!webhookResponse.ok) {
      const errorText = await webhookResponse.text().catch(() => 'Unknown error')
      console.error('n8n webhook error:', webhookResponse.status, errorText)
      throw new Error(`Webhook request failed: ${webhookResponse.status}`)
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully! We\'ll be in touch within 24 hours.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please check your form and try again.',
          errors: error.errors.map(e => ({ field: e.path.join('.'), message: e.message })),
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again or email us directly at hello@remail.com',
      },
      { status: 500 }
    )
  }
}
