---
description: Create a new SEO-optimized blog post matching author's voice
argument-hint: <topic>
allowed-tools: Read, Write, Glob, Grep, Bash(ls:*), WebSearch, mcp__perplexity__search, mcp__gemini-nanobanana-mcp__generate_image, Bash(sips:*)
---

# Create New Blog Post

Create a new SEO-optimized blog post for the REmail website that matches the author's voice.

## Arguments
- `$ARGUMENTS`: The topic or title for the blog post

## Instructions

### Step 0: Analyze Voice DNA (REQUIRED FIRST STEP)

Before writing ANY content, analyze voice samples:

1. **Check for samples:**
   ```bash
   ls .claude/context/transcripts/
   ls .claude/context/written/
   ```

2. **If samples exist:**
   - Read ALL files in `.claude/context/transcripts/`
   - Read ALL files in `.claude/context/written/`
   - Extract voice characteristics:
     - Tone (formal/conversational, confident/humble)
     - Sentence structure (average length, complexity)
     - Vocabulary preferences (jargon, contractions)
     - Favorite phrases and expressions
     - Content flow patterns (openings, transitions, closings)
   - Create a mental voice profile to use throughout writing

3. **If NO samples exist:**
   - Notify user: "No voice samples found in `.claude/context/`. Using default professional tone. Add samples per the README for personalized voice."
   - Proceed with standard blog creation

### Step 1: Research the Topic

Research the topic using web search to understand:
- Current trends and statistics
- Competitor content gaps
- Target keywords and search intent

### Step 2: Plan the Structure

Based on voice analysis and SEO research:
- Outline the article structure
- Plan heading hierarchy (H1, H2, H3)
- Identify where examples fit naturally
- Note opportunities for the author's signature phrases

### Step 3: Write the Content

Create the blog post file at `content/blog/[slug].mdx`:

**External Links (IMPORTANT):**
Before adding any external links, read @src/data/links.ts which is the SINGLE SOURCE OF TRUTH for:
- Social media links (`socialLinks`)
- Affiliate links (`affiliateLinks`)
- External resources (`externalResources`)

When mentioning tools or resources, check if they exist in `affiliateLinks` and use those URLs.
When linking to social profiles, use `socialLinks`.

**SEO Requirements:**
- SEO-optimized title (under 60 characters)
- Meta description (under 160 characters)
- Target primary and secondary keywords
- Proper heading structure
- Internal links to related content
- Call-to-action for REmail signup

**Content Requirements:**
- Minimum 1,500 words for comprehensive coverage
- Include statistics and data points
- Add FAQ section with schema markup potential
- Include practical examples for real estate investors

**Voice Requirements (if samples exist):**
- Match sentence length to voice samples
- Use vocabulary consistent with samples
- Follow structural patterns from samples
- Include signature phrases where natural
- Maintain consistent tone throughout

**Frontmatter:**
```yaml
---
title: ""
description: ""
date: ""
author: ""
authorRole: ""
category: ""
tags: []
image: "/images/blog/"
imageAlt: ""
---
```

### Step 4: Voice Consistency Check

Before finalizing, review the content against voice samples:

1. **Sentence length** - Does average match samples? (+/- 20%)
2. **Vocabulary** - Using their words, not generic synonyms?
3. **Tone** - Consistent formality level throughout?
4. **Structure** - Following their opening/transition/closing patterns?
5. **Phrases** - Any phrases that feel "off-brand"?

Make adjustments as needed to match the voice profile.

### Step 5: Final Delivery

After creating:
- Suggest related internal links
- If voice samples were used, note: "Written using Voice DNA from [X] samples"

### Step 6: Hero Image

Generate or source a hero image for the blog post.

#### 6.1 Generate SEO-Optimized Image Prompt

Based on the post's target keyword and content, generate an image prompt following REmail brand guidelines:

**Prompt Template:**
```
[Visual concept related to topic], modern SaaS aesthetic, minimalist design,
blue (#2563EB) and green (#10B981) color accents, clean background,
soft natural lighting, professional photography style, 16:9 aspect ratio,
no text overlays, high quality
```

#### 6.2 Suggest File Name (SEO-Optimized)

File naming convention: `{target-keyword-slug}-hero.jpg`

- Use lowercase, hyphenated format
- Include the primary target keyword
- Keep it descriptive but concise

Save location: `/public/images/blog/`

#### 6.3 Generate Alt Text (SEO-Optimized)

Create descriptive, keyword-aligned alt text:
- Include the primary keyword naturally
- Describe what the image shows
- Keep under 125 characters
- Make it useful for accessibility

#### 6.4 Image Source Options

**Option A: NanoBanana MCP (Recommended)**
If NanoBanana MCP is configured:
1. Use the generated prompt with NanoBanana's image generation tool
2. Save the generated image to `/public/images/blog/{filename}.jpg`
3. **ALWAYS auto-optimize immediately** (see Step 6.5)

**Option B: Stock Photos**
Search Unsplash or Pexels with topic-derived search terms

**Option C: Manual Generation**
Provide the prompt for the user to generate via Midjourney, DALL-E 3, etc.

#### 6.5 Auto-Optimize Image (REQUIRED)

**ALWAYS optimize images immediately after generation/download.**

On macOS, use `sips` (built-in):

```bash
cd public/images/blog

# Optimize to ~120KB (quality 50, max width 1600px)
sips -s format jpeg -s formatOptions 50 --resampleWidth 1600 {filename}.jpg --out {filename}-optimized.jpg

# Check the size
ls -la {filename}-optimized.jpg

# If under 200KB, replace original
mv {filename}-optimized.jpg {filename}.jpg
```

**Target specifications:**
- File size: **Under 200KB** (ideally 100-150KB)
- Width: 1600px max (will be responsive)
- Format: JPEG (better compression for photos)
- Quality: 40-60 (balance between size and quality)

#### 6.6 Verify Frontmatter

Confirm the MDX frontmatter includes correct image references:
```yaml
image: "/images/blog/{slug}-hero.jpg"
imageAlt: "{generated alt text}"
```

---

## Reference Files

- External links: @src/data/links.ts
- Voice samples: `.claude/context/`
- Existing blog posts: `content/blog/*.mdx`
