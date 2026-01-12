---
description: Research keyword ideas from seed keywords using DataForSEO
argument-hint: <seed-keyword>
allowed-tools: Bash(./scripts/dataforseo.sh:*)
---

# Keyword Research

Research keyword ideas from seed keywords using DataForSEO.

## Arguments
- `$ARGUMENTS`: Seed keyword to research (e.g., "direct mail", "skip tracing")

## Research Process

Use the DataForSEO API to find keyword opportunities:

```bash
./scripts/dataforseo.sh keyword_ideas '[{"keywords": ["$ARGUMENTS"], "location_name": "United States", "language_code": "en", "limit": 25}]'
```

## Output Format

Present results as a table with:

| Keyword | Search Volume | CPC | Competition | Difficulty |
|---------|---------------|-----|-------------|------------|
| ... | ... | ... | ... | ... |

**Highlight the best opportunities:**
- High volume (1,000+) with lower competition
- Keywords with commercial intent (higher CPC)
- Long-tail variations relevant to real estate investors
