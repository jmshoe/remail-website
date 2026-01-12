---
description: Get search volume metrics for specific keywords
argument-hint: <keyword1>, <keyword2>, ...
allowed-tools: Bash(./scripts/dataforseo.sh:*)
---

# Keyword Volume

Get search volume metrics for specific keywords using DataForSEO.

## Arguments
- `$ARGUMENTS`: Comma-separated keywords (e.g., "direct mail, postcards, mailers")

## Process

Parse the comma-separated keywords and call:

```bash
./scripts/dataforseo.sh search_volume '[{"keywords": [KEYWORD_ARRAY], "location_code": 2840, "language_code": "en"}]'
```

## Output Format

Present results in a table:

| Keyword | Monthly Volume | CPC | Competition | Trend |
|---------|----------------|-----|-------------|-------|
| ... | ... | ... | ... | ... |

Include trend indicators (↑ rising, ↓ declining, → stable) based on monthly data.
