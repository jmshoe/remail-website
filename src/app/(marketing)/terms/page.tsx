import { Metadata } from 'next'
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Terms of Service | REmail',
  description:
    'REmail Terms of Service - Read our terms and conditions for using our website and services.',
  openGraph: {
    title: 'Terms of Service | REmail',
    description: 'REmail Terms of Service - Read our terms and conditions for using our website and services.',
    url: 'https://www.remaildirect.com/terms',
  },
  alternates: {
    canonical: 'https://www.remaildirect.com/terms',
  },
}

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://www.remaildirect.com' },
          { name: 'Terms of Service', url: 'https://www.remaildirect.com/terms' },
        ])}
      />

      <div className="bg-white">
        {/* Hero */}
        <section className="bg-slate-50 py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Effective Date: January 9, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="prose prose-slate max-w-none">
              <p className="lead">
                These Terms of Service (&quot;<strong>Terms</strong>&quot;) govern your access to and use of{' '}
                <code>remaildirect.com</code> (the &quot;<strong>Site</strong>&quot;), operated by{' '}
                <strong>A1A Enterprises LLC</strong> (d/b/a <strong>REmail</strong>) (&quot;<strong>REmail</strong>,&quot;{' '}
                &quot;<strong>we</strong>,&quot; &quot;<strong>us</strong>,&quot; or &quot;<strong>our</strong>&quot;).
              </p>

              <div className="not-prose my-8 rounded-lg border border-slate-200 bg-slate-50 p-6">
                <h3 className="mt-0 text-lg font-semibold">Company Details</h3>
                <p className="mb-2">
                  <strong>A1A Enterprises LLC</strong> (d/b/a REmail)
                  <br />
                  4030 Wake Forest Road, Ste 349, Raleigh, NC 27609
                  <br />
                  <strong>Contact:</strong>{' '}
                  <a href="mailto:support@remaildirect.com" className="text-primary hover:underline">
                    support@remaildirect.com
                  </a>{' '}
                  (general) /{' '}
                  <a href="mailto:privacy@remaildirect.com" className="text-primary hover:underline">
                    privacy@remaildirect.com
                  </a>{' '}
                  (privacy)
                </p>
              </div>

              <p>
                By using the Site, you agree to these Terms. If you do not agree, do not use the Site.
              </p>

              <h2>1. Who the Site Is For</h2>
              <p>
                The Site provides information about REmail and allows you to contact us, request materials, schedule
                meetings, and interact with support tools (including chat/voice). Any future product, dashboard, or paid
                service may be governed by additional terms.
              </p>

              <h2>2. Changes to the Site or Terms</h2>
              <p>
                We may change the Site and/or these Terms at any time. Updated Terms will be posted on the Site with a
                new effective date. Continued use after changes means you accept the updated Terms.
              </p>

              <h2>3. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the Site in a way that violates any law or regulation</li>
                <li>Attempt to interfere with the Site&apos;s operation or security</li>
                <li>Submit false, misleading, or unauthorized information</li>
                <li>
                  Use automated means to scrape, probe, or overload the Site (except as permitted by robots.txt and
                  applicable law)
                </li>
              </ul>
              <p>We may suspend or block access to protect the Site and users.</p>

              <h2>4. Intellectual Property</h2>
              <p>
                The Site and its content (text, graphics, logos, design, and software) are owned by or licensed to
                REmail and protected by intellectual property laws. You may view and use the Site for your personal or
                internal business purposes, but you may not copy, modify, distribute, or create derivative works without
                our permission, except as allowed by law.
              </p>

              <h2>5. Third-Party Services and Links</h2>
              <p>
                The Site may include third-party services (e.g., scheduling and chat/voice widgets) and links to
                third-party sites. We do not control third parties and are not responsible for their content or
                practices. Your use of third-party services is governed by their terms and policies.
              </p>

              <h2>6. Disclaimer of Warranties</h2>
              <p>
                THE SITE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE.&quot; TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE
                DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, AND NON-INFRINGEMENT. We do not guarantee the Site will be uninterrupted,
                error-free, or secure.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, REMAIL WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL,
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF
                OR RELATED TO YOUR USE OF (OR INABILITY TO USE) THE SITE.
              </p>
              <p>
                To the maximum extent permitted by law, our total liability for any claim relating to the Site will not
                exceed <strong>$100</strong>.
              </p>

              <h2>8. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless REmail and its affiliates, officers, employees, and agents from
                any claims, liabilities, damages, and expenses (including reasonable attorneys&apos; fees) arising out of your
                misuse of the Site or violation of these Terms.
              </p>

              <h2>9. Governing Law; Venue</h2>
              <p>
                These Terms are governed by the laws of the <strong>State of North Carolina</strong>, without regard to
                conflict-of-laws rules. You agree that any dispute will be brought in the state or federal courts
                located in North Carolina, and you consent to their jurisdiction and venue.
              </p>

              <h2>10. 90-Day Contract Guarantee</h2>
              <p>
                REmail offers a 90-Day Contract Guarantee for eligible customers. If you do not secure a contract
                within your first 90 days, you may request a refund of qualifying fees, subject to the following
                terms:
              </p>

              <h3>10.1 Definitions</h3>
              <p>
                For purposes of this guarantee, a &quot;<strong>Contract</strong>&quot; means a fully executed,
                legally binding purchase agreement or assignment contract for the acquisition of real property.
                Verbal agreements, letters of intent, pending offers, or contracts that fall through after
                execution do not qualify.
              </p>

              <h3>10.2 Eligibility Requirements</h3>
              <p>To qualify for this guarantee, you must meet <strong>all</strong> of the following conditions:</p>
              <ul>
                <li>
                  <strong>Minimum Volume:</strong> Send a minimum of 10,000 mail pieces per month (30,000 total)
                  through REmail during the 90-day guarantee period
                </li>
                <li>
                  <strong>Targeting Compliance:</strong> Use REmail&apos;s recommended targeting criteria and
                  approved mailing lists
                </li>
                <li>
                  <strong>Lead Response:</strong> Respond to all inbound leads generated from your campaigns
                  within 24 hours of receipt
                </li>
                <li>
                  <strong>Account in Good Standing:</strong> Maintain an active account with no outstanding
                  balances or payment disputes
                </li>
              </ul>

              <h3>10.3 Refund Scope</h3>
              <p>
                If eligible, you may receive a refund of <strong>service and management fees</strong> paid during
                the guarantee period. The following costs are <strong>not refundable</strong> as they are
                pass-through expenses paid to third-party vendors:
              </p>
              <ul>
                <li>Printing and production costs</li>
                <li>Postage and mailing costs</li>
                <li>Skip tracing fees</li>
                <li>List acquisition costs</li>
                <li>Any third-party data or service fees</li>
              </ul>

              <h3>10.4 Guarantee Period</h3>
              <p>
                The 90-day guarantee period begins on the <strong>drop date of your first mail piece</strong>
                and ends exactly 90 calendar days thereafter.
              </p>

              <h3>10.5 Claim Process</h3>
              <p>To request a refund under this guarantee:</p>
              <ul>
                <li>
                  Submit a written request to{' '}
                  <a href="mailto:support@remaildirect.com" className="text-primary hover:underline">
                    support@remaildirect.com
                  </a>{' '}
                  within <strong>14 days</strong> after your 90-day period ends
                </li>
                <li>Include your account details and campaign information</li>
                <li>Confirm in writing that no Contracts (as defined above) were secured during the period</li>
              </ul>
              <p>
                Requests submitted more than 14 days after the guarantee period ends will not be honored.
                REmail reserves the right to verify eligibility and may request documentation of lead
                response times and campaign compliance.
              </p>

              <h3>10.6 Limitations</h3>
              <ul>
                <li>This guarantee is available <strong>once per customer</strong></li>
                <li>
                  Customers who have previously received a refund under this or any similar guarantee are
                  not eligible
                </li>
                <li>Accounts terminated for cause or violation of these Terms are not eligible</li>
                <li>
                  REmail reserves the right to modify or discontinue this guarantee at any time; changes
                  will not affect customers already within an active guarantee period
                </li>
              </ul>

              <h2>11. Miscellaneous</h2>
              <p>
                If any part of these Terms is found unenforceable, the rest remains in effect. Our failure to enforce a
                provision is not a waiver. You may not assign these Terms without our consent; we may assign them as part
                of a business transfer.
              </p>

              <div className="not-prose my-12 border-t border-slate-200 pt-8">
                <p className="text-sm text-muted-foreground">
                  Last updated: January 9, 2026
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
