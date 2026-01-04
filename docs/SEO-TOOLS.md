# SEO Tools Documentation

This document covers the SEO tools available in the REmail project.

## Quick Start

The project uses DataForSEO API for keyword research and SEO data. The API is accessed via a bash script that reads credentials from `.env`.

### Setup

1. Add your DataForSEO credentials to `.env`:
```bash
DATAFORSEO_LOGIN="your-email@example.com"
DATAFORSEO_PASSWORD="your-api-password"
```

2. Test the setup:
```bash
./scripts/dataforseo.sh search_volume '[{"keywords": ["direct mail real estate"], "location_code": 2840, "language_code": "en"}]'
```

### Usage

**Via Claude Code (recommended):**
- Just ask about keywords, competitors, or SEO data - Claude will use the skill automatically
- Or use slash commands: `/keyword-research`, `/keyword-volume`, `/competitor-seo`, `/serp-analysis`

**Via bash script directly:**
```bash
./scripts/dataforseo.sh <endpoint> '<json_payload>'
```

## Available Endpoints

| Endpoint | Description |
|----------|-------------|
| `search_volume` | Google Ads search volume for keywords |
| `keyword_ideas` | Keyword ideas from seed keywords |
| `keyword_suggestions` | Autocomplete-style suggestions |
| `related_keywords` | Related keywords with depth parameter |
| `ranked_keywords` | Keywords a domain ranks for |
| `competitors` | Competitor domains for a given domain |
| `domain_overview` | Domain traffic and ranking metrics |
| `serp` | Live SERP results for a keyword |

## Example API Calls

### Get Search Volume
```bash
./scripts/dataforseo.sh search_volume '[{
  "keywords": ["direct mail real estate", "wholesaling postcards"],
  "location_code": 2840,
  "language_code": "en"
}]'
```

### Get Keyword Ideas
```bash
./scripts/dataforseo.sh keyword_ideas '[{
  "keywords": ["direct mail"],
  "location_name": "United States",
  "language_code": "en",
  "limit": 25
}]'
```

### Analyze Competitor
```bash
./scripts/dataforseo.sh ranked_keywords '[{
  "target": "ballpointmarketing.com",
  "location_name": "United States",
  "language_code": "en",
  "limit": 50
}]'
```

### Get SERP Results
```bash
./scripts/dataforseo.sh serp '[{
  "keyword": "direct mail for wholesalers",
  "location_name": "United States",
  "language_code": "en",
  "depth": 20
}]'
```

## Location Codes

| Location | Code |
|----------|------|
| United States | 2840 |
| United Kingdom | 2826 |
| Canada | 2124 |
| Australia | 2036 |

## Claude Code Integration

### Skill (Auto-triggered)

The `seo-research` skill is automatically activated when you discuss:
- Keyword research or keyword ideas
- Search volume for keywords
- Competitor SEO analysis
- SERP analysis
- SEO data for content planning

Location: `.claude/skills/seo-research/`

### Slash Commands

| Command | Usage |
|---------|-------|
| `/keyword-research <seed>` | Get keyword ideas from seed keywords |
| `/keyword-volume <keywords>` | Get search volume for specific keywords |
| `/competitor-seo <domain>` | Analyze a competitor domain |
| `/serp-analysis <keyword>` | Analyze SERP for a keyword |

## Related Documentation

- `SEO-GUIDE.md` - On-page SEO standards and best practices
- `TARGET-KEYWORDS.md` - Complete target keyword list for REmail
- `CLAUDE.md` - Full list of Claude Code tools and commands

---

## Troubleshooting

### API Returns Errors

1. **Verify credentials**: Check that `.env` has correct `DATAFORSEO_LOGIN` and `DATAFORSEO_PASSWORD`
2. **Test with curl**:
```bash
curl -u "email:password" https://api.dataforseo.com/v3/user
```
3. **Check account**: Verify at https://app.dataforseo.com/api-access

### MCP Server Issues (Historical)

The project previously attempted to use the DataForSEO MCP server, but encountered authentication issues. The bash script approach (`scripts/dataforseo.sh`) is now the recommended method.

If you want to try MCP:
- Use `DATAFORSEO_USERNAME` (not `DATAFORSEO_LOGIN`) for MCP compatibility
- Ensure env vars are passed to the MCP server process
- See `.claude/mcp/mcp-setup.md` for MCP configuration details
