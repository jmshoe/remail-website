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
- **Chat Widget**: Vapi AI (see `docs/VAPI-CHAT.md`)
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
│   │   ├── chat/               # Chat widget (Vapi AI)
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
- `NEXT_PUBLIC_VAPI_PUBLIC_KEY` - Vapi public API key (for chat widget)
- `FIRECRAWL_API_KEY` - Fire Crawl API key (for MCP web scraping - optional)

## Code Standards

- Use TypeScript strict mode
- Follow React Server Components patterns
- Implement proper error boundaries
- Use Zod for runtime validation
- Follow semantic HTML for accessibility
- Mobile-first responsive design
- Lazy load below-fold content

## Workflow Preferences

### Previewing Work
**IMPORTANT**: When completing work on pages or components, ALWAYS automatically start the dev server and open the browser to preview:

```bash
# 1. Kill any existing dev server and restart fresh
pkill -f "next dev" 2>/dev/null
sleep 1

# 2. Start the dev server in background
npm run dev &

# 3. Wait for server to start and check output for the actual port
sleep 5

# 4. Open the page in browser (check output for correct port - may be 3001 if 3000 is in use)
open http://localhost:<PORT>/<page-path>
```

**Rules:**
- ALWAYS restart the dev server when previewing new/modified pages
- ALWAYS check the dev server output for the actual port (Next.js will use 3001, 3002, etc. if 3000 is busy)
- ALWAYS open the browser automatically with the correct port
- Do NOT tell the user to run `npm run dev` manually
- Do NOT just provide a URL without opening it
- Do NOT assume port 3000 - always verify from server output

### Git Workflow

**IMPORTANT**: Always follow this workflow for commits, pushes, and merges.

#### Branch Strategy

- **`main`** - Production branch, auto-deploys to Vercel
- **`content-refactor`** (or feature branches) - Development work happens here

#### Standard Workflow

```bash
# 1. Work on feature branch
git checkout content-refactor  # or create: git checkout -b feature-name

# 2. Make changes and commit
git add <specific-files>       # Stage only relevant files
git commit -m "Descriptive commit message

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"

# 3. Push to remote
git push origin content-refactor

# 4. Merge to main (when ready for production)
git checkout main
git pull origin main           # Always pull latest first
git merge content-refactor --no-edit
git push origin main

# 5. Return to feature branch for more work
git checkout content-refactor
```

#### Commit Guidelines

- **Stage specific files** - Don't use `git add .` blindly; only stage files related to the current change
- **Write clear messages** - First line is summary, blank line, then details if needed
- **Include co-author** - Always add the Claude co-author line
- **One logical change per commit** - Don't bundle unrelated changes

#### When to Merge to Main

Merge to `main` when:
- Changes are tested and working
- User explicitly requests deployment
- After running `/deploy` command successfully

#### Example Commit Message

```
Add legacy URL redirects from old Wix site

Redirect old URLs indexed by Google to their new equivalents:
- /privacy-policy → /privacy
- /post/dc-home-buyer-* → /blog/*

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

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

## Chat Widget (Vapi AI)

The website includes an AI-powered chat widget for visitor support.

### Quick Reference

| Item | Value |
|------|-------|
| Component | `src/components/chat/VapiWidget.tsx` |
| Documentation | `docs/VAPI-CHAT.md` |
| Environment Variable | `NEXT_PUBLIC_VAPI_PUBLIC_KEY` |
| Mode | Chat (text-based) |
| Position | Bottom-right corner |

### Configuration

The widget is styled to match REmail branding:

```typescript
// Brand colors used in widget
const BRAND = {
  primary: '#2563EB',  // Blue accent & button
  accent: '#10B981',   // Green (available)
  white: '#FFFFFF',    // Button icon
}
```

### Customization

To modify the chat widget:

1. **Change assistant**: Update `assistantId` in `VapiWidget.tsx`
2. **Update branding**: Modify the `BRAND` constant and data attributes
3. **Change labels**: Edit the `data-main-label`, `data-empty-chat-message`, etc.

See `docs/VAPI-CHAT.md` for full documentation.

## Voice DNA (Content Voice Matching)

The project includes a Voice DNA system that analyzes your writing samples to match your unique voice when creating blog posts.

### How It Works

1. Add voice samples to `.claude/context/`:
   - **Transcripts**: Podcast episodes, YouTube videos, interviews → `.claude/context/transcripts/`
   - **Written**: Emails, LinkedIn posts, previous blog posts → `.claude/context/written/`

2. When you run `/new-blog-post`:
   - Claude reads ALL your samples
   - Extracts voice characteristics (tone, vocabulary, sentence patterns)
   - Writes content matching your style

### Quick Start

```bash
# Add a transcript (copy from YouTube, Otter.ai, etc.)
echo "Your transcript text..." > .claude/context/transcripts/podcast-episode-1.txt

# Add written content
echo "Your LinkedIn post or email..." > .claude/context/written/linkedin-post-1.txt
```

### Sample Guidelines

| Type | Files | Words per File |
|------|-------|----------------|
| Transcripts | 3-5 | 500-2000 |
| Written | 5-10 | 500-2000 |

See `.claude/context/README.md` for detailed instructions.

## External Links Configuration

All external links (social media, affiliates, resources) are managed in a single source of truth.

### Quick Reference

| Item | Value |
|------|-------|
| Location | `src/data/links.ts` |
| Imports | `import { socialLinks, affiliateLinks, externalResources } from '@/data/links'` |

### Structure

```typescript
// Social Media
socialLinks.twitter    // Twitter/X profile URL
socialLinks.linkedin   // LinkedIn company page
socialLinks.youtube    // YouTube channel

// Affiliate Links (with labels and descriptions)
affiliateLinks.propStream.url     // PropStream affiliate URL
affiliateLinks.lob.url            // Lob affiliate URL
// etc.

// External Resources
externalResources.usps.url        // USPS website
externalResources.biggerPockets.url  // BiggerPockets
```

### Usage Rules

1. **Components**: Import from `@/data/links` instead of hardcoding URLs
2. **Blog Posts**: When mentioning tools/platforms, check `affiliateLinks` first
3. **Content Generation**: `/new-blog-post` command references this file automatically
4. **Adding New Links**: Edit `src/data/links.ts` directly

### Adding New Links

```typescript
// In src/data/links.ts

// Add a new affiliate
affiliateLinks: {
  newTool: {
    url: 'https://newtool.com?ref=remail',
    label: 'New Tool',
    description: 'What this tool does',
  },
}
```

---

## Claude Code Tools

This project includes custom skills, commands, and scripts for Claude Code.

### Project Structure

```
.claude/
├── skills/
│   ├── seo-research/           # Auto-triggered SEO research skill
│   │   ├── SKILL.md            # Skill definition with frontmatter
│   │   └── seo-guidelines.md   # Target keywords & competitors
│   ├── frontend-design/        # Auto-triggered design skill
│   │   └── SKILL.md            # Senior front-end design guidelines
│   └── voice-dna/              # Auto-triggered voice matching skill
│       └── SKILL.md            # Voice analysis for content creation
├── context/                    # Voice DNA samples
│   ├── README.md               # Guide for adding samples
│   ├── transcripts/            # Audio/video transcripts
│   └── written/                # Written content samples
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
├── scripts/                    # Helper scripts
│   └── gsc.sh                  # Google Search Console API helper
└── mcp/                        # MCP server documentation
    ├── mcp-setup.md            # DataForSEO MCP setup
    ├── firecrawl-mcp-setup.md  # Fire Crawl MCP setup
    ├── browser-mcp-setup.md    # Browser MCP setup
    └── MCP-VERIFICATION.md     # MCP verification checklist
scripts/
└── dataforseo.sh               # DataForSEO API wrapper
```

### MCP Servers

This project uses Model Context Protocol (MCP) servers for enhanced capabilities:

| MCP Server | Purpose | Setup |
|------------|---------|-------|
| **Fire Crawl** | Web scraping, crawling, content extraction | See `.claude/mcp/firecrawl-mcp-setup.md` |
| **DataForSEO** | SEO research, keyword data, competitor analysis | See `.claude/mcp/mcp-setup.md` |
| **NanoBanana** | AI image generation (Gemini) for blog posts | See `.claude/mcp/nanobanana-mcp-setup.md` |
| **Playwright** | Browser automation, screenshots, web interaction | `claude mcp add playwright -- npx @playwright/mcp@latest` |
| **Perplexity** | AI-powered web search and research | `claude mcp add perplexity -e PERPLEXITY_API_KEY=your-key -- npx -y @mseep/perplexity-mcp` |
| **Chrome DevTools** | Chrome debugging, inspection, performance analysis | `claude mcp add chrome-devtools -- npx chrome-devtools-mcp@latest` |

**Quick Setup:**
```bash
# Fire Crawl MCP
claude mcp add firecrawl -e FIRECRAWL_API_KEY=your-key -- npx -y @mseep/firecrawl-mcp

# NanoBanana MCP (image generation via Gemini)
claude mcp add gemini-nanobanana-mcp -s user -e GEMINI_API_KEY=your-key -- npx -y gemini-nanobanana-mcp@latest

# Playwright MCP (browser automation)
claude mcp add playwright -- npx @playwright/mcp@latest

# Chrome DevTools MCP (debugging)
claude mcp add chrome-devtools -- npx chrome-devtools-mcp@latest

# Perplexity MCP (AI search)
claude mcp add perplexity -e PERPLEXITY_API_KEY=your-key -- npx -y @mseep/perplexity-mcp

# Verify
claude mcp list
```

See `.claude/mcp/firecrawl-mcp-setup.md`, `.claude/mcp/nanobanana-mcp-setup.md`, and `.claude/mcp/mcp-setup.md` for detailed configuration.

> **💡 Tip: Check Cursor MCP Config for Existing Keys**
>
> If you use Cursor IDE, you may already have MCP servers configured with API keys.
> Claude Code should check `~/.cursor/mcp.json` for existing configurations:
>
> ```bash
> # View existing Cursor MCP config
> cat ~/.cursor/mcp.json
> ```
>
> This file contains MCP server configurations with API keys that can be reused for Claude Code.
> Common servers found in Cursor configs: `firecrawl`, `perplexity`, `dataforseo`, etc.

### Google Search Console Integration

**Status:** Connected and working

GSC provides real ranking data directly from Google - clicks, impressions, CTR, and average position.

**GSC Script:** `.claude/scripts/gsc.sh`

| Command | Description |
|---------|-------------|
| `./gsc.sh top-queries [days] [limit]` | Top queries by clicks |
| `./gsc.sh top-pages [days] [limit]` | Top pages by clicks |
| `./gsc.sh quick-wins [days]` | Keywords ranking 5-20 (opportunities) |
| `./gsc.sh search-analytics [start] [end] [dim] [limit]` | Raw analytics data |
| `./gsc.sh inspect-url <url>` | Check URL index status |
| `./gsc.sh list-sites` | List all GSC properties |

**Examples:**
```bash
# Top 25 queries from last 30 days
.claude/scripts/gsc.sh top-queries 30 25

# Quick win opportunities
.claude/scripts/gsc.sh quick-wins 30

# Specific date range
.claude/scripts/gsc.sh search-analytics 2025-01-01 2025-01-14 query 100
```

**Authentication:** Uses Google Cloud Application Default Credentials (ADC) with the `white-space-solutions` project.

**Connected Properties:**
- `https://www.remaildirect.com/` (Site Owner)

### Skills (Auto-Triggered)

Skills are automatically invoked by Claude when relevant to the conversation.

| Skill | Description |
|-------|-------------|
| `seo-research` | Keyword research, competitor analysis, SERP data via DataForSEO API |
| `frontend-design` | Senior front-end design skill - reads DESIGN-BRIEF.md, applies design principles |
| `voice-dna` | Analyzes voice samples to match author's writing style for blog posts |

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
