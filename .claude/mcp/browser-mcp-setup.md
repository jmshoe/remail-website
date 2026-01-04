# Browser MCP (Chromium) Setup

## Overview

The project uses **Chromium-based MCP (Model Context Protocol) tools** to enable browser preview and interaction capabilities. These tools allow Claude to navigate, screenshot, and interact with your website during development.

## Status: ✅ Already Enabled

The browser MCP tools are **already working** and require no additional setup. They're automatically available through Cursor's built-in browser extension MCP servers.

## Available MCP Servers

1. **cursor-browser-extension** - Primary Chromium browser interface
2. **cursor-ide-browser** - Alternative browser interface

Both servers provide the same capabilities and are automatically enabled.

## Configuration

The browser tools are enabled via your project settings:

**`.claude/settings.local.json`:**
```json
{
  "enableAllProjectMcpServers": true
}
```

This setting enables all MCP servers, including the browser tools. **No additional configuration needed!**

## Available Tools

### Navigation
- `browser_navigate` - Navigate to any URL
- `browser_navigate_back` - Go back in history
- `browser_wait_for` - Wait for content to load

### Screenshots & Inspection
- `browser_take_screenshot` - Capture page/element screenshots
- `browser_snapshot` - Get accessibility snapshot
- `browser_resize` - Resize browser window

### Interaction
- `browser_click` - Click buttons/links
- `browser_type` - Type into form fields
- `browser_fill_form` - Fill multiple form fields
- `browser_select_option` - Select dropdown options
- `browser_hover` - Hover over elements
- `browser_drag` - Drag and drop

### Debugging
- `browser_console_messages` - View console logs
- `browser_network_requests` - Check network activity
- `browser_evaluate` - Execute JavaScript

## Usage Examples

### Basic Preview
```
"Navigate to localhost:3000 and show me the homepage"
```

### Screenshot
```
"Take a full page screenshot of the pricing page"
```

### Form Testing
```
"Go to /contact and fill out the contact form"
```

### Responsive Testing
```
"Resize the browser to 375px width and show me the mobile view"
```

### Debugging
```
"Navigate to /pricing and check for console errors"
```

## Quick Start

1. **Start your dev server:**
   ```bash
   npm run dev
   ```

2. **Ask Claude to use browser tools:**
   - "Preview the homepage"
   - "Test the contact form"
   - "Show me mobile view"
   - "Check for errors on /pricing"

## Troubleshooting

### Port Conflicts
If port 3000 is in use:
```bash
# Check what's using it
lsof -ti:3000

# Kill the process
kill -9 $(lsof -ti:3000)

# Or use different port
PORT=3001 npm run dev
```

### Browser Won't Connect
- Ensure dev server is running
- Verify the URL is correct
- Check for firewall/security restrictions

### Screenshots Not Working
- Wait for page to fully load
- Check for JavaScript errors
- Verify page is accessible

## Integration with Development Workflow

### Before Committing
```
"Test the contact form to make sure it works before I commit"
```

### During Design Iteration
```
"Show me how the hero section looks on mobile"
```

### Debugging Issues
```
"Navigate to /pricing and check the console for errors"
```

### Testing New Features
```
"Go to /services and test the new feature I just added"
```

## Advanced Usage

### Multi-Step Testing
```
"Navigate to localhost:3000, click the 'Get Started' button, 
fill out the form, and take a screenshot of the result"
```

### Responsive Breakpoints
```
"Show me the homepage at 375px, 768px, and 1024px widths"
```

### Error Checking
```
"Go to /contact, check the console and network requests, 
and verify the form submission works"
```

## Notes

- Browser tools work with **any URL** (local or remote)
- Screenshots are saved temporarily
- All interactions are logged for debugging
- Browser state persists during the conversation

## Related Documentation

- `.claude/mcp/mcp-setup.md` - General MCP setup
- `CLAUDE.md` - Project documentation
- `.claude/browser-preview.md` - Detailed browser tools guide (if exists)
