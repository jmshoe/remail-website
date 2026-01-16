---
description: Submit sitemap to Google Search Console and Bing/Yandex via IndexNow
allowed-tools: Bash(npm run:*), Bash(npx tsx:*)
---

# Submit Sitemap Command

Submits the sitemap to search engines for faster indexing of new content.

## What This Does

1. **Google Search Console** - Submits sitemap.xml via the Search Console API
2. **Bing** - Submits via IndexNow protocol for instant indexing
3. **Yandex** - Submits via IndexNow protocol

## Prerequisites

Ensure environment variables are set:
- `GOOGLE_SERVICE_ACCOUNT_EMAIL` - Service account email with GSC access
- `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` - Service account private key
- `INDEXNOW_API_KEY` (optional) - Custom IndexNow key

## Usage

Run the sitemap submission script:

```bash
npm run sitemap:submit
```

## Expected Output

```
🗺️  Sitemap Submission Script
============================

Sitemap URL: https://www.remaildirect.com/sitemap.xml

📊 Submitting to Google Search Console...
   ✅ Google Search Console: Sitemap submitted successfully

🔍 Submitting to IndexNow (Bing, Yandex)...
   ✅ IndexNow (api.indexnow.org): Submitted successfully (HTTP 200)
   ✅ IndexNow (www.bing.com): Submitted successfully (HTTP 200)
   ✅ IndexNow (yandex.com): Submitted successfully (HTTP 200)

============================
Summary: 4/4 submissions successful
```

## When to Run

- After deploying new blog posts
- After adding new landing pages
- After any content update that affects the sitemap
- Automatically triggered by `/deploy` command

## Troubleshooting

### Google Search Console Errors

1. **Missing credentials**: Set `GOOGLE_SERVICE_ACCOUNT_EMAIL` and `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`
2. **Permission denied**: Add the service account email as an owner in GSC property settings
3. **Site not verified**: Ensure the site is verified in Google Search Console

### IndexNow Errors

1. **HTTP 403**: The API key may be invalid
2. **HTTP 422**: The URL format may be incorrect
3. **Network errors**: Check internet connectivity

## Manual Verification

After running, verify in:
- [Google Search Console](https://search.google.com/search-console) → Sitemaps
- [Bing Webmaster Tools](https://www.bing.com/webmasters) → Sitemaps
