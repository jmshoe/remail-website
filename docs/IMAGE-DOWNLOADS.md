# Image Download Guide

This document contains direct download links and instructions for adding images to your REmail website.

## Services Page Images (6 images needed)

All images should be:
- **Aspect Ratio**: 16:9 (1920x1080px recommended)
- **Format**: JPG or WebP
- **File Size**: Under 200KB (optimize after download)
- **Save Location**: `/public/images/services/`

---

### 1. Direct Mail Campaigns
**File name**: `direct-mail-campaigns.jpg`

**Unsplash Search**: https://unsplash.com/s/photos/modern-workspace-desk-postcards-letters

**Recommended Images**:
- **Option 1**: https://unsplash.com/photos/two-envelopes-and-a-piece-of-paper-on-a-table-R8UnZ1bOzO4
  - Clean, minimalist workspace with envelopes and paper
  - Download: Click the download button (free with Unsplash account)
  
- **Option 2**: Search for "minimalist desk setup" or "clean workspace stationery"
  - Look for images with clean backgrounds, modern aesthetic

**Alternative Search Terms**:
- "minimalist workspace"
- "clean desk setup"
- "modern office stationery"

---

### 2. Skip Tracing
**File name**: `skip-tracing.jpg`

**Unsplash Search**: https://unsplash.com/s/photos/data-visualization-dashboard-analytics

**Recommended Images**:
- **Option 1**: https://unsplash.com/s/photos/modern-dashboard-analytics
  - Look for screens showing data visualization, charts, or dashboards
  - Avoid busy/complex interfaces - prefer clean, modern SaaS-style dashboards

- **Option 2**: Search for "business analytics dashboard" or "data visualization screen"
  - Modern tech aesthetic with blue/green color schemes preferred

**Alternative Search Terms**:
- "modern dashboard"
- "analytics interface"
- "data visualization"
- "business intelligence"

---

### 3. List Building
**File name**: `list-building.jpg`

**Unsplash Search**: https://unsplash.com/s/photos/map-pins-location-markers

**Recommended Images**:
- **Option 1**: https://unsplash.com/s/photos/map-markers-pins
  - Clean map visualizations with location markers
  - Modern infographic style

- **Option 2**: Search for "data visualization map" or "location markers"
  - Avoid cluttered maps - prefer clean, organized visualizations

**Alternative Search Terms**:
- "map visualization"
- "location data"
- "geographic data visualization"
- "property markers"

---

### 4. Template Designer
**File name**: `template-designer.jpg`

**Unsplash Search**: https://unsplash.com/s/photos/design-interface-mockup-ui

**Recommended Images**:
- **Option 1**: https://unsplash.com/s/photos/design-tools-interface
  - Design software interfaces, mockups, or design tools
  - Clean UI/UX aesthetic

- **Option 2**: Search for "design mockup" or "creative workspace"
  - Modern design tools, templates, or design processes

**Alternative Search Terms**:
- "design interface"
- "mockup design"
- "creative tools"
- "ui design"

---

### 5. Campaign Analytics
**File name**: `campaign-analytics.jpg`

**Unsplash Search**: https://unsplash.com/s/photos/analytics-dashboard-charts-graphs

**Recommended Images**:
- **Option 1**: https://unsplash.com/s/photos/business-analytics-dashboard
  - Charts, graphs, metrics visualization
  - Modern dashboard aesthetic with blue/green colors

- **Option 2**: Search for "business metrics" or "analytics charts"
  - Clean data visualization, professional analytics

**Alternative Search Terms**:
- "analytics dashboard"
- "business metrics"
- "data charts"
- "performance metrics"

---

### 6. Drip Campaigns
**File name**: `drip-campaigns.jpg`

**Unsplash Search**: https://unsplash.com/s/photos/workflow-automation-diagram

**Recommended Images**:
- **Option 1**: https://unsplash.com/s/photos/automation-workflow-diagram
  - Process flows, timelines, or automation visualizations
  - Modern diagram style

- **Option 2**: Search for "process visualization" or "workflow diagram"
  - Clean process flows, automation concepts

**Alternative Search Terms**:
- "workflow diagram"
- "process flow"
- "automation visualization"
- "timeline diagram"

---

## Quick Download Instructions

### Method 1: Direct Unsplash Download
1. Visit the Unsplash URL provided above
2. Click on an image you like
3. Click the download button (arrow icon, bottom right)
4. Choose size: "Full" or "Regular" (1920x1080px or larger)
5. Save to `/public/images/services/` with the correct filename

### Method 2: Using Unsplash Source URLs
For programmatic downloads, you can use Unsplash Source URLs:

```
https://images.unsplash.com/photo-[PHOTO_ID]?w=1920&q=80
```

Replace `[PHOTO_ID]` with the photo ID from the Unsplash URL.

### Method 3: AI Generation
If you prefer AI-generated images, use the prompts from `IMAGE-STRATEGY.md` with:
- DALL-E 3 (via ChatGPT Plus)
- Midjourney
- Stable Diffusion

Generate at 1920x1080px resolution, then save to `/public/images/services/`

---

## Image Optimization

After downloading images:

1. **Resize** (if needed):
   - Desktop: 1920x1080px
   - Ensure 16:9 aspect ratio

2. **Compress**:
   - Use TinyPNG: https://tinypng.com
   - Or Squoosh: https://squoosh.app
   - Target: Under 200KB per image

3. **Rename**:
   - Use exact filenames listed above
   - All lowercase, hyphens for spaces

4. **Verify**:
   - Check file sizes
   - Preview images
   - Ensure consistent style across all 6 images

---

## Placeholder Images (Temporary)

Until you add real images, the code will show a gray placeholder. The Next.js Image component will handle this gracefully.

To use placeholder images temporarily, you can:
1. Use a single placeholder image for all services
2. Create simple gradient placeholders in design tools
3. Use the gray background that's currently showing

---

## Current Status

- [ ] Direct Mail Campaigns image downloaded and optimized
- [ ] Skip Tracing image downloaded and optimized
- [ ] List Building image downloaded and optimized
- [ ] Template Designer image downloaded and optimized
- [ ] Campaign Analytics image downloaded and optimized
- [ ] Drip Campaigns image downloaded and optimized
- [ ] All images saved to `/public/images/services/`
- [ ] All images optimized (< 200KB each)
- [ ] Images verified on services page

---

## Alternative: Using Pexels

If Unsplash doesn't have what you need, try Pexels:

1. Visit https://www.pexels.com
2. Search using the same terms listed above
3. Filter by: Orientation (Landscape), Size (Large)
4. Download and save to `/public/images/services/`

Pexels images are also free to use without attribution (though attribution is appreciated).

---

## Notes

- All images should match the Modern SaaS aesthetic (see DESIGN-BRIEF.md)
- Avoid generic stock photos with people
- Prefer clean, minimalist compositions
- Blue (#2563EB) and green (#10B981) color accents are preferred but not required
- Images should feel professional but approachable
- No traditional real estate clichés (handshakes, keys, etc.)
