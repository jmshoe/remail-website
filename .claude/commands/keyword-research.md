# Keyword Research

Research keyword ideas from seed keywords using DataForSEO.

## Arguments
- $ARGUMENTS: Seed keyword to research

## Research Process

Use the DataForSEO API to find keyword opportunities:

```bash
./scripts/dataforseo.sh keyword_ideas '[{"keywords": ["$ARGUMENTS"], "location_name": "United States", "language_code": "en", "limit": 25}]'
```

Present results as a table with:
- Keyword
- Search Volume
- CPC
- Competition
- Keyword Difficulty (if available)

Highlight the best opportunities (high volume, lower competition).
