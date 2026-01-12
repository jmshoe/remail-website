---
description: Analyze SERP results for a target keyword
argument-hint: <keyword>
allowed-tools: Bash(./scripts/dataforseo.sh:*)
---

# SERP Analysis

Analyze SERP results for a target keyword using DataForSEO.

## Arguments
- `$ARGUMENTS`: Target keyword to analyze (e.g., "wholesaling direct mail")

## Analysis

```bash
./scripts/dataforseo.sh serp '[{"keyword": "$ARGUMENTS", "location_name": "United States", "language_code": "en", "depth": 20}]'
```

## Output Format

### Top 10 Ranking URLs

| Position | URL | Title | Domain |
|----------|-----|-------|--------|
| ... | ... | ... | ... |

### SERP Features Present
- [ ] Featured snippet
- [ ] People Also Ask
- [ ] Local pack
- [ ] Video results
- [ ] Images
- [ ] Knowledge panel

### Content Patterns
- Average word count of top results
- Common heading structures
- Content types (guides, lists, how-tos)

### Opportunities for REmail
- Content angle recommendations
- Missing topics in current results
- Differentiation strategies
