# White Space Solutions - Direct Mail Automation Service Pricing

## Overview

White Space Solutions offers direct mail automation services for real estate investors (wholesalers and fix-and-flip clients). Pricing follows a tiered subscription model with three packages differentiated by contract term, monthly management cost, and included services.

**Core Value Proposition:** No monthly fees on mail volume. Pay only for what you send. Volume discounts available.

**Guarantee:** 90 Day Contract Guarantee — If you don't get a contract in your first 90 days, you get your money back.

---

## Pricing Tiers

### Tier 1: Deal Flow Foundation

**Positioning:** Entry-level package for getting started with direct mail automation.

| Attribute | Value |
|-----------|-------|
| Term | Monthly |
| Accelerated 2-Week Setup | $999 |
| Monthly Management | $1,999 |
| **Total Today** | **$2,998** |
| Savings | — |

**Included Features:**
- Unlimited mail volume
- 4 top performing creatives
- Mail volume + spend reporting
- Training included

**Add-on Services (not included):**
- CRM Integration: $500
- ROAS Reporting: $1,250
- Mail Forecasting: $1,000
- Offer Price Enrichment API: $0.02/record

---

### Tier 2: Contract Catalyst

**Positioning:** Most popular option. Best for active investors sending 500+ pieces/month.

| Attribute | Value |
|-----------|-------|
| Term | 6 Month |
| Accelerated 2-Week Setup | ~~$999~~ Included |
| Monthly Management | $1,699/month |
| **Total Today** | **$10,194** |
| Savings | $2,799 off setup + management |
| Total Savings (with services) | $3,299 |

**Included Features:**
- Everything in Deal Flow Foundation
- Training included
- CRM Integration included
- ROAS Reporting: $1,250 (discounted add-on)
- Mail Forecasting: $1,000 (discounted add-on)
- Offer Price Enrichment API: $0.02/record

---

### Tier 3: Market Maximizer

**Positioning:** Premium package for teams and high-volume senders (5,000+ pieces/month).

| Attribute | Value |
|-----------|-------|
| Term | 12 Month |
| Accelerated 2-Week Setup | ~~$999~~ Included |
| Monthly Management | $1,499/month |
| **Total Today** | **$17,988** |
| Savings | $6,999 off setup + management |
| Total Savings (with services) | $10,749 |

**Included Features:**
- Everything in Contract Catalyst
- Training included
- CRM Integration included
- ROAS Reporting included
- Mail Forecasting included
- Offer Price Enrichment API: $0.01/record (50% discount)

---

## Per Mail Piece Pricing

All tiers share the same per-piece pricing:

| Mail Type | Price |
|-----------|-------|
| Postcards | $0.60 |
| Letters | $0.65 |
| Check Letter Snap Pack | $0.67 |
| Handwritten | $0.90 |

**Note:** Direct mail costs increase July 13th, 2025. All cost increases will pass through to clients.

---

## Optional Add-On Services

| Service | Description | Price |
|---------|-------------|-------|
| Skip Tracing | Phone, email, and address lookup | $0.08/record |
| List Building | Absentee, pre-foreclosure, probate lists | $0.03/record |
| Custom Design | Professional template design | $99/design |

---

## Service Inclusion Matrix

| Service | Deal Flow Foundation | Contract Catalyst | Market Maximizer |
|---------|---------------------|-------------------|------------------|
| Unlimited Mail Volume | ✓ | ✓ | ✓ |
| 4 Top Performing Creatives | ✓ | ✓ | ✓ |
| Mail Volume + Spend Reporting | ✓ | ✓ | ✓ |
| Training | ✓ Included | ✓ Included | ✓ Included |
| Setup Fee Waived | ✗ | ✓ | ✓ |
| CRM Integration | $500 | ✓ Included | ✓ Included |
| ROAS Reporting | $1,250 | $1,250 | ✓ Included |
| Mail Forecasting | $1,000 | $1,000 | ✓ Included |
| Offer Price Enrichment API | $0.02/rec | $0.02/rec | $0.01/rec |
| Priority Support | ✗ | ✓ | ✓ |
| Dedicated Account Manager | ✗ | ✗ | ✓ |

---

## UI/UX Design Notes

### Pricing Card Layout

**Card Structure (3 columns):**
1. **Left Card (Deal Flow Foundation):** Basic styling, "Start Free Trial" or "Get Started" CTA
2. **Center Card (Contract Catalyst):** Highlighted/elevated with "Most Popular" badge, filled primary CTA button
3. **Right Card (Market Maximizer):** Premium styling, "Contact Sales" CTA

**Visual Hierarchy:**
- Tier name as card header
- Tagline/description below name
- Large price display (total today or monthly equivalent)
- Checkmark list of included features
- CTA button at bottom

**Color Scheme (from mockup):**
- Primary accent: Blue (#3B82F6 or similar)
- Checkmarks: Teal/cyan (#14B8A6 or similar)
- Most Popular badge: Blue background with white text
- Card borders: Light gray, with blue border for highlighted tier

### Sections to Include

1. **Hero Section:** "Simple, Transparent Pricing" headline with subtext about no monthly fees
2. **Pricing Cards:** Three-column layout with tier comparison
3. **Per Mail Piece Pricing:** Secondary section or expandable details
4. **Optional Add-ons:** Three-card layout for Skip Tracing, List Building, Custom Design
5. **FAQ Section:** "Have questions about pricing?" with View FAQ and Contact Sales buttons
6. **Guarantee Badge:** 90-day contract guarantee callout

---

## Data Structure for Implementation

```json
{
  "tiers": [
    {
      "id": "deal-flow-foundation",
      "name": "Deal Flow Foundation",
      "tagline": "Perfect for getting started with direct mail",
      "term": "Monthly",
      "termMonths": 1,
      "setupFee": 999,
      "setupFeeWaived": false,
      "monthlyManagement": 1999,
      "totalToday": 2998,
      "savings": 0,
      "totalSavings": 0,
      "highlighted": false,
      "ctaText": "Get Started",
      "ctaStyle": "outline"
    },
    {
      "id": "contract-catalyst",
      "name": "Contract Catalyst",
      "tagline": "Best for active investors sending 500+ pieces/month",
      "term": "6 Month",
      "termMonths": 6,
      "setupFee": 999,
      "setupFeeWaived": true,
      "monthlyManagement": 1699,
      "totalToday": 10194,
      "savings": 2799,
      "totalSavings": 3299,
      "highlighted": true,
      "badge": "Most Popular",
      "ctaText": "Start Free Trial",
      "ctaStyle": "filled"
    },
    {
      "id": "market-maximizer",
      "name": "Market Maximizer",
      "tagline": "For teams sending 5,000+ pieces/month",
      "term": "12 Month",
      "termMonths": 12,
      "setupFee": 999,
      "setupFeeWaived": true,
      "monthlyManagement": 1499,
      "totalToday": 17988,
      "savings": 6999,
      "totalSavings": 10749,
      "highlighted": false,
      "ctaText": "Contact Sales",
      "ctaStyle": "outline"
    }
  ],
  "mailPricing": {
    "postcards": 0.60,
    "letters": 0.65,
    "checkLetterSnapPack": 0.67,
    "handwritten": 0.90
  },
  "addOns": [
    {
      "id": "skip-tracing",
      "name": "Skip Tracing",
      "price": 0.08,
      "unit": "record",
      "description": "Phone, email, and address lookup"
    },
    {
      "id": "list-building",
      "name": "List Building",
      "price": 0.03,
      "unit": "record",
      "description": "Absentee, pre-foreclosure, probate lists"
    },
    {
      "id": "custom-design",
      "name": "Custom Design",
      "price": 99,
      "unit": "design",
      "description": "Professional template design"
    }
  ],
  "guarantee": {
    "days": 90,
    "description": "If you don't get a contract in your 1st 90 days, you get your money back"
  }
}
```

---

## Notes for AI Implementation

1. **Price Formatting:** Display large prices without decimals (e.g., "$2,998" not "$2,998.00"), but per-piece prices with two decimals (e.g., "$0.60")

2. **Strikethrough Pricing:** Show original setup fee with strikethrough for Contract Catalyst and Market Maximizer tiers

3. **Savings Highlight:** Display savings prominently, possibly in a colored badge or highlighted text

4. **Feature Comparison:** Use checkmarks (✓) for included features, price for add-ons, and X or dash for not available

5. **Responsive Design:** Stack cards vertically on mobile, keep Contract Catalyst prominent

6. **Accessibility:** Ensure sufficient color contrast, proper heading hierarchy, and descriptive alt text for any icons