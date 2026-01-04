# Generate Blog Image

Generate or update a hero image for an existing blog post with dual sourcing options: stock photos or AI generation.

## Arguments
- $ARGUMENTS: Blog post slug, or flags like `--list` or `--all`

## Instructions

### Step 0: Parse Arguments

Check what the user requested:

1. **`--list`** - List all blog posts missing images
2. **`--all`** - Generate image assets for all posts missing images (batch mode)
3. **`[slug]`** - Generate image assets for a specific post
4. **No argument** - Prompt user to specify a slug or use `--list`

### Step 1: Validate & Load Post

If a specific slug is provided:

1. Check if post exists at `content/blog/{slug}.mdx`
2. If not found, list available posts and ask user to choose
3. Read the full post content including frontmatter

Extract from the post:
- Title
- Description
- Tags
- Current `image` and `imageAlt` values (if any)
- Key concepts from content (first 500 words)

### Step 2: Analyze Content for Visual Themes

Based on the post content, identify:

1. **Primary keyword** - The main SEO target (usually in title)
2. **Visual concept** - What imagery best represents the topic
3. **Mood/tone** - Professional, technical, actionable, etc.
4. **Related objects** - Physical items that could appear in the image

**Topic-to-Visual Mapping for Real Estate:**

| Topic | Visual Concepts |
|-------|-----------------|
| Direct mail | Postcards, letters, mailbox, desk with mail |
| Skip tracing | Data dashboard, contact info, search interface |
| Lead generation | Property maps, lists, analytics |
| Tax delinquent | County records, documents, property research |
| Wholesaling | Contracts, property photos, negotiation |
| Marketing | Campaign dashboards, ROI charts, analytics |
| Lists/data | Spreadsheets, databases, organized information |

### Step 3: Generate SEO Assets

Create these regardless of sourcing method:

**File Name:**
```
{primary-keyword-slug}-hero.jpg
```
- Lowercase, hyphenated
- Include primary keyword
- Keep concise but descriptive

**Alt Text:**
- Include primary keyword naturally
- Describe what the image shows
- Under 125 characters
- Accessibility-friendly

**Example:**
- Post: "What is Skip Tracing in Real Estate?"
- File: `skip-tracing-real-estate-hero.jpg`
- Alt: `"Skip tracing dashboard showing property owner contact information for real estate investors"`

### Step 4: Provide Stock Photo Option

Generate search terms and direct links for free stock photo sites.

**Primary Search Terms** (3 variations based on post topic):
1. Direct topic search
2. Related concept search
3. Abstract/mood search

**Output Format:**
```markdown
## Option A: Stock Photo Search (License-Free)

**Recommended Searches:**

1. **Unsplash** (Best quality, modern aesthetic)
   - ["{search term 1}"](https://unsplash.com/s/photos/{url-encoded-search})
   - ["{search term 2}"](https://unsplash.com/s/photos/{url-encoded-search})

2. **Pexels** (Good variety, easy filtering)
   - ["{search term 1}"](https://www.pexels.com/search/{url-encoded-search}/)
   - ["{search term 2}"](https://www.pexels.com/search/{url-encoded-search}/)

**Search Tips:**
- {Specific tips based on the topic}
- Look for images with blue/green tones to match brand
- Avoid overly staged "stock photo" looks
- Prefer clean, modern, minimalist compositions

**License:** Both Unsplash and Pexels offer free commercial use with no attribution required.
```

### Step 5: Provide AI Generation Option

Generate prompts for NanoBanana (Gemini) and other AI tools.

**Prompt Formula:**
```
[Visual concept], modern SaaS aesthetic, minimalist design,
blue (#2563EB) and green (#10B981) color accents, clean background,
soft natural lighting, professional photography style, 16:9 aspect ratio,
no text overlays, high quality
```

**Output Format:**
```markdown
## Option B: AI Generation

**NanoBanana/Gemini Prompt:**
```
{Generated prompt specific to post topic}
```

**DALL-E 3 Prompt:** (if different wording works better)
```
{Adjusted prompt for DALL-E}
```

**Midjourney Prompt:**
```
{Prompt with --ar 16:9 --style raw}
```

**Generation Tips:**
- {Tips specific to the visual concept}
- Run 2-3 generations and pick the best
- Regenerate if result looks too "AI-generated"
```

### Step 6: Output Complete Package

Present everything in a clear, actionable format:

```markdown
# Blog Image: "{Post Title}"

**Slug:** `{slug}`
**Current Image:** {existing image path or "None"}

---

## SEO Assets

| Property | Value |
|----------|-------|
| **File Name** | `{filename}.jpg` |
| **Alt Text** | "{alt text}" |
| **Save Location** | `/public/images/blog/` |
| **Specs** | 1920x1080px, <200KB, JPG/WebP |

---

## Option A: Stock Photo Search (License-Free)

{Stock photo section from Step 4}

---

## Option B: AI Generation

{AI generation section from Step 5}

---

## After Getting Your Image

1. **Optimize file size** - Use [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app) to compress to <200KB
2. **Rename file** - Use the suggested filename: `{filename}.jpg`
3. **Save to** - `/public/images/blog/`
4. **Update frontmatter** - Add/update these fields in the MDX file:

```yaml
image: "/images/blog/{filename}.jpg"
imageAlt: "{alt text}"
```

---

## Quick Actions

- [ ] Choose sourcing method (Stock or AI)
- [ ] Download/generate image
- [ ] Optimize to <200KB
- [ ] Save with correct filename
- [ ] Update MDX frontmatter
```

### Step 7: Offer Frontmatter Update

Ask the user if they'd like you to update the frontmatter automatically once they've saved the image.

---

## Batch Mode (`--all`)

When `--all` flag is used:

1. Scan all posts in `content/blog/`
2. Identify posts where `image` field is missing or empty
3. For each post, generate the SEO assets (file name, alt text)
4. Output a summary table:

```markdown
# Blog Posts Missing Images

| Post | Suggested Filename | Status |
|------|-------------------|--------|
| {title} | `{filename}.jpg` | Missing |
| {title} | `{filename}.jpg` | Missing |

## Batch Generation

{For each post, provide abbreviated stock search + AI prompt}
```

---

## List Mode (`--list`)

When `--list` flag is used:

1. Scan all posts in `content/blog/`
2. Show status of each post's image:

```markdown
# Blog Image Status

| Post | Image | Alt Text |
|------|-------|----------|
| {title} | ✅ `/images/blog/...` | ✅ Set |
| {title} | ❌ Missing | ❌ Missing |
| {title} | ✅ `/images/blog/...` | ⚠️ Using title fallback |
```

---

## Examples

### Example: Skip Tracing Post

**Input:** `/generate-blog-image what-is-skip-tracing-real-estate`

**Stock Searches:**
- Unsplash: "data analytics dashboard", "property research technology", "modern CRM interface"
- Pexels: "database search", "contact information screen"

**AI Prompt:**
```
Modern data visualization dashboard showing property owner contact details,
clean search interface with blue (#2563EB) highlights, minimalist UI design,
soft lighting, professional SaaS aesthetic, 16:9 aspect ratio, no text
```

### Example: Direct Mail Post

**Input:** `/generate-blog-image direct-mail-vs-cold-calling`

**Stock Searches:**
- Unsplash: "professional postcards desk", "direct mail marketing", "modern workspace letters"
- Pexels: "business mail correspondence", "marketing materials office"

**AI Prompt:**
```
Modern minimalist workspace with professional postcards and marketing materials,
clean white desk, blue and green accent colors, soft natural lighting,
professional photography style, 16:9 aspect ratio, no text overlays
```

---

## NanoBanana MCP Check

Before suggesting AI generation, check if NanoBanana MCP is available:

```bash
claude mcp list | grep nanobanana
```

If not installed, include setup instructions:

```markdown
**NanoBanana MCP Not Detected**

To enable AI image generation, install NanoBanana MCP:
```bash
claude mcp add gemini-nanobanana-mcp -s user -e GEMINI_API_KEY="YOUR_KEY" -- npx -y gemini-nanobanana-mcp@latest
```

Get your API key: https://aistudio.google.com/apikey
```
