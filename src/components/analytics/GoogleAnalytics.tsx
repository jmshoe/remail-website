'use client'

import Script from 'next/script'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

const CONSENT_KEY = 'remail_consent'

export function GoogleTagManager() {
  // Don't render anything if no GTM ID
  if (!GTM_ID) {
    return null
  }

  return (
    <>
      {/* Google Consent Mode v2 - must load BEFORE GTM */}
      <Script
        id="google-consent-mode"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Set default consent to denied (GDPR compliant)
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'wait_for_update': 500
            });

            // Check for stored consent and update immediately
            (function() {
              try {
                var stored = localStorage.getItem('${CONSENT_KEY}');
                if (stored) {
                  var prefs = JSON.parse(stored);
                  gtag('consent', 'update', {
                    'analytics_storage': prefs.analytics ? 'granted' : 'denied',
                    'ad_storage': prefs.marketing ? 'granted' : 'denied',
                    'ad_user_data': prefs.marketing ? 'granted' : 'denied',
                    'ad_personalization': prefs.marketing ? 'granted' : 'denied'
                  });
                }
              } catch (e) {
                console.error('Error loading consent preferences:', e);
              }
            })();
          `,
        }}
      />

      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
    </>
  )
}

// GTM noscript fallback for body
export function GoogleTagManagerNoScript() {
  if (!GTM_ID) {
    return null
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}

// Track custom events via dataLayer
export function trackEvent(
  event: string,
  params?: Record<string, unknown>
) {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event,
    ...params,
  })
}

// Declare types
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}
