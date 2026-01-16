# DataForSEO Setup

This document covers DataForSEO integration for SEO research.

## Primary: MCP Server

Claude Code uses DataForSEO via MCP (Model Context Protocol) for direct tool access.

### Configuration

The MCP server uses HTTP mode with DataForSEO's hosted endpoint:

**Location:** `~/.claude.json` → `projects["/path/to/project"].mcpServers.dataforseo`

```json
{
  "dataforseo": {
    "type": "http",
    "url": "https://mcp.dataforseo.com/http",
    "headers": {
      "Authorization": "Basic <base64-encoded-credentials>"
    }
  }
}
```

### Setup Steps

1. **Get your DataForSEO credentials** from [DataForSEO Dashboard](https://app.dataforseo.com/)

2. **Generate base64 auth:**
   ```bash
   echo -n "your-email@example.com:your-api-password" | base64
   ```

3. **Update Claude config** (the credentials are stored per-project in ~/.claude.json)

4. **Restart Claude Code** for changes to take effect

5. **Verify:** `claude mcp list` should show `dataforseo: ✓ Connected`

### Available MCP Tools

| Tool | Purpose |
|------|---------|
| `mcp__dataforseo__keywords_data_google_ads_search_volume` | Search volume data |
| `mcp__dataforseo__dataforseo_labs_google_keyword_ideas` | Keyword ideas |
| `mcp__dataforseo__dataforseo_labs_google_keyword_suggestions` | Autocomplete suggestions |
| `mcp__dataforseo__dataforseo_labs_google_related_keywords` | Related keywords |
| `mcp__dataforseo__dataforseo_labs_google_ranked_keywords` | Domain rankings |
| `mcp__dataforseo__dataforseo_labs_google_competitors_domain` | Competitor analysis |
| `mcp__dataforseo__dataforseo_labs_google_domain_rank_overview` | Domain overview |
| `mcp__dataforseo__serp_organic_live_advanced` | Live SERP results |
| `mcp__dataforseo__backlinks_*` | Backlink analysis tools |
| `mcp__dataforseo__content_analysis_*` | Content analysis tools |

### Troubleshooting 401 Errors

1. **Check Cursor config for reference credentials:**
   ```bash
   cat ~/.cursor/mcp.json | grep -A5 dataforseo
   ```

2. **Verify the base64 encoding matches:**
   ```bash
   echo -n "email:password" | base64
   ```

3. **Update ~/.claude.json** with correct credentials

4. **Restart Claude Code**

---

## Fallback: Bash Script

If MCP has issues, use the bash script at `scripts/dataforseo.sh`.

### Configuration

Set up `.env`:
```bash
DATAFORSEO_LOGIN="your-email@example.com"
DATAFORSEO_PASSWORD="your-api-password"
```

### Usage

```bash
./scripts/dataforseo.sh search_volume '[{"keywords": ["direct mail real estate"], "location_code": 2840, "language_code": "en"}]'
```

### Available Endpoints

| Endpoint | Purpose |
|----------|---------|
| `search_volume` | Google Ads search volume |
| `keyword_ideas` | Keyword ideas from seeds |
| `keyword_suggestions` | Autocomplete suggestions |
| `related_keywords` | Related keywords |
| `ranked_keywords` | Domain rankings |
| `competitors` | Competitor domains |
| `domain_overview` | Domain metrics |
| `serp` | Live SERP results |

---

## Fire Crawl MCP (Web Scraping & Research)

Fire Crawl MCP provides web scraping, crawling, and content extraction capabilities.

### Setup

1. **Get API Key**: Visit [Fire Crawl API Keys](https://firecrawl.dev/app/api-keys)

2. **Add MCP Server**:
```bash
claude mcp add firecrawl -e FIRECRAWL_API_KEY=your-api-key -- npx -y firecrawl-mcp
```

3. **Verify**:
```bash
claude mcp list
```

**Full documentation**: See `.claude/mcp/firecrawl-mcp-setup.md`

### Use Cases
- Scrape competitor websites for SEO research
- Extract content and pricing information
- Crawl sites to map structure
- Deep research on topics
- Extract structured data from web pages

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
