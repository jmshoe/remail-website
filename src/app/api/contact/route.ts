import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { rateLimit } from '@/lib/rate-limit'
import { sendContactNotification, sendContactConfirmation } from '@/lib/email'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  investorType: z.enum(['wholesaler', 'flipper', 'buy-and-hold', 'agent', 'other']).optional(),
  monthlyVolume: z.enum(['under-500', '500-2000', '2000-5000', 'over-5000']).optional(),
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

    // Save to database
    let submission
    try {
      submission = await prisma.contactSubmission.create({
        data: {
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone || null,
          company: validatedData.company || null,
          investorType: validatedData.investorType || null,
          monthlyVolume: validatedData.monthlyVolume || null,
          message: validatedData.message,
          source: validatedData.source || null,
          utmSource: validatedData.utmSource || null,
          utmMedium: validatedData.utmMedium || null,
          utmCampaign: validatedData.utmCampaign || null,
          utmContent: validatedData.utmContent || null,
          utmTerm: validatedData.utmTerm || null,
          gclid: validatedData.gclid || null,
          referrer: validatedData.referrer || null,
          landingPage: validatedData.landingPage || null,
          ip: ip !== 'unknown' ? ip : null,
          userAgent: userAgent || null,
        },
      })
    } catch (dbError) {
      // Log but don't fail the request if DB is unavailable
      console.error('Failed to save contact submission to database:', dbError)
      // Continue without database - we'll still send emails
    }

    // Send notification email (don't block response on this)
    sendContactNotification({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      company: validatedData.company,
      investorType: validatedData.investorType,
      monthlyVolume: validatedData.monthlyVolume,
      message: validatedData.message,
      source: validatedData.source,
      utmSource: validatedData.utmSource,
      utmMedium: validatedData.utmMedium,
      utmCampaign: validatedData.utmCampaign,
    }).catch(err => console.error('Failed to send notification:', err))

    // Send confirmation email to user (don't block response)
    sendContactConfirmation({
      name: validatedData.name,
      email: validatedData.email,
    }).catch(err => console.error('Failed to send confirmation:', err))

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully! We\'ll be in touch within 24 hours.',
        id: submission?.id,
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
