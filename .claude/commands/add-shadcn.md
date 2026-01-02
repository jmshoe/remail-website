# Add ShadCN Component

Add a ShadCN component to the project.

## Arguments
- $ARGUMENTS: Component name (e.g., button, card, dialog)

## Step 1: Install the Component
```bash
npx shadcn@latest add $ARGUMENTS
```

## Step 2: Verify Installation
Check that the component was added to src/components/ui/

## Step 3: Customize for Brand
If needed, adjust the component to match our design brief:
- Update default colors to use our primary/accent
- Ensure border radius matches (8px for buttons, 12px for cards)
- Add/modify variants if needed

## Step 4: Usage Example
Provide an example of how to use the component:
```tsx
import { ComponentName } from '@/components/ui/component-name'

// Example usage
<ComponentName variant="default">
  Content here
</ComponentName>
```

## Available Components
Common ShadCN components:
- button, card, dialog, dropdown-menu
- input, label, select, textarea
- tabs, toast, tooltip
- avatar, badge, skeleton
- sheet, popover, command

Run `npx shadcn@latest add --help` to see all available components.
