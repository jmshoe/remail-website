---
name: seo-research
description: Research keywords, analyze competitors, and get SEO data using the DataForSEO API. Use when the user asks about keyword research, search volume, competitor analysis, SERP analysis, or SEO opportunities for REmail.
allowed-tools: Bash, Read, Write, Glob, Grep
---

# SEO Research Skill

This skill provides access to DataForSEO API for keyword research and competitive analysis.

## When to Use This Skill

Automatically use this skill when the user:
- Asks about keyword research or keyword ideas
- Wants to check search volume for keywords
- Asks about competitor SEO analysis
- Wants to analyze SERPs for specific queries
- Needs SEO data for content planning
- Mentions DataForSEO or SEO metrics

## How to Use the DataForSEO API

Use the helper script at `scripts/dataforseo.sh` to call the API:

```bash
./scripts/dataforseo.sh <endpoint> '<json_payload>'
```

### Available Endpoints

| Endpoint | Purpose | Key Parameters |
|----------|---------|----------------|
| `search_volume` | Get Google Ads search volume | `keywords`, `location_code` |
| `keyword_ideas` | Get keyword ideas from seeds | `keywords`, `limit` |
| `keyword_suggestions` | Autocomplete-style suggestions | `keyword`, `limit` |
| `related_keywords` | Find related keywords | `keyword`, `depth`, `limit` |
| `ranked_keywords` | Keywords a domain ranks for | `target`, `limit` |
| `competitors` | Find competitor domains | `target`, `limit` |
| `domain_overview` | Domain traffic/ranking overview | `target` |
| `serp` | Live SERP results | `keyword`, `depth` |

### Example API Calls

**Search Volume:**
```bash
./scripts/dataforseo.sh search_volume '[{"keywords": ["direct mail real estate", "wholesaling postcards"], "location_code": 2840, "language_code": "en"}]'
```

**Keyword Ideas:**
```bash
./scripts/dataforseo.sh keyword_ideas '[{"keywords": ["direct mail"], "location_name": "United States", "language_code": "en", "limit": 20}]'
```

**Competitor Keywords:**
```bash
./scripts/dataforseo.sh ranked_keywords '[{"target": "ballpointmarketing.com", "location_name": "United States", "language_code": "en", "limit": 30}]'
```

**SERP Analysis:**
```bash
./scripts/dataforseo.sh serp '[{"keyword": "direct mail for wholesalers", "location_name": "United States", "language_code": "en", "depth": 20}]'
```

## Presenting Results

Always format results in a clear, actionable way:

1. **Tables** for keyword lists with metrics
2. **Highlight opportunities** (high volume + low competition)
3. **Group by intent** (informational, commercial, transactional)
4. **Provide recommendations** based on REmail's target market

## REmail Context

REmail targets real estate investors:
- Wholesalers
- Fix-and-flippers
- Buy-and-hold investors

Primary keywords to track:
- "direct mail for real estate investors"
- "real estate direct mail automation"
- "wholesaling direct mail"
- "motivated seller letters"

See `seo-guidelines.md` for full keyword strategy.
