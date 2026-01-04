#!/bin/bash

# Fire Crawl MCP Setup Script
# This script helps configure Fire Crawl MCP server for Claude Code

set -e

echo "🔥 Fire Crawl MCP Setup"
echo "========================"
echo ""

# Check if API key is provided as argument
if [ -z "$1" ]; then
  echo "Usage: ./scripts/setup-firecrawl-mcp.sh <your-api-key>"
  echo ""
  echo "To get your API key:"
  echo "1. Visit https://firecrawl.dev/app/api-keys"
  echo "2. Sign up or log in"
  echo "3. Generate a new API key"
  echo ""
  echo "Alternatively, set FIRECRAWL_API_KEY environment variable:"
  echo "  export FIRECRAWL_API_KEY=your-key"
  echo "  ./scripts/setup-firecrawl-mcp.sh"
  exit 1
fi

API_KEY="${1:-$FIRECRAWL_API_KEY}"

if [ -z "$API_KEY" ]; then
  echo "❌ Error: API key not provided"
  echo "Please provide your Fire Crawl API key as an argument or set FIRECRAWL_API_KEY env var"
  exit 1
fi

echo "📋 Adding Fire Crawl MCP server to Claude Code..."
echo ""

# Add the MCP server
claude mcp add firecrawl -e FIRECRAWL_API_KEY="$API_KEY" -- npx -y firecrawl-mcp

echo ""
echo "✅ Fire Crawl MCP server added successfully!"
echo ""
echo "📝 Next steps:"
echo "1. Verify installation: claude mcp list"
echo "2. Restart Claude Code to ensure tools are available"
echo "3. Test by asking Claude to scrape a webpage"
echo ""
echo "📚 Documentation: .claude/mcp/firecrawl-mcp-setup.md"
