# REmail Website Plan (SEO + Forms + AI Chat + AI Phone + Content Engine)

### Goals (what the site must do)
- **Generate qualified leads** from real estate investors (wholesalers + flippers) with clear positioning, proof, and multiple conversion paths.
- **Rank for high-intent SEO terms** (service pages + comparison pages + local/vertical pages + blog/resources).
- **Capture form fills** (contact, “get a sample mail piece,” “quote builder,” lead magnet download) with attribution + CRM handoff.
- **Provide AI chat support** (onsite widget that can answer FAQs, qualify, and book calls).
- **Provide an AI-answered phone number** (calls route to a voice agent; capture caller intent + details; push into CRM + alerts).
- **Enable content at scale with Claude Code**: generate/edit posts, landing pages, graphics, OG images, schema, and publish fast.

---

### Recommended stack (SEO-first, content-heavy, Claude-friendly)
- **Framework**: Next.js (App Router) + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Content**: MDX in-repo (fastest for Claude Code) *or* headless CMS later (Sanity/Contentful)
- **SEO**: Next Metadata API + JSON-LD schema per page + sitemap/robots + OpenGraph images
- **Forms**: Next.js Server Actions → database + email + CRM (HubSpot/Pipedrive)
- **Database**: Postgres (Supabase recommended for speed)
- **Email notifications**: Resend (or Postmark)
- **AI Chat**: embedded chat widget backed by your FAQ + content + lead capture + calendar booking
- **AI Phone Agent**: Twilio number → voice agent platform (Vapi/Retell/Bland) or custom Twilio + LLM → webhook to CRM
- **Analytics**: Plausible (simple) or GA4 + Search Console + Tag Manager
- **Hosting**: Vercel (best Next.js fit), images via `next/image` + CDN

---

### SEO plan (what to build to rank)

### Site architecture
- **Home**: value prop + offer + proof + CTA
- **Services**: core “Direct Mail Automation” page
- **Use-cases**: “Wholesalers,” “Flippers,” “Agents/Teams” (optional)
- **How it works**: process + timeline + integrations
- **Pricing**: ranges + ROI framing + CTA
- **Case studies**: before/after metrics
- **Blog/Resources**: educational + tactical
- **Contact**: form + phone + calendar

### Page types to publish (high impact)
- **Money pages**: “direct mail automation for real estate investors”, “done-for-you direct mail campaigns”, “absentee owner postcards”, “probate direct mail”, etc.
- **Comparison pages**: “REmail vs sending postcards yourself”, “direct mail vs cold calling”, “best direct mail software for wholesalers”
- **Programmatic/location-lite pages** (only if legit): by state/market *with unique content*, not thin duplicates
- **Content clusters**: each core service has 8–15 supporting posts that internally link back

### On-page essentials
- Unique title/H1, strong above-the-fold, “Who it’s for,” FAQs, testimonials, clear CTA
- JSON-LD: `Organization`, `LocalBusiness` (if applicable), `Service`, `FAQPage`, `Article`
- Internal linking system (topic hubs)

### Technical SEO
- Fast Core Web Vitals, image optimization, lazy loading, proper heading structure
- Auto-generate `sitemap.xml`, `robots.txt`, canonical tags, OG images

### Authority
- Publish case studies + data-driven posts + templates/checklists
- Add a “Direct mail piece gallery” (highly linkable) with real examples

---

### Conversion plan (forms + chat + phone)

### Forms (must-have)
- **Contact / Request demo**
- **Get pricing** (short qualifier: list source, volume, markets, budget)
- **Lead magnet download** (captures email + tags)

### AI Chat Agent
- **Trained on**: services, pricing rules, FAQs, turnaround times, compliance notes, examples, case studies
- **Capabilities**: qualify lead, recommend package, capture details, book call, create CRM lead, escalate to human

### AI Phone Number
- Twilio number with call recording (optional), transcription, structured lead capture
- Post-call: summary + extracted fields → CRM + Slack/SMS alert
- Fallback: “press 0 to talk to a human” or voicemail transcription

---

### Proposed folder structure (Next.js + MDX content-first)
```text
/Users/jasonm/REmail Website/
  README.md
  package.json
  next.config.ts
  tailwind.config.ts
  tsconfig.json
  public/
    images/
    og/
    mailers/
  src/
    app/
      (marketing)/
        page.tsx
        services/
          page.tsx
          direct-mail-automation/
            page.tsx
        industries/
          wholesalers/page.tsx
          flippers/page.tsx
        pricing/page.tsx
        case-studies/
          [slug]/page.tsx
        blog/
          page.tsx
          [slug]/page.tsx
        contact/page.tsx
      api/
        webhooks/
          twilio/route.ts
          chat/route.ts
    components/
      layout/
      seo/
      forms/
      chat/
      ui/
    content/
      blog/
        2026-01-01-how-to-mail-absentee-owners.mdx
      case-studies/
      pages/          # optional MDX landing pages
      data/
        faqs.json
        testimonials.json
    lib/
      seo/
        jsonld.ts
        metadata.ts
      content/
        mdx.ts
        index.ts
      crm/
        hubspot.ts
      ai/
        chat.ts
        retrieval.ts
      analytics/
      utils/
    styles/
  scripts/
    generate-post.ts
    generate-landing-page.ts
    generate-og.ts
    generate-image-prompts.ts
  prompts/
    brand-voice.md
    seo-article.md
    service-page.md
    faq.md
    image-brief.md
    case-study.md
```

---

### Claude Code “skills” to rely on (what you’ll ask it to do repeatedly)
- **Brand + positioning**: ICP, offer, guarantees, objections, messaging hierarchy
- **SEO**: keyword → intent mapping, outlines, internal linking plans, schema, titles/meta
- **Copywriting**: home page, service pages, pricing narrative, CTAs, lead magnets
- **Content production**: MDX articles with frontmatter, FAQs, tables, checklists, graphics briefs
- **Design system**: components, layout sections, accessibility, responsive behavior
- **Implementation**: Next.js routes, forms, webhooks, analytics, chat widget integration
- **Ops**: scripts to generate/publish content, validate links, generate sitemap/OG

---

### Commands (typical workflow)
- **Dev**: `pnpm dev`
- **Lint**: `pnpm lint`
- **Typecheck**: `pnpm typecheck`
- **Build**: `pnpm build`
- **Content generation** (you’ll create these scripts):
  - `pnpm gen:post` (creates MDX + image brief + internal links)
  - `pnpm gen:og` (creates OG images)
  - `pnpm gen:sitemap` (or handled by Next automatically)

*(If you prefer npm/yarn, swap accordingly; pnpm is a good default for speed.)*

---

### MCPs to use (practical set for Claude-driven build)
- **Filesystem + repo tools**: create/edit files, search, linting
- **Browser MCP**: verify pages, UX, forms, chat widget behavior
- **Web research MCP (Firecrawl/Perplexity)**: competitor teardown, keyword/topic research, compliance references, idea mining
- **Image generation (optional MCP/provider)**: post graphics + mailer mockups + OG images
- **Twilio MCP (or API tooling)**: provision phone number + webhook wiring
- **CRM MCP (HubSpot/Pipedrive)**: create/update leads automatically

---

### Content generator workflow (so you can publish “rich with graphics” fast)

### Authoring format
- MDX with frontmatter:
  - `title`, `description`, `slug`, `date`, `author`, `tags`, `canonical`, `heroImage`, `ogImage`, `schemaOverrides`

### Article generation output per post
- MDX draft (SEO-optimized)
- FAQ block (for `FAQPage` schema)
- Image brief prompts (hero + 2–5 in-article graphics)
- Internal link suggestions + anchor text
- CTA module (lead magnet / booking)

### Publishing
- Add MDX file → build auto-publishes on Vercel
- OG image generated + stored in `public/og/`

---

### Minimal milestone plan (build order)
- **Milestone 1 (foundation)**: Next.js site, core pages, design system, SEO plumbing (metadata, schema, sitemap, OG)
- **Milestone 2 (lead capture)**: forms + database + email notifications + CRM integration + analytics
- **Milestone 3 (AI chat)**: widget + knowledge base + lead qualification + booking + CRM push
- **Milestone 4 (AI phone)**: Twilio number + voice agent + post-call structured lead + alerts
- **Milestone 5 (content engine)**: MDX pipeline + scripts + templates + first 20 posts + 5 case studies + mailer gallery

---

### Decisions to finalize the build spec
- **AI phone agent approach**: managed voice agent platform (fastest) vs custom Twilio + LLM (more control)
- **CRM**: HubSpot, Pipedrive, GoHighLevel, or other

