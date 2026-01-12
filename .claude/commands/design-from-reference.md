---
description: Design based on a reference screenshot or URL
argument-hint: <url-or-screenshot-path>
allowed-tools: Read, Write, Edit, WebFetch, mcp__firecrawl__firecrawl_scrape, mcp__playwright__browser_take_screenshot
---

# Design from Reference

Design based on a reference screenshot or URL.

## Arguments
- `$ARGUMENTS`: URL or path to screenshot in `docs/design-references/`

## Step 1: Read Design Brief

@docs/DESIGN-BRIEF.md

## Step 2: Analyze the Reference

If URL provided, fetch and analyze. If screenshot path, read the image.

Identify what makes this design effective:
- Layout structure and composition
- Typography choices
- Color usage and contrast
- Spacing and whitespace
- Visual hierarchy
- Interactive elements
- Unique design elements

## Step 3: Adaptation Plan

Document what to take from the reference and how to adapt for REmail:
- "Taking the split hero layout, adapting colors to our primary blue"
- "Using similar card grid structure, applying our rounded corners"
- "Adopting the headline/subhead size ratio"

## Step 4: Implementation

Create the design, **adapting** (not copying) from the reference:
- Use REmail brand colors (#2563EB primary, #10B981 accent)
- Apply our typography system
- Maintain our border radius (8px buttons, 12px cards)
- Use our shadow styles
- Add our standard hover interactions

## Step 5: Comparison

Explain how the result relates to the reference:
- What was adapted
- What was changed for brand consistency
- What was improved or simplified

## Important

Never copy designs verbatim. Adapt the principles and patterns to fit REmail's brand and purpose.
