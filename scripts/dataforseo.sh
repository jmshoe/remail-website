#!/bin/bash
# DataForSEO API Helper Script
# Usage: ./dataforseo.sh <endpoint> <json_payload>

set -e

# Load credentials from .env file
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

if [ -f "$PROJECT_ROOT/.env" ]; then
  export $(grep -E '^DATAFORSEO_' "$PROJECT_ROOT/.env" | xargs)
fi

# Use pre-computed base64 or compute it
if [ -n "$DATAFORSEO_BASE64" ]; then
  AUTH="$DATAFORSEO_BASE64"
else
  AUTH=$(echo -n "${DATAFORSEO_LOGIN}:${DATAFORSEO_PASSWORD}" | base64)
fi

if [ -z "$AUTH" ]; then
  echo "Error: DataForSEO credentials not found in .env" >&2
  exit 1
fi

ENDPOINT="$1"
PAYLOAD="$2"

if [ -z "$ENDPOINT" ] || [ -z "$PAYLOAD" ]; then
  echo "Usage: $0 <endpoint> '<json_payload>'"
  echo ""
  echo "Endpoints:"
  echo "  keyword_ideas          - Get keyword ideas from seed keywords"
  echo "  keyword_suggestions    - Get autocomplete-style suggestions"
  echo "  keyword_overview       - Get metrics for specific keywords"
  echo "  search_volume          - Get Google Ads search volume"
  echo "  ranked_keywords        - Get keywords a domain ranks for"
  echo "  competitors            - Get competitor domains"
  echo "  serp                   - Get SERP results for a keyword"
  echo "  domain_overview        - Get domain rank overview"
  exit 1
fi

# Map friendly endpoint names to API paths
case "$ENDPOINT" in
  keyword_ideas)
    API_PATH="/v3/dataforseo_labs/google/keyword_ideas/live"
    ;;
  keyword_suggestions)
    API_PATH="/v3/dataforseo_labs/google/keyword_suggestions/live"
    ;;
  keyword_overview)
    API_PATH="/v3/dataforseo_labs/google/bulk_keyword_difficulty/live"
    ;;
  search_volume)
    API_PATH="/v3/keywords_data/google_ads/search_volume/live"
    ;;
  ranked_keywords)
    API_PATH="/v3/dataforseo_labs/google/ranked_keywords/live"
    ;;
  competitors)
    API_PATH="/v3/dataforseo_labs/google/competitors_domain/live"
    ;;
  serp)
    API_PATH="/v3/serp/google/organic/live/advanced"
    ;;
  domain_overview)
    API_PATH="/v3/dataforseo_labs/google/domain_rank_overview/live"
    ;;
  related_keywords)
    API_PATH="/v3/dataforseo_labs/google/related_keywords/live"
    ;;
  *)
    # Allow direct API paths
    API_PATH="$ENDPOINT"
    ;;
esac

# Make the API request
curl -s -X POST "https://api.dataforseo.com${API_PATH}" \
  -H "Authorization: Basic ${AUTH}" \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD"
