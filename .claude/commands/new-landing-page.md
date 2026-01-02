# Create New Landing Page

Create a conversion-optimized landing page for REmail.

## Arguments
- $ARGUMENTS: The purpose/target audience for the landing page (e.g., "wholesalers", "fix-and-flip investors")

## Instructions

1. Create the page at `src/app/(marketing)/[appropriate-path]/page.tsx`

2. Page structure must include:
   - Hero section with clear value proposition
   - Social proof (testimonials, stats, logos)
   - Feature highlights relevant to the audience
   - Pricing or CTA section
   - FAQ section
   - Final CTA

3. SEO requirements:
   - Generate metadata export with title, description, keywords
   - Add JSON-LD structured data
   - Ensure proper Open Graph tags
   - Include canonical URL

4. Technical requirements:
   - Use Server Components where possible
   - Implement proper loading states
   - Add error boundaries
   - Ensure mobile responsiveness
   - Optimize for Core Web Vitals

5. Include A/B testing considerations:
   - Add data attributes for analytics tracking
   - Structure components for easy variant testing

6. Create corresponding components in `src/components/marketing/` if needed

7. Update sitemap if manually managed
