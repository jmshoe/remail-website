# SERP Analysis

Analyze SERP results for a target keyword.

## Arguments
- $ARGUMENTS: Target keyword to analyze

## Analysis

```bash
./scripts/dataforseo.sh serp '[{"keyword": "$ARGUMENTS", "location_name": "United States", "language_code": "en", "depth": 20}]'
```

Present:
1. Top 10 ranking URLs with titles
2. SERP features present (featured snippets, PAA, etc.)
3. Content patterns in top results
4. Opportunities for REmail to rank
