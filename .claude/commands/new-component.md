# Create New Component

Create a new React component following REmail conventions.

## Arguments
- $ARGUMENTS: Component name and type (e.g., "PricingCard ui" or "CampaignList dashboard")

## Instructions

1. Determine component location based on type:
   - `ui` -> `src/components/ui/`
   - `forms` -> `src/components/forms/`
   - `marketing` -> `src/components/marketing/`
   - `dashboard` -> `src/components/dashboard/`

2. Create component file with:
   - TypeScript interface for props
   - Proper JSDoc documentation
   - Tailwind CSS styling
   - Accessibility considerations (ARIA labels, keyboard nav)

3. Component template:
```tsx
import { type FC } from 'react'

interface ComponentNameProps {
  // Define props
}

export const ComponentName: FC<ComponentNameProps> = ({ ...props }) => {
  return (
    <div>
      {/* Component content */}
    </div>
  )
}
```

4. If component needs:
   - Client interactivity -> Add 'use client' directive
   - Data fetching -> Consider Server Component
   - Form handling -> Use react-hook-form with Zod

5. Export from appropriate index file

6. Add Storybook story if applicable

7. Consider creating tests for complex logic
