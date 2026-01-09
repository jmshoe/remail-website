'use client'

import Script from 'next/script'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
const CONSENT_KEY = 'remail_consent'

export function GoogleTagManager() {
  if (!GTM_ID) return null

  return (
    <>
      {/* Google Consent Mode v2 - initializes before GTM loads */}
      <Script
        id="google-consent-mode"
        strategy="afterInteractive"
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

// Server component for GTM noscript fallback
export function GoogleTagManagerNoScript() {
  if (!GTM_ID) return null

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

// Client-side analytics helper functions
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    })
  }
}

// Predefined event helpers
export const analytics = {
  // Lead generation
  generateLead: (params?: { source?: string; value?: number }) => {
    trackEvent('generate_lead', params)
  },

  // Contact interactions
  clickPhone: () => trackEvent('click_phone'),
  clickEmail: () => trackEvent('click_email'),
  clickBookDemo: () => trackEvent('click_book_demo'),

  // Page/content events
  viewPricing: () => trackEvent('view_pricing'),
  viewService: (serviceName: string) => trackEvent('view_service', { service_name: serviceName }),

  // Form events
  formStart: (formName: string) => trackEvent('form_start', { form_name: formName }),
  formSubmit: (formName: string) => trackEvent('form_submit', { form_name: formName }),
}

// Type declaration for dataLayer and gtag
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
    gtag: (...args: unknown[]) => void
  }
}
