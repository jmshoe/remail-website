# REmail Design Brief

*Edit this file to define your design preferences. Claude will use this as the source of truth for all design decisions.*

---

## Brand Identity

### Brand Personality
<!-- Choose 3-5 adjectives that describe how REmail should feel -->
- Professional
- Trustworthy
- Modern
- Results-focused
- Approachable

### Target Audience
- Real estate investors (wholesalers, flippers, buy-and-hold)
- Age: 25-55
- Tech-savvy but value simplicity
- Results-driven, ROI-focused

---

## Color Palette

### Primary Colors
<!-- Main brand color - used for CTAs, links, key UI elements -->
```css
--primary: #2563EB;        /* Trust blue */
--primary-foreground: #FFFFFF;
```

### Accent Colors
<!-- Secondary color - used for success states, highlights -->
```css
--accent: #10B981;         /* Growth green - represents money/success */
--accent-foreground: #FFFFFF;
```

### Neutral Colors
<!-- Background, text, borders -->
```css
--background: #FFFFFF;
--foreground: #0F172A;     /* Slate 900 */
--muted: #F1F5F9;          /* Slate 100 */
--muted-foreground: #64748B; /* Slate 500 */
--border: #E2E8F0;         /* Slate 200 */
```

### Semantic Colors
```css
--success: #10B981;
--warning: #F59E0B;
--error: #EF4444;
--info: #3B82F6;
```

---

## Typography

### Font Families
<!-- Specify your preferred fonts -->
- **Headings**: Cal Sans, Inter, system-ui
- **Body**: Inter, system-ui, sans-serif
- **Mono**: JetBrains Mono, monospace

### Font Sizes (Desktop)
- Hero headline: 56-72px
- Section headline: 36-48px
- Card headline: 24-28px
- Body large: 18px
- Body: 16px
- Small/Caption: 14px

### Font Weights
- Headlines: 600-700 (semibold to bold)
- Body: 400-500 (regular to medium)
- Buttons: 500-600 (medium to semibold)

---

## Visual Style

### Overall Aesthetic
<!-- Choose ONE primary style -->
- [ ] Minimalist/Clean
- [x] Modern SaaS
- [ ] Bold/Vibrant
- [ ] Corporate/Enterprise
- [ ] Playful/Friendly
- [ ] Dark/Premium

### Design Elements
<!-- Check all that apply -->
- [x] Soft shadows (not harsh drop shadows)
- [x] Rounded corners (8-12px radius)
- [x] Subtle gradients
- [ ] Glassmorphism effects
- [x] Micro-animations on hover
- [ ] Bold geometric shapes
- [x] Clean whitespace
- [ ] Illustrations
- [x] Icons (Lucide/Heroicons style)

### Border Radius
```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;
```

### Shadows
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

---

## Layout Preferences

### Hero Section Style
<!-- Choose ONE -->
- [ ] Centered text with image below
- [x] Split layout (text left, image/graphic right)
- [ ] Full-width background image with overlay
- [ ] Video background
- [ ] Animated/interactive hero

### Navigation Style
- [x] Sticky header
- [x] Logo left, links center/right
- [x] CTA button in header
- [ ] Mega menu for dropdowns
- [x] Mobile hamburger menu

### Section Spacing
- Section padding: 80-120px vertical
- Content max-width: 1280px
- Card gaps: 24-32px

---

## Component Preferences

### Buttons
- Primary: Solid fill with primary color
- Secondary: Outline or ghost style
- Border radius: 8px (rounded-lg)
- Padding: 12px 24px
- Hover: Slight lift + shadow OR darken

### Cards
- Background: White with subtle border OR shadow
- Border radius: 12px
- Padding: 24-32px
- Hover: Lift effect with enhanced shadow

### Forms
- Input style: Bordered with focus ring
- Label position: Above input
- Error states: Red border + message below
- Border radius: 8px

---

## Inspiration & References

### Websites I Like
<!-- Add URLs of sites with designs you admire -->
1. https://linear.app - Clean, modern SaaS
2. https://stripe.com - Professional, trustworthy
3. https://vercel.com - Developer-focused, minimal
4.
5.

### Specific Elements I Like
<!-- Describe specific design elements you've seen and liked -->
- Linear's smooth animations and transitions
- Stripe's clear hierarchy and use of whitespace
- Vercel's dark mode implementation

### Screenshots
<!-- Reference any screenshots saved in /docs/design-references/ -->
- Save inspiration screenshots to: `/docs/design-references/`
- Name them descriptively: `hero-section-linear.png`, `pricing-stripe.png`

---

## Things to AVOID

### Don't Want
- Generic "AI aesthetic" (purple gradients, abstract blobs)
- Overly corporate/boring designs
- Cluttered layouts
- Stock photo look
- Harsh shadows
- Neon/bright colors
- Excessive animations

### Bad Examples
<!-- Optional: URLs of designs you don't like -->
1.
2.

---

## Page-Specific Notes

### Homepage
- Hero should emphasize ROI and simplicity
- Show social proof early (testimonials, logos)
- Clear value proposition in first fold
- Demo or product preview visible

### Pricing Page
- Make popular plan obvious
- Show value comparison clearly
- Include FAQ section
- Trust badges near CTA

### Dashboard
- Clean, uncluttered
- Key metrics visible at glance
- Easy navigation
- Mobile-responsive

---

## Additional Notes

<!-- Any other design preferences or constraints -->
- Must be accessible (WCAG AA minimum)
- Mobile-first responsive design
- Fast loading (optimize images)
- Support dark mode (future)
