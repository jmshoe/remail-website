#!/bin/bash
# Google Search Console API Helper Script
# Uses Application Default Credentials (ADC) from gcloud
#
# Usage:
#   ./gsc.sh list-sites
#   ./gsc.sh search-analytics [start_date] [end_date] [dimension] [row_limit]
#   ./gsc.sh top-queries [days_back] [limit]
#   ./gsc.sh top-pages [days_back] [limit]
#   ./gsc.sh quick-wins [days_back]
#   ./gsc.sh inspect-url <url>

set -e

# Configuration
SITE_URL="https://www.remaildirect.com/"
QUOTA_PROJECT="white-space-solutions"
API_BASE="https://searchconsole.googleapis.com/webmasters/v3"

# Get access token
get_token() {
    gcloud auth application-default print-access-token 2>/dev/null
}

# Make API request
api_request() {
    local method="$1"
    local endpoint="$2"
    local data="$3"

    local token=$(get_token)

    if [ "$method" = "GET" ]; then
        curl -s -H "Authorization: Bearer $token" \
             -H "x-goog-user-project: $QUOTA_PROJECT" \
             "${API_BASE}${endpoint}"
    else
        curl -s -X POST \
             -H "Authorization: Bearer $token" \
             -H "x-goog-user-project: $QUOTA_PROJECT" \
             -H "Content-Type: application/json" \
             "${API_BASE}${endpoint}" \
             -d "$data"
    fi
}

# Calculate date N days ago
days_ago() {
    local days=$1
    if [[ "$OSTYPE" == "darwin"* ]]; then
        date -v-${days}d +%Y-%m-%d
    else
        date -d "$days days ago" +%Y-%m-%d
    fi
}

# List all sites
list_sites() {
    echo "=== Google Search Console Sites ===" >&2
    api_request "GET" "/sites" | jq -r '.siteEntry[] | "\(.permissionLevel): \(.siteUrl)"'
}

# Search Analytics query
search_analytics() {
    local start_date="${1:-$(days_ago 30)}"
    local end_date="${2:-$(days_ago 1)}"
    local dimension="${3:-query}"
    local row_limit="${4:-25}"

    echo "=== Search Analytics ($dimension) ===" >&2
    echo "Date range: $start_date to $end_date" >&2
    echo "" >&2

    local encoded_site=$(echo "$SITE_URL" | sed 's/:/%3A/g' | sed 's/\//%2F/g')

    api_request "POST" "/sites/${encoded_site}/searchAnalytics/query" "{
        \"startDate\": \"$start_date\",
        \"endDate\": \"$end_date\",
        \"dimensions\": [\"$dimension\"],
        \"rowLimit\": $row_limit
    }"
}

# Top queries (formatted)
top_queries() {
    local days="${1:-30}"
    local limit="${2:-25}"
    local start_date=$(days_ago $days)
    local end_date=$(days_ago 1)

    echo "=== Top Queries (Last $days days) ===" >&2
    echo "" >&2

    search_analytics "$start_date" "$end_date" "query" "$limit" | jq -r '
        .rows // [] |
        sort_by(-.clicks) |
        .[] |
        "Clicks: \(.clicks | tostring | ("     " + .)[-5:]) | Impr: \(.impressions | tostring | ("      " + .)[-6:]) | Pos: \(.position | floor) | CTR: \((.ctr * 100 | floor))% | \(.keys[0])"
    '
}

# Top pages (formatted)
top_pages() {
    local days="${1:-30}"
    local limit="${2:-15}"
    local start_date=$(days_ago $days)
    local end_date=$(days_ago 1)

    echo "=== Top Pages (Last $days days) ===" >&2
    echo "" >&2

    search_analytics "$start_date" "$end_date" "page" "$limit" | jq -r '
        .rows // [] |
        sort_by(-.clicks) |
        .[] |
        "Clicks: \(.clicks | tostring | ("     " + .)[-5:]) | Impr: \(.impressions | tostring | ("      " + .)[-6:]) | Pos: \(.position | floor) | \(.keys[0] | gsub("https://remaildirect.com"; "") | gsub("https://www.remaildirect.com"; ""))"
    '
}

# Quick wins - keywords ranking 5-20 with good impressions
quick_wins() {
    local days="${1:-30}"
    local start_date=$(days_ago $days)
    local end_date=$(days_ago 1)

    echo "=== Quick Win Opportunities ===" >&2
    echo "Keywords ranking 5-20 with 10+ impressions" >&2
    echo "" >&2

    local encoded_site=$(echo "$SITE_URL" | sed 's/:/%3A/g' | sed 's/\//%2F/g')

    api_request "POST" "/sites/${encoded_site}/searchAnalytics/query" "{
        \"startDate\": \"$start_date\",
        \"endDate\": \"$end_date\",
        \"dimensions\": [\"query\"],
        \"rowLimit\": 500
    }" | jq -r '
        .rows // [] |
        map(select(.position >= 5 and .position <= 20 and .impressions >= 10)) |
        sort_by(.position) |
        .[] |
        "Pos: \(.position | floor | tostring | ("  " + .)[-2:]) | Impr: \(.impressions | tostring | ("     " + .)[-5:]) | \(.keys[0])"
    '
}

# URL inspection
inspect_url() {
    local url="$1"
    if [ -z "$url" ]; then
        echo "Usage: ./gsc.sh inspect-url <url>" >&2
        exit 1
    fi

    echo "=== URL Inspection ===" >&2
    echo "URL: $url" >&2
    echo "" >&2

    local token=$(get_token)

    curl -s -X POST \
         -H "Authorization: Bearer $token" \
         -H "x-goog-user-project: $QUOTA_PROJECT" \
         -H "Content-Type: application/json" \
         "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect" \
         -d "{
             \"inspectionUrl\": \"$url\",
             \"siteUrl\": \"$SITE_URL\"
         }"
}

# Main command router
case "${1:-help}" in
    list-sites)
        list_sites
        ;;
    search-analytics)
        search_analytics "$2" "$3" "$4" "$5"
        ;;
    top-queries)
        top_queries "$2" "$3"
        ;;
    top-pages)
        top_pages "$2" "$3"
        ;;
    quick-wins)
        quick_wins "$2"
        ;;
    inspect-url)
        inspect_url "$2"
        ;;
    help|*)
        echo "Google Search Console Helper for REmail"
        echo ""
        echo "Usage: ./gsc.sh <command> [options]"
        echo ""
        echo "Commands:"
        echo "  list-sites                          List all GSC sites"
        echo "  top-queries [days] [limit]          Top queries (default: 30 days, 25 results)"
        echo "  top-pages [days] [limit]            Top pages (default: 30 days, 15 results)"
        echo "  quick-wins [days]                   Keywords ranking 5-20 (opportunity zone)"
        echo "  search-analytics [start] [end] [dim] [limit]  Raw search analytics"
        echo "  inspect-url <url>                   Inspect URL index status"
        echo ""
        echo "Examples:"
        echo "  ./gsc.sh top-queries 7 50           Top 50 queries from last 7 days"
        echo "  ./gsc.sh quick-wins 14              Quick wins from last 14 days"
        echo "  ./gsc.sh inspect-url https://remaildirect.com/"
        ;;
esac
