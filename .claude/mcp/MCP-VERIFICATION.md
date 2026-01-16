# MCP Server Verification

This document verifies that all MCP servers are properly installed and configured for the REmail project.

## Quick Status Check

Run `claude mcp list` to see all connected servers.

## MCP Servers

| Server | Status | Purpose |
|--------|--------|---------|
| `dataforseo` | ✅ | SEO research, keyword data |
| `firecrawl` | ✅ | Web scraping, content extraction |
| `perplexity` | ✅ | AI-powered web search |
| `playwright` | ✅ | Browser automation |
| `chrome-devtools` | ✅ | Chrome debugging |
| `gemini-nanobanana-mcp` | ✅ | AI image generation |

## DataForSEO MCP

**Configuration:** Uses HTTP mode with DataForSEO's hosted MCP endpoint.

**Credentials Location:** `~/.claude.json` (stored in project-specific mcpServers)

**Setup:**
```bash
# Credentials are stored in ~/.claude.json under projects["/path/to/project"].mcpServers.dataforseo
# The Authorization header uses base64-encoded username:password

# To generate base64 credentials:
echo -n "your-email@example.com:your-api-password" | base64
```

**Fallback:** If MCP has issues, use the bash script: `./scripts/dataforseo.sh`

**Common Issue - 401 Error:**
If you get authentication errors, verify the credentials in `~/.claude.json` match your DataForSEO API credentials. You can check your Cursor MCP config (`~/.cursor/mcp.json`) for reference.

## Other MCP Servers

### Firecrawl
```bash
claude mcp add firecrawl -e FIRECRAWL_API_KEY=your-key -- npx -y @mseep/firecrawl-mcp
```

### Perplexity
```bash
claude mcp add perplexity -e PERPLEXITY_API_KEY=your-key -- npx -y @mseep/perplexity-mcp
```

### Playwright
```bash
claude mcp add playwright -- npx @playwright/mcp@latest
```

### Chrome DevTools
```bash
claude mcp add chrome-devtools -- npx chrome-devtools-mcp@latest
```

### Gemini Image Generation
```bash
claude mcp add gemini-nanobanana-mcp -s user -e GEMINI_API_KEY=your-key -- npx -y gemini-nanobanana-mcp@latest
```

## Troubleshooting

### DataForSEO 401 Error

The most common issue. Fix:

1. Check Cursor config for correct credentials:
   ```bash
   cat ~/.cursor/mcp.json | grep -A5 dataforseo
   ```

2. Generate the base64 auth header:
   ```bash
   echo -n "email:password" | base64
   ```

3. Update `~/.claude.json` with the correct Authorization header

4. **Restart Claude Code** for changes to take effect

### MCP Server Not Connecting

1. Check status: `claude mcp list`
2. Restart Claude Code
3. Check if npx packages need updating

## Last Verified

- Date: 2025-01-05
- All MCP servers: ✅ Connected
