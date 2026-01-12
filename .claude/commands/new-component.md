---
description: Create a new React component following REmail conventions
argument-hint: <ComponentName> <type>
allowed-tools: Write, Read, Glob
---

# Create New Component

Create a new React component following REmail conventions.

## Arguments
- `$ARGUMENTS`: Component name and type (e.g., "PricingCard ui" or "CampaignList dashboard")

## Component Types

| Type | Location | Purpose |
|------|----------|---------|
| `ui` | `src/components/ui/` | Reusable UI primitives |
| `forms` | `src/components/forms/` | Form components |
| `marketing` | `src/components/marketing/` | Marketing page sections |
| `dashboard` | `src/components/dashboard/` | Dashboard components |

## Instructions

### Step 1: Determine Location

Based on the type argument, place the component in the appropriate directory.

### Step 2: Create Component File

Use this template:

```tsx
import { type FC } from 'react'

interface ComponentNameProps {
  // Define props with TypeScript types
}

/**
 * ComponentName - Brief description of what this component does
 */
export const ComponentName: FC<ComponentNameProps> = ({ ...props }) => {
  return (
    <div>
      {/* Component content */}
    </div>
  )
}
```

### Step 3: Component Requirements

- **TypeScript**: Define interface for all props
- **Styling**: Use Tailwind CSS classes
- **Accessibility**: Include ARIA labels, keyboard navigation
- **JSDoc**: Add documentation comment

### Step 4: Directives

Add directives as needed:
- **Client interactivity** → Add `'use client'` at top
- **Data fetching** → Consider Server Component
- **Forms** → Use react-hook-form with Zod validation

### Step 5: Export

Export from appropriate index file if one exists.

## Component Template Example

```tsx
'use client'

import { type FC } from 'react'
import { cn } from '@/lib/utils'

interface PricingCardProps {
  /** Plan name displayed as heading */
  name: string
  /** Monthly price in dollars */
  price: number
  /** List of features included */
  features: string[]
  /** Whether this plan is highlighted */
  featured?: boolean
  /** Callback when CTA is clicked */
  onSelect?: () => void
}

/**
 * PricingCard - Displays a pricing tier with features and CTA
 */
export const PricingCard: FC<PricingCardProps> = ({
  name,
  price,
  features,
  featured = false,
  onSelect,
}) => {
  return (
    <div
      className={cn(
        'rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md',
        featured && 'border-primary ring-2 ring-primary'
      )}
    >
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-2 text-3xl font-bold">${price}/mo</p>
      <ul className="mt-4 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <button
        onClick={onSelect}
        className="mt-6 w-full rounded-lg bg-primary py-2 text-white hover:bg-primary/90"
      >
        Get Started
      </button>
    </div>
  )
}
```
