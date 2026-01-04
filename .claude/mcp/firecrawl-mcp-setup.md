# Fire Crawl MCP Setup

This document covers the Fire Crawl MCP server configuration for this project.

## Overview

Fire Crawl MCP provides web scraping and crawling capabilities through Claude Code, enabling:
- **Web scraping** - Extract content from any webpage
- **URL discovery** - Find and map URLs from a starting point
- **Crawling** - Automatically crawl multiple pages
- **Content extraction** - Get structured data from web pages
- **Deep research** - Conduct comprehensive research on topics

## Setup Instructions

### 1. Get Fire Crawl API Key

1. Visit [Fire Crawl API Keys](https://firecrawl.dev/app/api-keys)
2. Sign up or log in to your account
3. Generate a new API key
4. Copy the API key (you'll need it for the next step)

### 2. Add Fire Crawl MCP to Claude Code

Run the following command in your terminal, replacing `your-api-key` with your actual API key:

```bash
claude mcp add firecrawl -e FIRECRAWL_API_KEY=your-api-key -- npx -y firecrawl-mcp
```

**Alternative: Using environment variable**

If you prefer to use an environment variable from your `.env` file:

```bash
# First, add to your .env file:
# FIRECRAWL_API_KEY=your-api-key

# Then add the MCP server:
claude mcp add firecrawl -e FIRECRAWL_API_KEY=${FIRECRAWL_API_KEY} -- npx -y firecrawl-mcp
```

### 3. Verify Installation

List all configured MCP servers to confirm Fire Crawl is added:

```bash
claude mcp list
```

You should see `firecrawl` in the list.

### 4. Restart Claude Code

After adding the MCP server, restart Claude Code to ensure the tools are available.

## Available Tools

Once configured, the following Fire Crawl tools will be available:

| Tool | Description |
|------|-------------|
| `mcp_firecrawl_firecrawl_scrape` | Scrape a single webpage with advanced options |
| `mcp_firecrawl_firecrawl_map` | Discover URLs from a starting point |
| `mcp_firecrawl_firecrawl_crawl` | Start an asynchronous crawl of multiple pages |
| `mcp_firecrawl_firecrawl_check_crawl_status` | Check the status of a crawl job |
| `mcp_firecrawl_firecrawl_search` | Search and retrieve content from web pages |
| `mcp_firecrawl_firecrawl_extract` | Extract structured information using LLM |
| `mcp_firecrawl_firecrawl_deep_research` | Conduct deep research on a query |
| `mcp_firecrawl_firecrawl_generate_llmstxt` | Generate LLMs.txt file for a URL |

## Use Cases for REmail

### SEO Research
- Scrape competitor websites to analyze content strategies
- Extract pricing information from competitor sites
- Analyze blog post structures and formats
- Research keyword usage across competitor pages

### Content Research
- Scrape real estate industry blogs for content ideas
- Extract case studies and testimonials
- Research direct mail best practices
- Gather market data and statistics

### Competitor Analysis
- Crawl competitor websites to understand their structure
- Extract service offerings and pricing
- Analyze their content marketing strategy
- Map their site structure and navigation

### Content Extraction
- Extract structured data from real estate forums
- Pull testimonials and reviews
- Extract FAQ content from industry sites
- Gather contact information and resources

## Example Usage

### Scrape a Competitor Page

```typescript
// In a Claude Code command or skill
const result = await mcp_firecrawl_firecrawl_scrape({
  url: "https://competitor.com/pricing",
  formats: ["markdown", "html"],
  onlyMainContent: true
});
```

### Discover URLs from Sitemap

```typescript
const urls = await mcp_firecrawl_firecrawl_map({
  url: "https://competitor.com",
  limit: 50
});
```

### Deep Research on a Topic

```typescript
const research = await mcp_firecrawl_firecrawl_deep_research({
  query: "direct mail automation for real estate investors",
  maxDepth: 3,
  maxUrls: 20
});
```

## Environment Variables

Add to your `.env` file (optional, if using env var approach):

```bash
FIRECRAWL_API_KEY=your-api-key-here
```

**Note:** The `.env` file is already in `.gitignore`, so your API key won't be committed.

## Troubleshooting

### MCP Server Not Appearing

1. Verify the API key is correct
2. Check that the command completed successfully
3. Restart Claude Code
4. Run `claude mcp list` to see all servers

### Authentication Errors

If you see authentication errors:
- Verify your API key is valid at [Fire Crawl Dashboard](https://firecrawl.dev/app)
- Check that the environment variable is set correctly
- Ensure you're using the correct API key format

### Rate Limiting

Fire Crawl has rate limits based on your plan:
- Free tier: Limited requests
- Paid plans: Higher limits

Monitor your usage in the [Fire Crawl Dashboard](https://firecrawl.dev/app).

## Integration with Project Skills

The Fire Crawl MCP can be used in:

- **SEO Research Skill** (`.claude/skills/seo-research/`) - For competitor analysis and content research
- **Content Commands** - For scraping and extracting content during content creation
- **Competitor Analysis** - For automated competitor research

## Additional Resources

- [Fire Crawl Documentation](https://docs.firecrawl.dev/)
- [Fire Crawl MCP Server Docs](https://docs.firecrawl.dev/mcp-server)
- [Fire Crawl API Reference](https://docs.firecrawl.dev/api-reference)

## Next Steps

After setting up Fire Crawl MCP:

1. Test with a simple scrape: Ask Claude to scrape a webpage
2. Use in SEO research: Run `/competitor-seo` command
3. Integrate into content workflow: Use for research during blog post creation
