---
description: Analyze and optimize website performance for Core Web Vitals
allowed-tools: Bash(npm run:*), Bash(npx:*), Read, Glob, Grep, mcp__dataforseo__on_page_lighthouse
---

# Performance Check

Analyze and optimize website performance for Core Web Vitals.

## Target Metrics

### Core Web Vitals (Google ranking factors)
| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| **LCP** (Largest Contentful Paint) | < 2.5s | 2.5-4s | > 4s |
| **INP** (Interaction to Next Paint) | < 200ms | 200-500ms | > 500ms |
| **CLS** (Cumulative Layout Shift) | < 0.1 | 0.1-0.25 | > 0.25 |

### Additional Metrics
| Metric | Target |
|--------|--------|
| First Contentful Paint (FCP) | < 1.8s |
| Time to First Byte (TTFB) | < 800ms |
| Total Blocking Time (TBT) | < 200ms |

## Check Process

### 1. Image Optimization
- Check for images without `next/image`
- Identify oversized images (> 200KB)
- Verify lazy loading below the fold
- Check for missing width/height attributes

### 2. JavaScript Analysis
- Review bundle size with `npm run analyze`
- Identify unused code
- Check for client components that could be server
- Review third-party scripts

### 3. CSS Optimization
- Check for unused Tailwind classes
- Identify render-blocking CSS
- Review critical CSS implementation

### 4. Server Response
- Check API route response times
- Review database query efficiency
- Verify caching headers

### 5. Font Loading
- Ensure fonts use `next/font`
- Check for font-display: swap
- Minimize font file sizes

## Tools

### Bundle Analysis
```bash
npm run build && npm run analyze
```

### Lighthouse (via DataForSEO MCP)
Use the `mcp__dataforseo__on_page_lighthouse` tool with the target URL.

### Check Unused Exports
```bash
npx knip
```

## Output Format

Provide prioritized recommendations:

| Priority | Issue | Impact | Fix |
|----------|-------|--------|-----|
| High | Large hero image (500KB) | LCP +1.2s | Compress to <200KB |
| Medium | Unused JS bundle | TBT +150ms | Code split |
| Low | Missing alt text | Accessibility | Add alt attributes |

Include specific file paths and line numbers where applicable.
