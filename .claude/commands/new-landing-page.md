---
description: Create a conversion-optimized landing page for REmail
argument-hint: <audience-or-purpose>
allowed-tools: Read, Write, Edit, Glob
---

# Create New Landing Page

Create a conversion-optimized landing page for REmail.

## Arguments
- `$ARGUMENTS`: The purpose/target audience for the landing page (e.g., "wholesalers", "fix-and-flip investors", "property managers")

## Instructions

### Step 1: Read Design Brief

@docs/DESIGN-BRIEF.md

### Step 2: Create the Page

Create the page at `src/app/(marketing)/[appropriate-path]/page.tsx`

### Step 3: Page Structure

Page must include these sections:

1. **Hero Section**
   - Clear value proposition for the target audience
   - Primary CTA button
   - Supporting visual or social proof

2. **Social Proof**
   - Testimonials from similar customers
   - Stats (customers, mail sent, ROI)
   - Trust badges or logos

3. **Feature Highlights**
   - 3-6 features relevant to this audience
   - Benefits-focused copy
   - Icons or illustrations

4. **How It Works**
   - 3-4 step process
   - Simple, visual explanation

5. **Pricing or CTA Section**
   - Clear next step
   - Remove friction

6. **FAQ Section**
   - 5-8 audience-specific questions
   - Structured for schema markup

7. **Final CTA**
   - Reinforce value proposition
   - Strong call-to-action

### Step 4: SEO Requirements

Include in the page:

```tsx
export const metadata: Metadata = {
  title: "[Audience] Direct Mail Automation | REmail",
  description: "[160 char description targeting audience]",
  keywords: ["[relevant keywords]"],
  openGraph: {
    title: "[Title]",
    description: "[Description]",
    type: "website",
  },
}
```

Add JSON-LD structured data:
```tsx
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  // ... structured data
})}
</script>
```

### Step 5: Technical Requirements

- Use Server Components where possible
- Implement proper loading states
- Add error boundaries
- Ensure mobile responsiveness
- Optimize for Core Web Vitals

### Step 6: A/B Testing Considerations

- Add data attributes for analytics tracking
- Structure components for easy variant testing

### Step 7: Create Supporting Components

Create corresponding components in `src/components/marketing/` if needed.

### Step 8: Update Sitemap

Update sitemap if manually managed at `src/app/sitemap.ts`
