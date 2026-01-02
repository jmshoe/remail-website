# Performance Check

Analyze and optimize website performance for Core Web Vitals.

## Metrics to Monitor

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **INP** (Interaction to Next Paint): < 200ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Additional Metrics
- First Contentful Paint (FCP): < 1.8s
- Time to First Byte (TTFB): < 800ms
- Total Blocking Time (TBT): < 200ms

## Check Process

1. **Image Optimization**
   - Check for images without `next/image`
   - Identify oversized images
   - Verify lazy loading below the fold
   - Check for missing width/height attributes

2. **JavaScript Analysis**
   - Review bundle size with `npm run analyze`
   - Identify unused code
   - Check for client components that could be server
   - Review third-party scripts

3. **CSS Optimization**
   - Check for unused Tailwind classes (use PurgeCSS)
   - Identify render-blocking CSS
   - Review critical CSS implementation

4. **Server Response**
   - Check API route response times
   - Review database query efficiency
   - Verify caching headers

5. **Font Loading**
   - Ensure fonts use `next/font`
   - Check for font-display: swap
   - Minimize font file sizes

## Tools to Use
```bash
# Bundle analysis
npm run build && npm run analyze

# Lighthouse CI
npx lighthouse https://remail.com --output=json

# Check unused exports
npx knip
```

## Output
Provide prioritized recommendations with estimated performance impact.
