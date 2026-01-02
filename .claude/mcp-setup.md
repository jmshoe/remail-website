# SEO Tools Setup

This document covers the SEO tools available in this project.

## Current Setup: Direct API via Bash Script

The DataForSEO API is accessed via `scripts/dataforseo.sh`, which reads credentials from `.env`.

### Configuration

1. **Set up `.env`:**
```bash
DATAFORSEO_LOGIN="your-email@example.com"
DATAFORSEO_PASSWORD="your-api-password"
DATAFORSEO_BASE64="base64-encoded-credentials"  # optional
```

2. **Get your base64 credentials:**
```bash
echo -n "email:password" | base64
```

3. **Test the setup:**
```bash
./scripts/dataforseo.sh search_volume '[{"keywords": ["test"], "location_code": 2840, "language_code": "en"}]'
```

### Available Endpoints

| Endpoint | Purpose |
|----------|---------|
| `search_volume` | Google Ads search volume data |
| `keyword_ideas` | Keyword ideas from seed keywords |
| `keyword_suggestions` | Autocomplete-style suggestions |
| `related_keywords` | Related keywords with depth |
| `ranked_keywords` | Keywords a domain ranks for |
| `competitors` | Competitor domain discovery |
| `domain_overview` | Domain traffic/ranking metrics |
| `serp` | Live SERP results |

### Usage Examples

**Search Volume:**
```bash
./scripts/dataforseo.sh search_volume '[{"keywords": ["direct mail real estate", "wholesaling postcards"], "location_code": 2840, "language_code": "en"}]'
```

**Keyword Ideas:**
```bash
./scripts/dataforseo.sh keyword_ideas '[{"keywords": ["direct mail"], "location_name": "United States", "language_code": "en", "limit": 20}]'
```

**Competitor Analysis:**
```bash
./scripts/dataforseo.sh ranked_keywords '[{"target": "competitor.com", "location_name": "United States", "language_code": "en", "limit": 50}]'
```

---

## Alternative: MCP Server (Reference)

The project also has DataForSEO MCP server configured, but it may have authentication issues depending on your environment.

### MCP Configuration

The MCP server is configured in `.claude/settings.json`. If using MCP:

1. Ensure credentials are passed via environment variables or the `env` block
2. Use `DATAFORSEO_USERNAME` (not `DATAFORSEO_LOGIN`) for MCP compatibility
3. Restart Claude Code after configuration changes

### Troubleshooting MCP Auth

If you see 401 errors with MCP:
- Verify credentials work via curl (see `scripts/test-dataforseo-api.js`)
- Check that env vars are being passed to the MCP server process
- Consider using the bash script approach instead

---

## Other SEO MCPs (Optional)

### SEMrush
```bash
claude mcp add semrush --env SEMRUSH_API_KEY=your_key
```

### Ahrefs
```bash
claude mcp add ahrefs --env AHREFS_API_KEY=your_key
```

### Google Search Console
```bash
claude mcp add google-search-console
```

### Brave Search (Free)
```bash
claude mcp add brave-search --env BRAVE_API_KEY=your_key
```

---

## Skills & Commands

This project includes Claude Code skills and commands for SEO:

### Skill: `seo-research`
Auto-triggered when discussing keywords, competitors, or SEO data.
Location: `.claude/skills/seo-research/`

### Commands
| Command | Description |
|---------|-------------|
| `/keyword-research <seed>` | Get keyword ideas |
| `/keyword-volume <keywords>` | Get search volume |
| `/competitor-seo <domain>` | Analyze competitor |
| `/serp-analysis <keyword>` | Analyze SERP |

See `CLAUDE.md` for full command list.
