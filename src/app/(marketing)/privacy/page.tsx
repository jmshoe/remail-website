import { Metadata } from 'next'
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Privacy Policy | REmail',
  description:
    'REmail Privacy Policy - Learn how we collect, use, and protect your personal information when you use our website and services.',
  openGraph: {
    title: 'Privacy Policy | REmail',
    description: 'REmail Privacy Policy - Learn how we collect, use, and protect your personal information.',
    url: 'https://remaildirect.com/privacy',
  },
  alternates: {
    canonical: 'https://remaildirect.com/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://remaildirect.com' },
          { name: 'Privacy Policy', url: 'https://remaildirect.com/privacy' },
        ])}
      />

      <div className="bg-white">
        {/* Hero */}
        <section className="bg-slate-50 py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Effective Date: January 4, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="prose prose-slate max-w-none">
              <p className="lead">
                This Privacy Policy explains how <strong>A1A Enterprises LLC</strong> (doing business as{' '}
                <strong>REmail</strong>) (&quot;<strong>REmail</strong>,&quot; &quot;<strong>we</strong>,&quot;{' '}
                &quot;<strong>us</strong>,&quot; or &quot;<strong>our</strong>&quot;) collects, uses, and shares
                information when you visit or interact with <code>remaildirect.com</code> (the &quot;<strong>Site</strong>&quot;).
              </p>

              <div className="not-prose my-8 rounded-lg border border-slate-200 bg-slate-50 p-6">
                <h3 className="mt-0 text-lg font-semibold">Company Details</h3>
                <p className="mb-2">
                  <strong>A1A Enterprises LLC</strong> (d/b/a REmail)
                  <br />
                  4030 Wake Forest Road, Ste 349, Raleigh, NC 27609
                  <br />
                  <strong>Privacy Contact:</strong>{' '}
                  <a href="mailto:privacy@remaildirect.com" className="text-primary hover:underline">
                    privacy@remaildirect.com
                  </a>
                </p>
              </div>

              <h2>1. What This Policy Covers</h2>
              <p>
                This policy applies to information collected through the Site, including when you:
              </p>
              <ul>
                <li>Visit pages on the Site</li>
                <li>Submit forms (e.g., contact or &quot;blueprint&quot;/lead capture)</li>
                <li>Schedule a demo or meeting</li>
                <li>Use our chat/voice widget</li>
              </ul>
              <p>
                This policy does <strong>not</strong> cover third-party websites or services that you may access via
                links on our Site.
              </p>

              <h2>2. Information We Collect</h2>

              <h3>A. Information You Provide to Us</h3>
              <p>When you submit a form or otherwise contact us, we may collect:</p>
              <ul>
                <li>
                  <strong>Contact details:</strong> name, email, phone number, company
                </li>
                <li>
                  <strong>Business details:</strong> investor type, estimated volume/spend, CRM selection (as applicable)
                </li>
                <li>
                  <strong>Message content:</strong> what you write in the form
                </li>
                <li>
                  <strong>Scheduling details:</strong> details you submit when booking a demo/meeting (as applicable)
                </li>
                <li>
                  <strong>Chat/voice details:</strong> information you submit via chat; if you choose to start a voice
                  conversation, audio and related information may be processed (see &quot;Third Parties&quot; below)
                </li>
              </ul>

              <h3>B. Information Collected Automatically</h3>
              <p>When you use the Site, we may collect:</p>
              <ul>
                <li>
                  <strong>Device and usage data:</strong> pages viewed, approximate location (from IP), browser/device
                  details, referral source
                </li>
                <li>
                  <strong>Identifiers and diagnostics:</strong> IP address and user agent (including for fraud
                  prevention/rate limiting)
                </li>
                <li>
                  <strong>Campaign attribution:</strong> URL parameters like <strong>UTM</strong> fields and{' '}
                  <strong>gclid</strong>, plus referrer and landing page
                </li>
                <li>
                  <strong>Cookies / local storage:</strong> we store certain attribution data in browser storage for up
                  to <strong>~30 days</strong> to help attribute form submissions and improve marketing measurement
                </li>
              </ul>

              <h2>3. How We Use Information</h2>
              <p>We use information to:</p>
              <ul>
                <li>Provide the Site and respond to inquiries</li>
                <li>Schedule and manage demos/meetings</li>
                <li>Communicate with you (including follow-ups you request)</li>
                <li>Measure Site performance and improve marketing effectiveness</li>
                <li>Prevent abuse, spam, and fraud (including rate limiting)</li>
                <li>Maintain security and debug issues</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>4. How We Share Information</h2>
              <p>We may share information:</p>
              <ul>
                <li>
                  <strong>With service providers</strong> that help operate the Site and our business (e.g.,
                  automation/workflow tools, analytics, scheduling, email delivery, hosting, customer support tooling)
                </li>
                <li>
                  <strong>For legal reasons</strong> if required by law, to protect rights/safety, or to respond to
                  lawful requests
                </li>
                <li>
                  <strong>In business transfers</strong> (e.g., merger, acquisition, or sale of assets), subject to
                  standard protections
                </li>
              </ul>
              <p>
                <strong>We do not sell your personal information</strong> in the ordinary sense of &quot;sell for money.&quot; If
                laws in your jurisdiction define &quot;sale&quot; or &quot;sharing&quot; differently (e.g., for certain
                advertising-related disclosures), you can contact us at{' '}
                <a href="mailto:privacy@remaildirect.com" className="text-primary hover:underline">
                  privacy@remaildirect.com
                </a>
                .
              </p>

              <h2>5. Cookies and Similar Technologies</h2>
              <p>We (and our providers) may use cookies, pixels, and similar technologies to:</p>
              <ul>
                <li>Analyze Site usage and performance</li>
                <li>Attribute traffic and conversions</li>
                <li>Enable embeds (e.g., scheduling) and widgets (e.g., chat/voice)</li>
              </ul>

              <h3>Your Choices</h3>
              <ul>
                <li>
                  You can typically control cookies through your browser settings and via any cookie controls provided on
                  the Site (if enabled).
                </li>
                <li>Some features may not work properly if cookies are blocked.</li>
                <li>
                  <strong>Do Not Track:</strong> Some browsers offer &quot;Do Not Track&quot; (DNT) signals. There is no
                  consistent industry standard for DNT; at this time, we do not respond to DNT signals in a uniform way.
                </li>
              </ul>

              <h2>6. Third-Party Services We Use (With Their Privacy Policies)</h2>
              <p>
                The Site may use third-party services that collect/process data under their own policies. Examples
                include:
              </p>
              <ul>
                <li>
                  <strong>Google Tag Manager (analytics/events):</strong>{' '}
                  <a
                    href="https://policies.google.com/privacy?hl=en-US"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://policies.google.com/privacy?hl=en-US
                  </a>
                </li>
                <li>
                  <strong>Cal.com (demo scheduling embed):</strong>{' '}
                  <a
                    href="https://cal.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://cal.com/privacy
                  </a>
                </li>
                <li>
                  <strong>Vapi (chat/voice widget):</strong>{' '}
                  <a
                    href="https://vapi.ai/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://vapi.ai/privacy
                  </a>
                </li>
                <li>
                  <strong>Render (hosting for certain workflow endpoints):</strong>{' '}
                  <a
                    href="https://render.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://render.com/privacy
                  </a>
                </li>
                <li>
                  <strong>Resend (email delivery, if used for communications):</strong>{' '}
                  <a
                    href="https://resend.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://resend.com/legal/privacy-policy
                  </a>
                </li>
              </ul>
              <p>
                Note: When you interact with these tools (especially scheduling and chat/voice), the provider may
                collect certain device/usage data and set their own cookies.
              </p>

              <h2>7. Data Retention</h2>
              <p>We keep information for as long as reasonably necessary for:</p>
              <ul>
                <li>The purposes described above (e.g., responding to you, maintaining business records)</li>
                <li>Security and fraud prevention</li>
                <li>Legal, tax, or compliance needs</li>
              </ul>
              <p>
                Attribution data stored in browser storage is designed to expire after about <strong>30 days</strong>.
              </p>

              <h2>8. Security</h2>
              <p>
                We use reasonable administrative, technical, and organizational safeguards designed to protect
                information. No internet transmission or storage system is guaranteed to be 100% secure.
              </p>

              <h2>9. Children&apos;s Privacy</h2>
              <p>
                The Site is not directed to children under 13, and we do not knowingly collect personal information from
                children under 13.
              </p>

              <h2>10. Your Privacy Choices and Requests</h2>
              <p>
                You may request to access, correct, or delete certain information we hold about you, subject to
                applicable law and legitimate business needs.
              </p>
              <p>
                To make a request, email{' '}
                <a href="mailto:privacy@remaildirect.com" className="text-primary hover:underline">
                  <strong>privacy@remaildirect.com</strong>
                </a>
                . For security, we may need to verify your identity before fulfilling certain requests.
              </p>

              <h2>11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will post the updated version on this page and
                update the &quot;Effective Date&quot; above.
              </p>

              <div className="not-prose my-12 border-t border-slate-200 pt-8">
                <p className="text-sm text-muted-foreground">
                  Last updated: January 4, 2026
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
