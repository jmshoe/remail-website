# Launch Plan (REmail Website)

This is the production-launch checklist for the **REmail** Next.js site (App Router) with a focus on **SEO**, **lead capture**, **tracking**, and a safe **domain cutover**.

---

## Hosting + environments (recommended: Vercel)

- **Provider**: Vercel (best fit for Next.js; automatic Preview Deployments).
- **Environments**
  - **Preview**: every PR auto-deploys (default Vercel behavior).
  - **Staging (recommended)**: `staging` branch + domain `staging.<yourdomain>` to validate tracking/forms/indexing settings without touching production.
  - **Production**: `main` branch.
- **Environment variables (set in Vercel → Project → Settings → Environment Variables)**
  - **URL / app**
    - `NEXT_PUBLIC_APP_URL` (must match the environment’s base URL)
    - `NEXTAUTH_URL` (if using NextAuth)
    - `NEXTAUTH_SECRET`
  - **Database**
    - `DATABASE_URL`
  - **Email**
    - `RESEND_API_KEY` (or Postmark equivalent)
  - **Payments / integrations (as needed)**
    - Stripe keys
    - Lob keys

**Notes (repo-specific)**
- The repo already has `www → non-www` redirect logic in `next.config.js`.
- The repo has test scripts available: `vitest` and `playwright`.

---

## CI/CD: required checks before merge (production safety) ✅ DONE

GitHub Actions workflow created at `.github/workflows/ci.yml`:

- **Lint**: `npm run lint` ✅
- **Typecheck**: `npm run type-check` ✅
- **Unit tests**: `npm run test` ✅
- **Build**: `npm run build` ✅
- **E2E smoke tests (Playwright)**: `npm run test:e2e` ✅

Recommended deployment flow:
- PR → **Preview Deploy** + CI checks → merge → **Production Deploy**
- Optional: enable **Protected Deployments** / approvals for production in Vercel.

---

## Production readiness checklist (must-have)

- **Monitoring**
  - Add Sentry (or equivalent) for: (optional enhancement)
    - client errors
    - API route errors (e.g., `/api/contact`)
- **Security**
  - ~~Add spam protection + rate limiting to `/api/contact`~~ ✅ Rate limiting implemented
  - Ensure secrets are server-side only (no leaking into `NEXT_PUBLIC_*`) ✅
- **Performance**
  - Run Lighthouse for core pages: Home, Services, Pricing, Contact. (manual)
  - Confirm images are optimized and not oversized. ✅ (using Next.js Image component)

---

## Technical SEO launch checklist

### 1) Sitemap + robots ✅ DONE
Implemented:
- `src/app/sitemap.ts` → publishes `/<base>/sitemap.xml`
- `src/app/robots.ts` → publishes `/<base>/robots.txt`

### 2) Canonicals + metadata base
The root metadata already uses:
- `metadataBase: NEXT_PUBLIC_APP_URL || https://remail.com`

Ensure on Vercel:
- `NEXT_PUBLIC_APP_URL` is correct in **Preview/Staging/Prod**, otherwise canonicals/OG URLs can be wrong.

### 3) Redirects
- Keep: **www → apex** (already present).
- If replacing an older site:
  - create a redirect mapping (old URL → new URL) and implement as 301s.

### 4) Schema
Already present sitewide:
- Organization + WebSite JSON-LD via `src/app/(marketing)/layout.tsx`

Add page-specific schema where it helps:
- `Service` schema for services pages
- `FAQPage` schema where FAQs exist
- `Article` schema for blog posts

### 5) Search Console (GSC)
- Create **Domain property** in GSC
- Verify ownership via **DNS TXT**
- Submit sitemap: `https://<domain>/sitemap.xml`

---

## Analytics + tracking (GA4 + GTM + conversions) ✅ IMPLEMENTED

### Recommended approach
Use **Google Tag Manager** (GTM) as the single integration point.

### Setup steps ✅ DONE
1. Create GA4 property. (manual - do this in Google Analytics)
2. Create GTM container. (manual - do this in Google Tag Manager)
3. ~~Add GTM snippet to layout~~ ✅ - `src/components/analytics/GoogleTagManager.tsx` added to marketing layout
4. In GTM, add:
   - GA4 Configuration tag (manual)
   - Conversion/event tags as needed (manual)

### Minimum events (traffic → leads) ✅ IMPLEMENTED
Events implemented in `src/components/analytics/GoogleTagManager.tsx`:
- **Lead**: `generate_lead` on successful contact submit ✅
- **CTA clicks**:
  - `click_phone` ✅
  - `click_email` ✅
  - `click_book_demo` (ready when scheduling added)
- **Content intent**:
  - `view_pricing` ✅
  - `view_service` ✅
- **Form tracking**:
  - `form_start` ✅
  - `form_submit` ✅

### Attribution ✅ IMPLEMENTED
Implemented in `src/hooks/useAttribution.ts`:
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term` ✅
- `gclid` (Google Ads click ID) ✅
- `referrer` ✅
- landing page path ✅
- Persisted in localStorage with 7-day expiry ✅
- Included in form POST payload ✅
- Stored in `ContactSubmission` database model ✅

### Privacy / consent
If you expect EU/UK traffic or want to be conservative:
- implement cookie consent and use Google Consent Mode in GTM. (optional enhancement)

---

## Lead capture: make contact submissions "production real" ✅ IMPLEMENTED

Current state:
- UI submits to `POST /api/contact` ✅
- API validates, persists to database, and sends notification email ✅

### Implementation status:
- **Persistence** ✅ DONE
  - `ContactSubmission` Prisma model (`prisma/schema.prisma`)
  - Stores: name, email, phone, company, message, investorType, monthlyVolume, source
  - Stores: timestamp, IP address
  - Stores: attribution fields (UTMs, gclid, referrer, landing page)
- **Anti-spam** ⚠️ PARTIAL
  - ~~Add Turnstile or reCAPTCHA~~ (optional enhancement)
  - Rate limiting by IP ✅ (`src/lib/rate-limit.ts` - 5 requests/minute)
- **Notifications** ✅ DONE
  - Internal notification email via Resend (`src/lib/email.ts`)
  - ~~Optional: auto-reply confirmation~~ (can be added later)
- **CRM handoff** (future enhancement)
  - Push to HubSpot/Pipedrive (or queue for later processing)
- **Reliability**
  - Email failures are logged but don't block form submission ✅

---

## Domain cutover: point domain to Vercel safely

### Pre-cutover checklist
- Identify where DNS is managed (registrar vs Cloudflare, etc.).
- Lower TTL for relevant records (e.g., 300 seconds) ~24 hours before cutover if possible.
- Verify existing email records (keep these unchanged):
  - MX
  - SPF (TXT)
  - DKIM (TXT/CNAME)
  - DMARC (TXT)

### Vercel domain connection
1. Add domain in Vercel (Project → Domains).
2. Set DNS records exactly as Vercel instructs.

Typical setup:
- Apex `@`:
  - **A record** → Vercel-provided IP (commonly `76.76.21.21`, but follow Vercel’s UI)
- `www`:
  - **CNAME** → Vercel target (commonly `cname.vercel-dns.com`, but follow Vercel’s UI)

### Verify after propagation
- HTTPS certificate issued and valid
- `www.<domain>` redirects to `<domain>`
- key pages load
- contact form works end-to-end
- GA4 real-time shows active user and events
- GSC sees valid sitemap

### Rollback plan
- Keep a copy of prior DNS records.
- Revert A/CNAME records to the previous host if needed.

---

## Final "go live" runbook (suggested order)

1. ~~Add CI workflow + required checks~~ ✅ **DONE** - `.github/workflows/ci.yml` created
2. ~~Add sitemap + robots~~ ✅ **DONE** - `src/app/sitemap.ts` and `src/app/robots.ts` created
3. ~~Implement analytics via GTM + GA4 + key events~~ ✅ **DONE** - `GoogleTagManager` component with events
4. ~~Make contact form production-ready~~ ✅ **DONE**
   - Database: `ContactSubmission` Prisma model
   - Notifications: Email via Resend (`src/lib/email.ts`)
   - Rate limiting: IP-based (`src/lib/rate-limit.ts`)
   - Attribution: UTM/referrer capture (`src/hooks/useAttribution.ts`)
   - ⚠️ Optional: Add CAPTCHA (Turnstile/reCAPTCHA) for additional spam protection
5. Create GSC property and verify (manual)
6. Connect domain in Vercel and schedule cutover window (manual)
7. Cutover DNS (manual)
8. Post-launch verification (indexing + tracking + lead delivery)

---

## Inputs needed from you

- **Domain + DNS provider**: What is the domain and where is DNS managed (GoDaddy, Cloudflare, Namecheap, etc.)?
- **CRM destination**: Where should new contacts go first (HubSpot, Pipedrive, email-only, etc.)?

