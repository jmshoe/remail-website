import Script from 'next/script'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

// Server component for GTM script - can be used in layouts
export function GoogleTagManager() {
  if (!GTM_ID) return null

  return (
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
// These check for window before using dataLayer
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

// Type declaration for dataLayer
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}
