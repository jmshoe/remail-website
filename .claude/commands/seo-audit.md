---
description: Perform a comprehensive SEO audit of the REmail website
allowed-tools: Glob, Grep, Read, Bash(npm run:*)
---

# SEO Audit

Perform a comprehensive SEO audit of the REmail website.

## Technical SEO

1. Review all pages in `src/app/(marketing)/` for proper meta tags
2. Check for missing or duplicate title tags
3. Verify meta descriptions are unique and under 160 characters
4. Ensure all images have alt text
5. Check for proper heading hierarchy (H1 → H2 → H3)
6. Verify canonical URLs are set correctly
7. Check structured data implementation (JSON-LD)

## Content SEO

1. Review keyword usage in headings and content
2. Check internal linking structure
3. Identify thin content pages (< 300 words)
4. Look for duplicate content issues

## Performance

1. Check for large unoptimized images (> 200KB)
2. Review lazy loading implementation
3. Check for render-blocking resources

## Files to Check

- Marketing pages: `src/app/(marketing)/**/page.tsx`
- Blog posts: `content/blog/*.mdx`
- Layout files: `src/app/(marketing)/layout.tsx`
- Sitemap: `src/app/sitemap.ts`
- Robots: `src/app/robots.ts`

## Target Keywords

Verify presence and optimization for:
- "direct mail real estate"
- "wholesaling direct mail"
- "real estate investor marketing"

## Output Format

Provide a detailed report:

### Critical Issues (Must Fix)
| Issue | File | Line | Recommendation |
|-------|------|------|----------------|
| ... | ... | ... | ... |

### Warnings
| Issue | File | Recommendation |
|-------|------|----------------|
| ... | ... | ... |

### Passed Checks
- [x] Check 1
- [x] Check 2

### Recommendations
Prioritized list of improvements with estimated SEO impact.
