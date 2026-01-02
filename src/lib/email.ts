import { Resend } from 'resend'

// Initialize Resend client lazily to avoid build-time errors
let resend: Resend | null = null

function getResendClient(): Resend | null {
  if (!resend && process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY)
  }
  return resend
}

interface ContactNotificationData {
  name: string
  email: string
  phone?: string
  company?: string
  investorType?: string
  monthlyVolume?: string
  message: string
  source?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
}

export async function sendContactNotification(data: ContactNotificationData) {
  const { name, email, phone, company, investorType, monthlyVolume, message, source, utmSource, utmMedium, utmCampaign } = data

  const investorTypeLabels: Record<string, string> = {
    'wholesaler': 'Wholesaler',
    'flipper': 'Fix & Flipper',
    'buy-and-hold': 'Buy & Hold Investor',
    'agent': 'Real Estate Agent',
    'other': 'Other',
  }

  const volumeLabels: Record<string, string> = {
    'under-500': 'Under 500/month',
    '500-2000': '500-2,000/month',
    '2000-5000': '2,000-5,000/month',
    'over-5000': '5,000+/month',
  }

  const htmlContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>From:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
    ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
    ${investorType ? `<p><strong>Investor Type:</strong> ${investorTypeLabels[investorType] || investorType}</p>` : ''}
    ${monthlyVolume ? `<p><strong>Monthly Volume:</strong> ${volumeLabels[monthlyVolume] || monthlyVolume}</p>` : ''}
    <hr />
    <h3>Message:</h3>
    <p>${message.replace(/\n/g, '<br>')}</p>
    <hr />
    <p style="color: #666; font-size: 12px;">
      Source: ${source || 'Direct'}<br/>
      ${utmSource ? `UTM Source: ${utmSource}<br/>` : ''}
      ${utmMedium ? `UTM Medium: ${utmMedium}<br/>` : ''}
      ${utmCampaign ? `UTM Campaign: ${utmCampaign}` : ''}
    </p>
  `

  try {
    const client = getResendClient()
    if (!client) {
      console.warn('Resend API key not configured, skipping notification email')
      return { success: false, error: 'Email service not configured' }
    }

    await client.emails.send({
      from: 'REmail Notifications <notifications@remail.com>',
      to: process.env.CONTACT_NOTIFICATION_EMAIL || 'sales@remail.com',
      reply_to: email,
      subject: `New Lead: ${name}${company ? ` from ${company}` : ''}`,
      html: htmlContent,
    })
    return { success: true }
  } catch (error) {
    console.error('Failed to send notification email:', error)
    return { success: false, error }
  }
}

export async function sendContactConfirmation(data: { name: string; email: string }) {
  try {
    const client = getResendClient()
    if (!client) {
      console.warn('Resend API key not configured, skipping confirmation email')
      return { success: false, error: 'Email service not configured' }
    }

    await client.emails.send({
      from: 'REmail <hello@remail.com>',
      to: data.email,
      subject: "Thanks for reaching out! We'll be in touch soon.",
      html: `
        <p>Hi ${data.name},</p>
        <p>Thanks for contacting REmail! We've received your message and our team will get back to you within 24 hours.</p>
        <p>In the meantime, here are some resources you might find helpful:</p>
        <ul>
          <li><a href="https://remail.com/blog">Direct Mail Marketing Tips</a></li>
          <li><a href="https://remail.com/pricing">Our Pricing Plans</a></li>
        </ul>
        <p>Best regards,<br>The REmail Team</p>
      `,
    })
    return { success: true }
  } catch (error) {
    console.error('Failed to send confirmation email:', error)
    return { success: false, error }
  }
}
