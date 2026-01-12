---
description: Generate SEO-optimized content briefs for REmail blog posts
argument-hint: [focus-area] or [number] ideas
allowed-tools: Glob, Grep, Read, Bash(ls:*), WebSearch, mcp__perplexity__search, mcp__perplexity__reason
---

# Generate Content Ideas

Generate SEO-optimized content briefs for REmail blog posts based on keyword strategy and competitive research.

## Arguments
- `$ARGUMENTS`: Optional focus area (e.g., "skip tracing", "quick wins", "competitor comparisons") or number of ideas (e.g., "5 ideas")

## Instructions

### Step 1: Load Keyword Strategy

Read the target keywords file to understand priorities:

@docs/TARGET-KEYWORDS.md

Extract keywords by tier:
- **Tier 1**: High-volume opportunity keywords (1,000+ searches)
- **Tier 2**: Competitor & tool keywords
- **Tier 3**: Quick win keywords (LOW competition)
- **Tier 4**: Informational content keywords

If `$ARGUMENTS` specifies a focus area, filter to relevant keywords.

### Step 2: Inventory Existing Content

Scan existing content to build a coverage map and avoid cannibalization:

```bash
# List existing blog posts
ls content/blog/*.mdx 2>/dev/null || echo "No blog posts yet"

# List marketing pages
ls src/app/\(marketing\)/*/page.tsx
```

For each existing piece, note:
- Title/H1
- Primary keyword/intent
- Key topics covered

### Step 3: Research with Perplexity

For each potential topic, use Perplexity to research:

**Blog/SERP research query pattern:**
```
[keyword] real estate investors 2025 2026 guide best practices
```

**YouTube discovery query pattern:**
```
site:youtube.com [keyword] real estate investors
```

Gather:
- 2-3 dominant SERP angles (what ranks and why)
- 3-5 unique insights not yet covered on REmail
- 3-5 credible sources for statistics/benchmarks
- 2-3 relevant YouTube videos

### Step 4: Generate Content Briefs

For each recommended topic, create a brief using this template:

---

## Content Brief: [Topic Title]

**ID / slug idea**: `[slug]`

**Primary keyword**: [keyword] ([volume] monthly, [competition] competition)

**Secondary keywords (5-10)**:
- [keyword 1]
- [keyword 2]
- ...

**Headline (SEO-safe)**: [Under 60 chars, includes primary keyword]

**Headline (attention-first)**: [Curiosity/benefit-driven version]

**One-paragraph summary**: [What reader will learn + why it matters]

**Search intent + audience**: [Informational/Commercial/Transactional] + [Wholesalers/Flippers/All investors]

**Differentiation vs existing content**: [How this differs from current REmail content]

**Suggested outline (H2/H3)**:
1. [H2: Section 1]
   - [H3: Subsection]
2. [H2: Section 2]
3. ...
4. [H2: FAQ]
5. [H2: CTA]

**Internal link targets (3+)**:
- `/services` - [anchor text]
- `/pricing` - [anchor text]
- `/blog/[related-post]` - [anchor text]

**Perplexity citations (blogs + YouTube)**:
- [Source 1 URL] - [What to extract]
- [Source 2 URL] - [What to extract]
- [YouTube video URL] - [Key takeaway]

**Extractable facts (5-10 bullets)**:
- [Stat or insight 1]
- [Stat or insight 2]
- ...

**Overlap report**:
- Risk: [Low/Medium/High]
- Most similar existing pages/posts: [List or "None"]
- How we avoid cannibalization: [Differentiation strategy]

**Keyword distribution plan**:
- H1: Include primary keyword
- Meta title: [primary keyword] + benefit
- First 100 words: Primary keyword + context
- H2s with partial match: [List specific H2s]
- Target density: ~0.8% primary, ~0.3% each secondary

---

### Step 5: Prioritize & Recommend

Rank the briefs by:

1. **Quick win score** (LOW competition + decent volume = highest)
2. **Commercial intent** (higher CPC = closer to purchase)
3. **Product fit** (directly supports REmail features)
4. **Content gap** (not covered elsewhere on site)

Present a prioritized list:

| Priority | Topic | Volume | Competition | Est. Difficulty | Why Now |
|----------|-------|--------|-------------|-----------------|---------|
| 1 | ... | ... | LOW | Easy | Quick win |
| 2 | ... | ... | MEDIUM | Medium | High intent |
| ... | ... | ... | ... | ... | ... |

### Step 6: Output Format

Default output: **5 content briefs** (or number specified in $ARGUMENTS)

Deliver as:
1. **Summary table** (prioritized list)
2. **Full briefs** (detailed template for each)
3. **Next steps**: Which to create first, any dependencies

---

## Example Usage

```
/content-ideas
```
→ Generates 5 prioritized content briefs across all tiers

```
/content-ideas quick wins
```
→ Focuses on LOW competition keywords from Tier 3

```
/content-ideas skip tracing
```
→ Generates briefs for the skip tracing content hub

```
/content-ideas 10 ideas
```
→ Generates 10 content briefs instead of default 5

---

## Reference Files

- Keyword strategy: @docs/TARGET-KEYWORDS.md
- Existing blog: `content/blog/*.mdx`
- Marketing pages: `src/app/(marketing)/**/page.tsx`
- Publish command: `/new-blog-post`
