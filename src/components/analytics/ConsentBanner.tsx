'use client'

import { useState, useEffect } from 'react'

type ConsentState = 'pending' | 'granted' | 'denied'

interface ConsentPreferences {
  analytics: boolean
  marketing: boolean
  timestamp: number
}

const CONSENT_KEY = 'remail_consent'

export function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    analytics: true,
    marketing: true,
    timestamp: 0,
  })

  useEffect(() => {
    // Check if consent has already been given
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) {
      // Small delay to prevent flash on page load
      const timer = setTimeout(() => setShowBanner(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const updateGoogleConsent = (analytics: boolean, marketing: boolean) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: analytics ? 'granted' : 'denied',
        ad_storage: marketing ? 'granted' : 'denied',
        ad_user_data: marketing ? 'granted' : 'denied',
        ad_personalization: marketing ? 'granted' : 'denied',
      })
    }
  }

  const saveConsent = (analytics: boolean, marketing: boolean) => {
    const newPreferences: ConsentPreferences = {
      analytics,
      marketing,
      timestamp: Date.now(),
    }
    localStorage.setItem(CONSENT_KEY, JSON.stringify(newPreferences))
    updateGoogleConsent(analytics, marketing)
    setShowBanner(false)
    setShowPreferences(false)
  }

  const handleAcceptAll = () => {
    saveConsent(true, true)
  }

  const handleRejectAll = () => {
    saveConsent(false, false)
  }

  const handleSavePreferences = () => {
    saveConsent(preferences.analytics, preferences.marketing)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-xl bg-white shadow-2xl ring-1 ring-slate-900/10 overflow-hidden">
          {!showPreferences ? (
            // Main banner
            <div className="p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50">
                  <svg
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-slate-900">
                    We value your privacy
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    We use cookies to improve your experience and analyze site traffic.
                    You can customize your preferences or accept all cookies.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button
                      onClick={handleAcceptAll}
                      className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                      Accept all
                    </button>
                    <button
                      onClick={handleRejectAll}
                      className="inline-flex items-center rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors"
                    >
                      Reject all
                    </button>
                    <button
                      onClick={() => setShowPreferences(true)}
                      className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors"
                    >
                      Customize
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Preferences panel
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-slate-900">
                  Cookie preferences
                </h3>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mt-4 space-y-4">
                {/* Essential cookies - always on */}
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <div>
                    <p className="text-sm font-medium text-slate-900">Essential</p>
                    <p className="text-xs text-slate-500">Required for the site to function</p>
                  </div>
                  <div className="relative">
                    <div className="h-6 w-11 rounded-full bg-blue-600 cursor-not-allowed opacity-60" />
                    <div className="absolute top-0.5 right-0.5 h-5 w-5 rounded-full bg-white shadow" />
                  </div>
                </div>

                {/* Analytics cookies */}
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <div>
                    <p className="text-sm font-medium text-slate-900">Analytics</p>
                    <p className="text-xs text-slate-500">Help us improve our website</p>
                  </div>
                  <button
                    onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                    className={`relative h-6 w-11 rounded-full transition-colors ${
                      preferences.analytics ? 'bg-blue-600' : 'bg-slate-200'
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                        preferences.analytics ? 'right-0.5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>

                {/* Marketing cookies */}
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-sm font-medium text-slate-900">Marketing</p>
                    <p className="text-xs text-slate-500">Personalized ads and content</p>
                  </div>
                  <button
                    onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                    className={`relative h-6 w-11 rounded-full transition-colors ${
                      preferences.marketing ? 'bg-blue-600' : 'bg-slate-200'
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                        preferences.marketing ? 'right-0.5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="mt-5 flex gap-3">
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 inline-flex justify-center items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Save preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="inline-flex items-center rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors"
                >
                  Accept all
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Utility to get current consent state (for use elsewhere in the app)
export function getConsentState(): ConsentPreferences | null {
  if (typeof window === 'undefined') return null
  const stored = localStorage.getItem(CONSENT_KEY)
  if (!stored) return null
  try {
    return JSON.parse(stored)
  } catch {
    return null
  }
}

// Declare gtag on window
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}
