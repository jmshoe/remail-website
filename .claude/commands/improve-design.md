---
description: Improve the visual design of a component or page
argument-hint: <file-path>
allowed-tools: Read, Edit
---

# Improve Design

Improve the visual design of a component or page.

## Arguments
- `$ARGUMENTS`: File path (e.g., "src/app/page.tsx", "src/components/marketing/Hero.tsx")

## Step 1: Read the Design Brief

@docs/DESIGN-BRIEF.md

## Step 2: Read the Current File

Analyze the current implementation and identify:
- Typography issues (hierarchy, sizes, weights)
- Spacing problems (too cramped, inconsistent)
- Color usage (not following brand)
- Missing hover states/interactions
- Shadow/depth issues
- Border radius inconsistencies

## Step 3: Apply Improvements

Fix issues following these priorities:
1. **Typography hierarchy** (most impactful)
2. **Spacing and whitespace**
3. **Color consistency** with brand (#2563EB primary, #10B981 accent)
4. **Shadows and depth** (soft, diffused)
5. **Micro-interactions** (hover states, transitions)
6. **Polish and refinement**

## Step 4: Before/After Summary

Explain what was changed and why:
- "Increased heading size for better hierarchy"
- "Added consistent 12px border radius"
- "Changed shadow to softer, more diffused style"
- "Added hover lift effect to cards"

## Rules

- Do NOT change functionality, only visual styling
- Preserve all existing behavior and logic
- Use Tailwind utility classes
- Follow the design system in `docs/DESIGN-BRIEF.md`
