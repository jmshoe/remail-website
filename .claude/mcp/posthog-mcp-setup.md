# PostHog MCP Setup

This document covers PostHog MCP integration for analytics, experiments, feature flags, and insights.

## Overview

The PostHog MCP provides direct access to PostHog's analytics platform via Claude Code, enabling:
- Query analytics data with natural language
- Create and manage dashboards and insights
- Run A/B experiments and feature flags
- Monitor errors and logs
- Create and manage surveys

## Configuration

**MCP Server:** PostHog's hosted MCP endpoint (no local setup required)

**URL:** `https://mcp.posthog.com/mcp`

**Authentication:** OAuth-based (handled automatically by Claude Code)

### Setup Steps

1. **Run Claude MCP add command:**
   ```bash
   claude mcp add posthog --type http --url https://mcp.posthog.com/mcp
   ```

2. **Authenticate:** Follow the OAuth flow when prompted

3. **Verify connection:**
   ```bash
   claude mcp list
   # Should show: posthog: https://mcp.posthog.com/mcp (HTTP) - ✓ Connected
   ```

## Project Information

| Item | Value |
|------|-------|
| Organization | White Space Solutions |
| Project | Default project |
| Project ID | 293244 |

## Website Integration

PostHog is integrated in the website via `posthog-js`:

**Provider:** `src/components/analytics/PostHogProvider.tsx`

**Environment Variables:**
```bash
NEXT_PUBLIC_POSTHOG_KEY="phc_..."        # Project API key
NEXT_PUBLIC_POSTHOG_HOST="https://us.i.posthog.com"  # API host
```

**Features enabled:**
- Page view tracking (manual for SPA)
- Page leave tracking
- Autocapture (clicks, submits)
- Session recording (with input masking)

## Available MCP Tools

### Analytics & Queries

| Tool | Description |
|------|-------------|
| `query-run` | Execute HogQL queries |
| `query-generate-hogql-from-question` | Natural language to SQL |
| `insight-query` | Query existing insight data |
| `insight-create-from-query` | Save query as insight |
| `insights-get-all` | List all insights |
| `insight-get` | Get specific insight |
| `insight-update` | Update insight |
| `insight-delete` | Delete insight |

### Dashboards

| Tool | Description |
|------|-------------|
| `dashboards-get-all` | List all dashboards |
| `dashboard-get` | Get specific dashboard |
| `dashboard-create` | Create new dashboard |
| `dashboard-update` | Update dashboard |
| `dashboard-delete` | Delete dashboard |
| `add-insight-to-dashboard` | Add insight to dashboard |

### Feature Flags

| Tool | Description |
|------|-------------|
| `feature-flag-get-all` | List all feature flags |
| `feature-flag-get-definition` | Get flag details |
| `create-feature-flag` | Create new flag |
| `update-feature-flag` | Update flag |
| `delete-feature-flag` | Delete flag |

### Experiments (A/B Tests)

| Tool | Description |
|------|-------------|
| `experiment-get-all` | List all experiments |
| `experiment-get` | Get experiment details |
| `experiment-create` | Create new experiment |
| `experiment-update` | Update experiment |
| `experiment-delete` | Delete experiment |
| `experiment-results-get` | Get experiment results |

### Surveys

| Tool | Description |
|------|-------------|
| `surveys-get-all` | List all surveys |
| `survey-get` | Get specific survey |
| `survey-create` | Create new survey |
| `survey-update` | Update survey |
| `survey-delete` | Delete survey |
| `survey-stats` | Get survey response stats |

### Error Tracking

| Tool | Description |
|------|-------------|
| `list-errors` | List errors in project |
| `error-details` | Get error details |

### Logs

| Tool | Description |
|------|-------------|
| `logs-query` | Search and filter logs |
| `logs-list-attributes` | List available log attributes |
| `logs-list-attribute-values` | Get values for attribute |

### Project & Organization

| Tool | Description |
|------|-------------|
| `organizations-get` | List organizations |
| `switch-organization` | Switch active org |
| `projects-get` | List projects |
| `switch-project` | Switch active project |
| `event-definitions-list` | List tracked events |
| `properties-list` | List event properties |

### Entity Search

| Tool | Description |
|------|-------------|
| `entity-search` | Search across insights, dashboards, experiments, etc. |
| `docs-search` | Search PostHog documentation |

## Common Usage Examples

### Query Analytics Data

```
"Show me pageviews for the last 7 days"
"What are the top pages by views?"
"How many unique users visited /pricing this week?"
```

### Create Experiment

```
"Create an A/B test for the pricing page CTA button"
"Set up an experiment to test new homepage hero"
```

### Feature Flags

```
"Create a feature flag for the new checkout flow"
"Show me all active feature flags"
"Enable the new-dashboard flag for 50% of users"
```

### Error Investigation

```
"Show me the most recent errors"
"What's happening with error ID xyz?"
```

## Troubleshooting

### Connection Issues

1. Check status: `claude mcp list`
2. Re-authenticate: `claude mcp remove posthog && claude mcp add posthog`
3. Restart Claude Code

### Authentication Errors

The PostHog MCP uses OAuth. If you see auth errors:
1. Remove the MCP: `claude mcp remove posthog`
2. Re-add and re-authenticate: `claude mcp add posthog`

### Project Not Found

Use `projects-get` to see available projects, then `switch-project` if needed.

## Related Files

| File | Purpose |
|------|---------|
| `src/components/analytics/PostHogProvider.tsx` | React provider |
| `src/components/analytics/index.ts` | Analytics exports |
| `.env.example` | Environment variables |

## Last Verified

- Date: 2025-01-18
- Status: ✅ Connected
- Organization: White Space Solutions
- Project: Default project (293244)
