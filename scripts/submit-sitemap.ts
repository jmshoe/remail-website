#!/usr/bin/env npx ts-node

/**
 * Sitemap Submission Script
 *
 * Submits the sitemap to:
 * 1. Google Search Console (via API)
 * 2. Bing/Yandex (via IndexNow protocol)
 *
 * Usage:
 *   npx ts-node scripts/submit-sitemap.ts
 *
 * Environment variables required:
 *   - GOOGLE_SERVICE_ACCOUNT_EMAIL
 *   - GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
 *   - INDEXNOW_API_KEY (optional, will generate if not set)
 */

import { config } from 'dotenv';
import { google } from 'googleapis';

// Load environment variables from .env file
config();

const SITE_URL = 'https://www.remaildirect.com';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

// IndexNow endpoints
const INDEXNOW_ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
];

interface SubmissionResult {
  service: string;
  success: boolean;
  message: string;
}

/**
 * Submit sitemap to Google Search Console
 */
async function submitToGoogleSearchConsole(): Promise<SubmissionResult> {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  if (!email || !privateKey) {
    return {
      service: 'Google Search Console',
      success: false,
      message:
        'Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY',
    };
  }

  try {
    // Create JWT auth client
    const auth = new google.auth.JWT({
      email,
      key: privateKey.replace(/\\n/g, '\n'), // Handle escaped newlines
      scopes: ['https://www.googleapis.com/auth/webmasters'],
    });

    // Create Search Console API client
    const searchconsole = google.searchconsole({ version: 'v1', auth });

    // Submit the sitemap
    await searchconsole.sitemaps.submit({
      siteUrl: SITE_URL,
      feedpath: SITEMAP_URL,
    });

    return {
      service: 'Google Search Console',
      success: true,
      message: `Sitemap submitted successfully: ${SITEMAP_URL}`,
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    return {
      service: 'Google Search Console',
      success: false,
      message: `Failed to submit sitemap: ${errorMessage}`,
    };
  }
}

/**
 * Submit sitemap URL to IndexNow (Bing, Yandex)
 */
async function submitToIndexNow(): Promise<SubmissionResult[]> {
  // IndexNow requires an API key - use env var or generate a placeholder
  const apiKey =
    process.env.INDEXNOW_API_KEY || 'remaildirect-indexnow-key-2026';

  const results: SubmissionResult[] = [];

  for (const endpoint of INDEXNOW_ENDPOINTS) {
    try {
      const url = new URL(endpoint);
      url.searchParams.set('url', SITEMAP_URL);
      url.searchParams.set('key', apiKey);

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // IndexNow returns 200 or 202 for success
      if (response.ok || response.status === 202) {
        results.push({
          service: `IndexNow (${url.hostname})`,
          success: true,
          message: `Submitted successfully (HTTP ${response.status})`,
        });
      } else {
        results.push({
          service: `IndexNow (${url.hostname})`,
          success: false,
          message: `HTTP ${response.status}: ${response.statusText}`,
        });
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      results.push({
        service: `IndexNow (${new URL(endpoint).hostname})`,
        success: false,
        message: `Request failed: ${errorMessage}`,
      });
    }
  }

  return results;
}

/**
 * Submit a specific URL to IndexNow (for new pages)
 */
async function submitUrlToIndexNow(pageUrl: string): Promise<SubmissionResult> {
  const apiKey =
    process.env.INDEXNOW_API_KEY || 'remaildirect-indexnow-key-2026';

  try {
    const endpoint = new URL('https://api.indexnow.org/indexnow');
    endpoint.searchParams.set('url', pageUrl);
    endpoint.searchParams.set('key', apiKey);

    const response = await fetch(endpoint.toString());

    if (response.ok || response.status === 202) {
      return {
        service: 'IndexNow',
        success: true,
        message: `URL submitted: ${pageUrl}`,
      };
    } else {
      return {
        service: 'IndexNow',
        success: false,
        message: `HTTP ${response.status}: ${response.statusText}`,
      };
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    return {
      service: 'IndexNow',
      success: false,
      message: `Failed: ${errorMessage}`,
    };
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🗺️  Sitemap Submission Script');
  console.log('============================\n');
  console.log(`Sitemap URL: ${SITEMAP_URL}\n`);

  const allResults: SubmissionResult[] = [];

  // Submit to Google Search Console
  console.log('📊 Submitting to Google Search Console...');
  const gscResult = await submitToGoogleSearchConsole();
  allResults.push(gscResult);
  console.log(
    `   ${gscResult.success ? '✅' : '❌'} ${gscResult.service}: ${gscResult.message}\n`
  );

  // Submit to IndexNow (Bing, Yandex)
  console.log('🔍 Submitting to IndexNow (Bing, Yandex)...');
  const indexNowResults = await submitToIndexNow();
  allResults.push(...indexNowResults);
  for (const result of indexNowResults) {
    console.log(
      `   ${result.success ? '✅' : '❌'} ${result.service}: ${result.message}`
    );
  }

  // Summary
  console.log('\n============================');
  const successCount = allResults.filter((r) => r.success).length;
  const totalCount = allResults.length;
  console.log(`Summary: ${successCount}/${totalCount} submissions successful`);

  // Exit with error code if any failures
  if (successCount < totalCount) {
    process.exit(1);
  }
}

// Export functions for use as module
export {
  submitToGoogleSearchConsole,
  submitToIndexNow,
  submitUrlToIndexNow,
  SITEMAP_URL,
  SITE_URL,
};

// Run if executed directly
main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
