# Competitor SEO Analysis

Analyze a competitor domain for SEO insights.

## Arguments
- $ARGUMENTS: Domain name (e.g., example.com)

## Analysis Steps

Run these DataForSEO API calls:

1. **Domain Overview:**
```bash
./scripts/dataforseo.sh domain_overview '[{"target": "$ARGUMENTS", "location_name": "United States", "language_code": "en"}]'
```

2. **Top Ranked Keywords:**
```bash
./scripts/dataforseo.sh ranked_keywords '[{"target": "$ARGUMENTS", "location_name": "United States", "language_code": "en", "limit": 30}]'
```

Present:
- Domain traffic estimates
- Top keywords they rank for
- Keyword opportunities for REmail
