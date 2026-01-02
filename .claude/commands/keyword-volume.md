# Keyword Volume

Get search volume metrics for specific keywords.

## Arguments
- $ARGUMENTS: Comma-separated keywords (e.g., keyword1, keyword2)

## Process

Parse the comma-separated keywords and call:

```bash
./scripts/dataforseo.sh search_volume '[{"keywords": [KEYWORD_ARRAY], "location_code": 2840, "language_code": "en"}]'
```

Present results in a table:
| Keyword | Monthly Volume | CPC | Competition | Trend |
