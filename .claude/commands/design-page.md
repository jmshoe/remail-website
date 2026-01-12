---
description: Design a new page following the design brief
argument-hint: <page-name>
allowed-tools: Read, Write, Edit, Glob
---

# Design Page

Design a new page following the design brief.

## Arguments
- `$ARGUMENTS`: Page name (e.g., "homepage", "pricing", "features", "about")

## Step 1: Read the Design Brief

First, read the design brief to understand preferences:

@docs/DESIGN-BRIEF.md

## Step 2: Understand the Page Context

- What is the purpose of this page?
- What are the key sections needed?
- What actions should users take?

## Step 3: Create Layout Structure

Create the page structure with proper sections:
- Navigation header
- Hero section
- Feature/content sections
- Social proof (if applicable)
- CTA section
- Footer

## Step 4: Apply Design Brief Styling

Use the colors, typography, and visual style from the brief:
- Primary color (#2563EB) for CTAs
- Accent color (#10B981) for highlights
- Proper font sizes and weights
- Consistent spacing (80-120px between sections)
- Soft shadows, rounded corners (8px buttons, 12px cards)
- Micro-interactions on hover

## Step 5: Use Existing Components

Check for existing UI components:
- `src/components/ui/` - ShadCN components
- `src/components/marketing/` - Marketing-specific components

## Step 6: Offer Iterations

After initial design, ask:
"Would you like to see 2-3 alternative approaches for any section?"

## Output

Create the page as a React component in the appropriate location:
- Marketing pages: `src/app/(marketing)/[page-name]/page.tsx`
- Use existing UI components from `src/components/ui/` when available
