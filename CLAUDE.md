# REmail - Direct Mail Automation for Real Estate Investors

## Project Overview

REmail is a direct mail automation platform designed specifically for real estate investors, including:
- **Wholesalers** - Finding motivated sellers and off-market deals
- **Fix-and-Flippers** - Targeting distressed properties and absentee owners
- **Buy-and-Hold Investors** - Building portfolios through targeted outreach

## Tech Stack

- **Frontend**: Next.js 14+ with App Router (React 18+)
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes / Server Actions
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **Email Service**: Resend or SendGrid
- **Direct Mail API**: Lob or Click2Mail
- **Analytics**: Google Analytics 4, Plausible
- **Hosting**: Vercel

## Project Structure

```
/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (marketing)/        # Public marketing pages (SEO-optimized)
│   │   ├── (auth)/             # Authentication pages
│   │   ├── (dashboard)/        # Protected user dashboard
│   │   └── api/                # API routes
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   ├── forms/              # Form components
│   │   ├── marketing/          # Marketing-specific components
│   │   └── dashboard/          # Dashboard components
│   ├── lib/                    # Utility functions and configurations
│   ├── hooks/                  # Custom React hooks
│   ├── types/                  # TypeScript type definitions
│   └── styles/                 # Global styles
├── prisma/                     # Database schema and migrations
├── public/                     # Static assets
│   ├── images/
│   └── seo/                    # SEO assets (og images, etc.)
├── content/                    # MDX content for blog/resources
└── tests/                      # Test files
```

## Key Features to Build

1. **Campaign Management** - Create, schedule, and track direct mail campaigns
2. **List Building** - Import/manage property owner lists
3. **Template Designer** - WYSIWYG postcard/letter designer
4. **Skip Tracing Integration** - Find owner contact information
5. **Analytics Dashboard** - Track response rates, ROI
6. **CRM Integration** - Sync with popular real estate CRMs
7. **Automation Workflows** - Drip campaigns and follow-ups

## SEO & AI Search Optimization Guidelines

### Target Keywords
- Primary: "direct mail for real estate investors", "real estate direct mail automation"
- Secondary: "wholesaling direct mail", "fix and flip marketing", "motivated seller letters"
- Long-tail: "best direct mail service for wholesalers", "automated postcards for real estate"

### Content Strategy
- Blog posts targeting investor pain points
- Case studies with ROI metrics
- Template galleries with examples
- Resource guides for direct mail best practices
- Comparison pages (vs competitors)

### Technical SEO Requirements
- Server-side rendering for all marketing pages
- Structured data (JSON-LD) for:
  - Organization
  - Product
  - FAQ
  - How-to articles
  - Reviews
- XML sitemap generation
- Canonical URLs
- Open Graph and Twitter Card meta tags
- Core Web Vitals optimization

### AI Search Optimization (AEO)
- Clear, concise answers in content (featured snippet optimization)
- FAQ sections with schema markup
- Conversational content structure
- Entity-based content organization
- Regular content freshness updates

## Development Commands

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
npm run type-check       # Run TypeScript checks

# Database
npm run db:push          # Push schema changes
npm run db:migrate       # Run migrations
npm run db:seed          # Seed database
npm run db:studio        # Open Prisma Studio

# Testing
npm run test             # Run tests
npm run test:e2e         # Run E2E tests
```

## Environment Variables

Required environment variables (see `.env.example`):
- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_SECRET` - NextAuth.js secret
- `NEXTAUTH_URL` - Application URL
- `STRIPE_SECRET_KEY` - Stripe API key
- `LOB_API_KEY` - Lob direct mail API key
- `RESEND_API_KEY` - Email service API key

## Code Standards

- Use TypeScript strict mode
- Follow React Server Components patterns
- Implement proper error boundaries
- Use Zod for runtime validation
- Follow semantic HTML for accessibility
- Mobile-first responsive design
- Lazy load below-fold content

## Brand Guidelines

- **Primary Color**: #2563EB (Blue - trust, professionalism)
- **Accent Color**: #10B981 (Green - growth, money)
- **Voice**: Professional but approachable, results-focused
- **Target Audience**: Real estate investors aged 25-55, tech-savvy

## Design System

### Quick Reference

| Element | Value |
|---------|-------|
| Border Radius (buttons) | 8px |
| Border Radius (cards) | 12px |
| Section Padding | 80-120px vertical |
| Shadow (subtle) | `shadow-sm` |
| Shadow (elevated) | `shadow-lg` |
| Transition | `duration-200` |

### Typography Scale

```css
/* Headings */
h1: 48-72px (hero) / 36-48px (page)
h2: 30-36px
h3: 24px
h4: 20px

/* Body */
body: 16-18px
small: 14px
```

### Design Files

| File | Purpose |
|------|---------|
| `docs/DESIGN-BRIEF.md` | User input for design preferences (edit this) |
| `docs/design-references/` | Screenshots and inspiration URLs |
| `.claude/skills/frontend-design/SKILL.md` | Auto-triggered design skill |

### Design Commands

| Command | Description | Usage |
|---------|-------------|-------|
| `/design-page` | Design a new page following the brief | `/design-page pricing` |
| `/improve-design` | Improve visual design of a file | `/improve-design src/app/page.tsx` |
| `/design-iterate` | Generate 3 design variations | `/design-iterate hero` |
| `/design-from-reference` | Design based on reference | `/design-from-reference https://stripe.com` |
| `/add-shadcn` | Add a ShadCN component | `/add-shadcn button` |

### How to Customize Design

1. **Edit `docs/DESIGN-BRIEF.md`** to specify:
   - Color preferences
   - Typography choices
   - Visual style (minimal vs bold)
   - Layout preferences
   - Inspiration URLs

2. **Add references** to `docs/design-references/`:
   - Screenshot designs you like
   - Add URLs to `INSPIRATION.md`

3. **Use design commands** to create/improve pages

### Component Library

Using **ShadCN/ui** with Radix UI primitives:
- Components: `src/components/ui/`
- Config: `components.json`
- Add components: `npx shadcn@latest add <component>`

### CSS Utilities

Custom utilities in `src/styles/globals.css`:
- `.gradient-text` - Gradient text effect
- `.glass` - Glassmorphism background
- `.hover-lift` - Hover lift animation
- `.animate-fade-in` - Fade in animation

## Claude Code Tools

This project includes custom skills, commands, and scripts for Claude Code.

### Project Structure

```
.claude/
├── skills/
│   ├── seo-research/           # Auto-triggered SEO research skill
│   │   ├── SKILL.md            # Skill definition with frontmatter
│   │   └── seo-guidelines.md   # Target keywords & competitors
│   └── frontend-design/        # Auto-triggered design skill
│       └── SKILL.md            # Senior front-end design guidelines
├── commands/                   # Slash commands (manual triggers)
│   ├── keyword-research.md     # /keyword-research <seed>
│   ├── keyword-volume.md       # /keyword-volume <keywords>
│   ├── competitor-seo.md       # /competitor-seo <domain>
│   ├── serp-analysis.md        # /serp-analysis <keyword>
│   ├── design-page.md          # /design-page <page-name>
│   ├── improve-design.md       # /improve-design <file-path>
│   ├── design-iterate.md       # /design-iterate <component>
│   ├── design-from-reference.md # /design-from-reference <ref>
│   ├── add-shadcn.md           # /add-shadcn <component>
│   ├── seo-audit.md            # /seo-audit
│   ├── new-blog-post.md        # /new-blog-post <topic>
│   ├── new-landing-page.md     # /new-landing-page <topic>
│   ├── new-component.md        # /new-component <name>
│   ├── add-mail-template.md    # /add-mail-template
│   ├── competitor-analysis.md  # /competitor-analysis
│   ├── content-refresh.md      # /content-refresh
│   ├── db-migrate.md           # /db-migrate
│   ├── deploy.md               # /deploy
│   ├── performance-check.md    # /performance-check
│   └── review-pr.md            # /review-pr
scripts/
└── dataforseo.sh               # DataForSEO API wrapper
```

### Skills (Auto-Triggered)

Skills are automatically invoked by Claude when relevant to the conversation.

| Skill | Description |
|-------|-------------|
| `seo-research` | Keyword research, competitor analysis, SERP data via DataForSEO API |
| `frontend-design` | Senior front-end design skill - reads DESIGN-BRIEF.md, applies design principles |

### Slash Commands

Manually invoke with `/command-name`:

**SEO Commands:**
| Command | Description | Usage |
|---------|-------------|-------|
| `/keyword-research` | Get keyword ideas from seed keywords | `/keyword-research direct mail` |
| `/keyword-volume` | Get search volume for keywords | `/keyword-volume direct mail, postcards` |
| `/competitor-seo` | Analyze competitor domain SEO | `/competitor-seo ballpointmarketing.com` |
| `/serp-analysis` | Analyze SERP for a keyword | `/serp-analysis wholesaling direct mail` |
| `/seo-audit` | Run SEO audit on the codebase | `/seo-audit` |

**Design Commands:**
| Command | Description | Usage |
|---------|-------------|-------|
| `/design-page` | Design a new page following the brief | `/design-page pricing` |
| `/improve-design` | Improve visual design of a file | `/improve-design src/app/page.tsx` |
| `/design-iterate` | Generate 3 design variations | `/design-iterate hero` |
| `/design-from-reference` | Design based on reference | `/design-from-reference https://stripe.com` |
| `/add-shadcn` | Add a ShadCN component | `/add-shadcn button` |

**Development Commands:**
| Command | Description | Usage |
|---------|-------------|-------|
| `/new-blog-post` | Create a new blog post | `/new-blog-post topic` |
| `/new-landing-page` | Create a new landing page | `/new-landing-page topic` |
| `/new-component` | Scaffold a new component | `/new-component Button` |
| `/deploy` | Deploy to production | `/deploy` |
| `/review-pr` | Review a pull request | `/review-pr 123` |

### DataForSEO API

The project uses DataForSEO for keyword research and SEO data. The API is accessed via `scripts/dataforseo.sh`.

**Available endpoints:**
- `search_volume` - Google Ads search volume
- `keyword_ideas` - Keyword ideas from seeds
- `keyword_suggestions` - Autocomplete suggestions
- `related_keywords` - Related keywords
- `ranked_keywords` - Keywords a domain ranks for
- `competitors` - Competitor domains
- `domain_overview` - Domain traffic overview
- `serp` - Live SERP results

**Example usage:**
```bash
./scripts/dataforseo.sh search_volume '[{"keywords": ["direct mail real estate"], "location_code": 2840, "language_code": "en"}]'
```

**Required environment variables:**
- `DATAFORSEO_LOGIN` - DataForSEO email
- `DATAFORSEO_PASSWORD` - DataForSEO API password
- `DATAFORSEO_BASE64` - Pre-computed base64 auth (optional)
