---
description: Analyze a competitor domain for SEO insights
argument-hint: <domain.com>
allowed-tools: Bash(./scripts/dataforseo.sh:*)
---

# Competitor SEO Analysis

Analyze a competitor domain for SEO insights using DataForSEO.

## Arguments
- `$ARGUMENTS`: Domain name without protocol (e.g., "ballpointmarketing.com")

## Analysis Steps

### 1. Domain Overview
```bash
./scripts/dataforseo.sh domain_overview '[{"target": "$ARGUMENTS", "location_name": "United States", "language_code": "en"}]'
```

### 2. Top Ranked Keywords
```bash
./scripts/dataforseo.sh ranked_keywords '[{"target": "$ARGUMENTS", "location_name": "United States", "language_code": "en", "limit": 30}]'
```

## Output Format

Present a comprehensive analysis:

### Traffic Overview
- Estimated monthly traffic
- Domain authority/rank
- Total ranking keywords

### Top Keywords
| Keyword | Position | Volume | Traffic Share |
|---------|----------|--------|---------------|
| ... | ... | ... | ... |

### Opportunities for REmail
- Keywords they rank for that we don't
- Content gaps we can fill
- Quick wins (keywords where we can compete)
