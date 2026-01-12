---
description: Generate or update a hero image for a blog post
argument-hint: <slug> | --list | --all
allowed-tools: Read, Write, Edit, Glob, Bash(ls:*), Bash(sips:*), mcp__gemini-nanobanana-mcp__generate_image
---

# Generate Blog Image

Generate or update a hero image for an existing blog post with dual sourcing options: stock photos or AI generation.

## Arguments
- `$ARGUMENTS`: Blog post slug, or flags like `--list` or `--all`

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

### Step 4: Provide Stock Photo Option

Generate search terms and direct links for free stock photo sites.

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

### Step 6: Image Optimization (REQUIRED)

After generating/downloading, optimize the image:

```bash
cd public/images/blog
sips -s format jpeg -s formatOptions 50 --resampleWidth 1600 {filename}.jpg --out {filename}-optimized.jpg
mv {filename}-optimized.jpg {filename}.jpg
```

**Target specifications:**
- File size: **Under 200KB** (ideally 100-150KB)
- Width: 1600px max
- Format: JPEG

### Step 7: Update Frontmatter

Update the MDX file with:
```yaml
image: "/images/blog/{filename}.jpg"
imageAlt: "{generated alt text}"
```

---

## Batch Mode (`--all`)

When `--all` flag is used:
1. Scan all posts in `content/blog/`
2. Identify posts where `image` field is missing or empty
3. For each post, generate the SEO assets
4. Output a summary table

## List Mode (`--list`)

When `--list` flag is used:
1. Scan all posts in `content/blog/`
2. Show status of each post's image

| Post | Image | Alt Text |
|------|-------|----------|
| {title} | ✅ `/images/blog/...` | ✅ Set |
| {title} | ❌ Missing | ❌ Missing |
