# Vapi Chat Widget Integration

This document describes how the Vapi AI chat widget is integrated into the REmail website.

## Overview

REmail uses [Vapi](https://vapi.ai) to provide an AI-powered chat widget that helps visitors learn about direct mail services for real estate investors. The widget supports both text chat and voice conversations.

## Implementation

### Component Location

```
src/components/chat/VapiWidget.tsx
```

### How It Works

The Vapi widget is loaded via a UMD script from unpkg CDN and initialized using the `WidgetLoader` class. The implementation uses data attributes for configuration, which the script auto-detects and uses to render the widget.

**Script URL:**
```
https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js
```

### Initialization Flow

1. React component mounts
2. A container div is created with `data-client-widget="VapiWidget"` and configuration attributes
3. The Vapi UMD script is loaded (if not already present)
4. On script load, `WidgetLoader` is instantiated to initialize the widget
5. The widget renders as a floating chat button in the bottom-right corner

## Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_VAPI_PUBLIC_KEY` | Vapi public API key | Yes |

Add to `.env`:
```bash
NEXT_PUBLIC_VAPI_PUBLIC_KEY=your-public-key-here
```

### Assistant ID

The assistant ID is configured in the component:
```typescript
const assistantId = '01f448dc-7d01-4676-8b45-7ec8ce847514'
```

To use a different assistant, update this value in `VapiWidget.tsx`.

## Styling & Branding

The widget is styled to match REmail's brand guidelines:

| Property | Value | Description |
|----------|-------|-------------|
| `theme` | `light` | Light theme for professional look |
| `size` | `full` | Full-size chat interface |
| `radius` | `medium` | Moderate border radius |
| `accent-color` | `#2563EB` | REmail primary blue |
| `button-base-color` | `#2563EB` | Blue chat button |
| `button-accent-color` | `#FFFFFF` | White icon on button |

### Button Icon Styling

The Vapi widget includes a built-in SVG spinner/loading icon on the chat button. By default, this icon uses the brand color (`#2563EB`), which can be invisible on a blue button background.

**CSS Override (in `src/styles/globals.css`):**

```css
/* Change the built-in SVG icon from blue to white for visibility on blue button */
#vapi-widget-container svg rect,
#vapi-widget-container svg circle {
  fill: #ffffff !important;
  stroke: #ffffff !important;
}
```

**To change the icon color:**
1. Edit `src/styles/globals.css`
2. Find the `#vapi-widget-container svg` rules
3. Update the `fill` and `stroke` values to your desired color
4. Use `!important` to override the widget's inline styles

### Custom Labels

| Label | Value |
|-------|-------|
| `main-label` | "Chat with REmail" |
| `empty-chat-message` | "Hi! I'm here to help you grow your real estate business with direct mail..." |
| `empty-voice-message` | "Click to start a voice conversation with our team" |
| `start-button-text` | "Start Voice Chat" |
| `end-button-text` | "End Call" |

## Available Configuration Options

### Mode & Theme

| Attribute | Values | Default |
|-----------|--------|---------|
| `data-mode` | `chat`, `voice` | `chat` |
| `data-theme` | `light`, `dark` | `light` |
| `data-size` | `tiny`, `compact`, `full` | `full` |
| `data-radius` | `none`, `small`, `medium`, `large` | `medium` |

### Colors

| Attribute | Description |
|-----------|-------------|
| `data-base-color` | Main background color |
| `data-accent-color` | Primary accent color |
| `data-button-base-color` | Floating button background |
| `data-button-accent-color` | Button icon/text color |

### Labels

| Attribute | Description |
|-----------|-------------|
| `data-main-label` | Header text in chat window |
| `data-start-button-text` | Voice start button text |
| `data-end-button-text` | Voice end button text |
| `data-empty-chat-message` | Placeholder when chat is empty |
| `data-empty-voice-message` | Placeholder for voice mode |

## Usage in Layout

The widget is included in the marketing layout to appear on all public pages:

```tsx
// src/app/(marketing)/layout.tsx
import { VapiWidget } from '@/components/chat/VapiWidget'

export default function MarketingLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <VapiWidget />
    </>
  )
}
```

## Troubleshooting

### Widget Not Appearing

1. **Check environment variable**: Ensure `NEXT_PUBLIC_VAPI_PUBLIC_KEY` is set in `.env`
2. **Check console**: Look for `[VapiWidget]` prefixed logs
3. **Verify assistant ID**: Ensure the assistant exists in your Vapi dashboard

### Widget Not Responding

1. **Check Vapi dashboard**: Verify the assistant is active and configured
2. **Check browser console**: Look for API errors
3. **Test assistant**: Use Vapi's built-in testing tools first

### Styling Issues

1. **Clear cache**: Hard refresh (Cmd+Shift+R) to reload the script
2. **Check data attributes**: Ensure all attribute names use kebab-case (`data-accent-color`, not `data-accentColor`)

## Alternative Initialization Methods

### Method 1: Data Attributes (Current Implementation)

```html
<div
  data-client-widget="VapiWidget"
  data-public-key="your-key"
  data-assistant-id="your-assistant"
  data-mode="chat"
></div>
```

### Method 2: JSON Props

```html
<div
  data-client-widget="VapiWidget"
  data-props='{"publicKey":"your-key","assistantId":"your-assistant","mode":"chat"}'
></div>
```

### Method 3: Custom Element

```html
<vapi-widget
  public-key="your-key"
  assistant-id="your-assistant"
  mode="chat"
></vapi-widget>
```

## Resources

- [Vapi Documentation](https://docs.vapi.ai)
- [Vapi Chat Widget Docs](https://docs.vapi.ai/chat/web-widget)
- [Vapi Dashboard](https://dashboard.vapi.ai)
- [Client SDK React GitHub](https://github.com/VapiAI/client-sdk-react)

## Updating the Widget

To update widget configuration:

1. Edit `src/components/chat/VapiWidget.tsx`
2. Modify the data attributes in the `widgetDiv` setup
3. For brand colors, update the `BRAND` constant at the top of the file
4. Test locally before deploying
