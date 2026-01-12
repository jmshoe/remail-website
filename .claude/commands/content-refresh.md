---
description: Update existing content for freshness and improved SEO
argument-hint: [page-or-post-path]
allowed-tools: Read, Edit, Glob, Grep, WebSearch
---

# Content Refresh

Update existing content for freshness and improved SEO performance.

## Arguments
- `$ARGUMENTS`: Page or blog post path to refresh (optional - if omitted, list candidates)

## Refresh Checklist

### 1. Content Updates
- Update any outdated statistics or data
- Add new relevant information
- Improve readability and structure
- Add more actionable advice
- Include recent industry changes

### 2. SEO Improvements
- Review and optimize title tag
- Improve meta description for CTR
- Add missing internal links
- Update keyword targeting if needed
- Add FAQ section if missing
- Improve heading structure

### 3. Technical Updates
- Update `publishedAt` or add `updatedAt` date
- Check and fix broken links
- Update images if outdated
- Verify structured data

### 4. AI Search Optimization
- Add clear, direct answers to common questions
- Improve conversational elements
- Add entity mentions (brands, tools, concepts)
- Structure for featured snippets

## Priority Content to Refresh

Monitor Google Search Console for:
- Pages with declining impressions
- Pages with low CTR but good rankings
- Pages with high bounce rates

## Update Frequency

| Content Type | Frequency |
|--------------|-----------|
| Core landing pages | Monthly |
| Blog posts | Quarterly |
| Resource pages | As needed |

## Post-Update Actions

1. Update sitemap lastmod dates
2. Request re-indexing in Google Search Console
3. Share updated content on social media
4. Update any email sequences referencing the content

## Files to Check

- Marketing pages: `src/app/(marketing)/**/page.tsx`
- Blog posts: `content/blog/*.mdx`
- FAQ data: @src/data/faq.ts
