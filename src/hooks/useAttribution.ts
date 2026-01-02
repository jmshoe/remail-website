'use client'

import { useEffect, useState } from 'react'

export interface AttributionData {
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmContent?: string
  utmTerm?: string
  gclid?: string
  referrer?: string
  landingPage?: string
}

const STORAGE_KEY = 'remail_attribution'
const STORAGE_EXPIRY_MS = 30 * 24 * 60 * 60 * 1000 // 30 days

interface StoredAttribution extends AttributionData {
  timestamp: number
}

function getStoredAttribution(): AttributionData | null {
  if (typeof window === 'undefined') return null

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return null

    const data: StoredAttribution = JSON.parse(stored)

    // Check if expired
    if (Date.now() - data.timestamp > STORAGE_EXPIRY_MS) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }

    const { timestamp, ...attribution } = data
    return attribution
  } catch {
    return null
  }
}

function storeAttribution(data: AttributionData) {
  if (typeof window === 'undefined') return

  try {
    const stored: StoredAttribution = {
      ...data,
      timestamp: Date.now(),
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored))
  } catch {
    // Storage full or unavailable
  }
}

function getAttributionFromUrl(): AttributionData {
  if (typeof window === 'undefined') return {}

  const params = new URLSearchParams(window.location.search)

  return {
    utmSource: params.get('utm_source') || undefined,
    utmMedium: params.get('utm_medium') || undefined,
    utmCampaign: params.get('utm_campaign') || undefined,
    utmContent: params.get('utm_content') || undefined,
    utmTerm: params.get('utm_term') || undefined,
    gclid: params.get('gclid') || undefined,
    referrer: document.referrer || undefined,
    landingPage: window.location.pathname,
  }
}

export function useAttribution(): AttributionData {
  const [attribution, setAttribution] = useState<AttributionData>({})

  useEffect(() => {
    // First check URL for new attribution params
    const urlAttribution = getAttributionFromUrl()

    // Check if we have any new attribution params
    const hasNewAttribution = urlAttribution.utmSource || urlAttribution.gclid

    if (hasNewAttribution) {
      // New attribution - store and use it
      storeAttribution(urlAttribution)
      setAttribution(urlAttribution)
    } else {
      // No new attribution - try to get stored attribution
      const stored = getStoredAttribution()
      if (stored) {
        setAttribution(stored)
      } else {
        // No stored attribution - just capture referrer and landing page
        const basicAttribution: AttributionData = {
          referrer: document.referrer || undefined,
          landingPage: window.location.pathname,
        }
        storeAttribution(basicAttribution)
        setAttribution(basicAttribution)
      }
    }
  }, [])

  return attribution
}

// Hook to get attribution for form submission
export function getAttributionData(): AttributionData {
  return getStoredAttribution() || {}
}
