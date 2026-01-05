# Create New Blog Post

Create a new SEO-optimized blog post for the REmail website that matches the author's voice.

## Arguments
- $ARGUMENTS: The topic or title for the blog post

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
Before adding any external links, read `src/data/links.ts` which is the SINGLE SOURCE OF TRUTH for:
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

**Example for "direct mail real estate":**
```
Modern minimalist workspace with professional postcards and property photos
on a clean desk, blue and green accent colors, soft natural lighting,
modern SaaS aesthetic, clean white background, 16:9 aspect ratio
```

#### 6.2 Suggest File Name (SEO-Optimized)

File naming convention: `{target-keyword-slug}-hero.jpg`

- Use lowercase, hyphenated format
- Include the primary target keyword
- Keep it descriptive but concise

**Examples:**
- `direct-mail-real-estate-hero.jpg`
- `skip-tracing-guide-hero.jpg`
- `tax-delinquent-properties-hero.jpg`
- `wholesaling-marketing-strategies-hero.jpg`

Save location: `/public/images/blog/`

#### 6.3 Generate Alt Text (SEO-Optimized)

Create descriptive, keyword-aligned alt text:
- Include the primary keyword naturally
- Describe what the image shows
- Keep under 125 characters
- Make it useful for accessibility

**Example:** `"Direct mail postcards for real estate investors displayed on a modern workspace desk"`

#### 6.4 Image Source Options

Present the following options to the user:

**Option A: NanoBanana MCP (Recommended)**
If NanoBanana MCP is configured (`claude mcp list` shows `gemini-nanobanana-mcp`):
1. Use the generated prompt with NanoBanana's image generation tool
2. Download/save the generated image
3. Optimize to <200KB using TinyPNG or Squoosh
4. Save to `/public/images/blog/{filename}.jpg`

**Option B: Stock Photos**
Search Unsplash or Pexels with topic-derived search terms:
- "modern [topic] workspace"
- "[topic] professional"
- "real estate [topic]"

Download, rename to SEO-optimized filename, and save.

**Option C: Manual Generation**
Provide the prompt for the user to generate via:
- Midjourney
- DALL-E 3 (via ChatGPT or Bing)
- Adobe Firefly

#### 6.5 Verify Frontmatter

Confirm the MDX frontmatter includes correct image references:
```yaml
image: "/images/blog/{slug}-hero.jpg"
imageAlt: "{generated alt text}"
```

#### 6.6 Output Checklist

Provide this checklist to the user:

```
## Hero Image Checklist

- [ ] **Image Prompt:** [generated prompt]
- [ ] **Suggested File Name:** {slug}-hero.jpg
- [ ] **Alt Text:** [generated alt text]
- [ ] **Specifications:** 1920x1080px, <200KB, JPG/WebP
- [ ] **Save Location:** /public/images/blog/

### Generation Options:
1. NanoBanana MCP: Use prompt above with image generation tool
2. Stock Photo: Search Unsplash/Pexels for "[topic keywords]"
3. Manual: Copy prompt to Midjourney/DALL-E/Firefly

### After Generation:
1. Optimize file size (<200KB) using TinyPNG or Squoosh
2. Save to /public/images/blog/ with suggested filename
3. Verify frontmatter has correct image and imageAlt values
```

---

## NanoBanana MCP Setup

If NanoBanana MCP is not installed, provide setup instructions:

```bash
# Install NanoBanana MCP (requires Gemini API key)
claude mcp add gemini-nanobanana-mcp -s user -e GEMINI_API_KEY="YOUR_API_KEY" -- npx -y gemini-nanobanana-mcp@latest

# Get Gemini API key from: https://aistudio.google.com/apikey
```

See `.claude/mcp/nanobanana-mcp-setup.md` for detailed setup instructions.
