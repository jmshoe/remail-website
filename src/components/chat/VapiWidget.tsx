'use client'

import { useEffect, useRef } from 'react'

// REmail Brand Colors
const BRAND = {
  primary: '#2563EB', // Blue - trust, professionalism
  accent: '#10B981', // Green - growth, money
  white: '#FFFFFF',
  dark: '#1F2937',
}

// Vapi Widget Configuration
const VAPI_CONFIG = {
  scriptUrl: 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js',
  assistantId: '01f448dc-7d01-4676-8b45-7ec8ce847514',
}

export function VapiWidget() {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetLoaderRef = useRef<any>(null)
  const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!containerRef.current) return

    if (!publicKey) {
      console.error('[VapiWidget] Missing NEXT_PUBLIC_VAPI_PUBLIC_KEY')
      return
    }

    // Create the widget container with data attributes
    containerRef.current.innerHTML = ''
    const widgetDiv = document.createElement('div')
    widgetDiv.id = 'vapi-widget-container'
    widgetDiv.setAttribute('data-client-widget', 'VapiWidget')
    widgetDiv.setAttribute('data-public-key', publicKey)
    widgetDiv.setAttribute('data-assistant-id', VAPI_CONFIG.assistantId)

    // Mode & Theme
    widgetDiv.setAttribute('data-mode', 'chat')
    widgetDiv.setAttribute('data-theme', 'light')
    widgetDiv.setAttribute('data-size', 'full')
    widgetDiv.setAttribute('data-radius', 'medium')

    // Brand Colors
    widgetDiv.setAttribute('data-accent-color', BRAND.primary)
    widgetDiv.setAttribute('data-button-base-color', BRAND.primary)
    widgetDiv.setAttribute('data-button-accent-color', BRAND.white)

    // Custom Labels
    widgetDiv.setAttribute('data-main-label', 'Chat with REmail')
    widgetDiv.setAttribute('data-start-button-text', 'Start Voice Chat')
    widgetDiv.setAttribute('data-end-button-text', 'End Call')
    widgetDiv.setAttribute(
      'data-empty-chat-message',
      "Hi! I'm here to help you grow your real estate business with direct mail. Ask me anything about campaigns, pricing, or getting started!"
    )
    widgetDiv.setAttribute(
      'data-empty-voice-message',
      'Click to start a voice conversation with our team'
    )

    containerRef.current.appendChild(widgetDiv)

    // Initialize the widget
    const initializeWidget = () => {
      const w = window as any

      if (typeof w.initializeWidgets === 'function') {
        w.initializeWidgets()
        return
      }

      if (!w.WidgetLoader) {
        console.error('[VapiWidget] WidgetLoader not found')
        return
      }

      if (typeof w.WidgetLoader.init === 'function') {
        w.WidgetLoader.init()
        return
      }

      if (typeof w.WidgetLoader.initializeWidgets === 'function') {
        w.WidgetLoader.initializeWidgets()
        return
      }

      try {
        widgetLoaderRef.current = new w.WidgetLoader({
          container: '#vapi-widget-container',
          component: 'VapiWidget',
          props: {
            publicKey,
            assistantId: VAPI_CONFIG.assistantId,
            mode: 'chat',
            theme: 'light',
            size: 'full',
            radius: 'medium',
            accentColor: BRAND.primary,
            buttonBaseColor: BRAND.primary,
            buttonAccentColor: BRAND.white,
            mainLabel: 'Chat with REmail',
            emptyChatMessage:
              "Hi! I'm here to help you grow your real estate business with direct mail. Ask me anything about campaigns, pricing, or getting started!",
          },
        })
      } catch {
        try {
          widgetLoaderRef.current = new w.WidgetLoader()
        } catch (e) {
          console.error('[VapiWidget] Initialization failed:', e)
        }
      }
    }

    // Load script if not already present
    let script = document.querySelector(
      `script[src="${VAPI_CONFIG.scriptUrl}"]`
    ) as HTMLScriptElement

    if (!script) {
      script = document.createElement('script')
      script.src = VAPI_CONFIG.scriptUrl
      script.async = true
      script.type = 'text/javascript'
      document.head.appendChild(script)

      script.onload = () => {
        setTimeout(initializeWidget, 100)
      }

      script.onerror = (e) => {
        console.error('[VapiWidget] Failed to load script:', e)
      }
    } else {
      setTimeout(initializeWidget, 50)
    }

    // Note: Chat icon is added via CSS in globals.css
    // Targeting: .vapi-widget-wrapper .flex.items-center.space-x-2::before

    // Cleanup on unmount
    return () => {
      if (widgetLoaderRef.current?.destroy) {
        widgetLoaderRef.current.destroy()
        widgetLoaderRef.current = null
      }
    }
  }, [publicKey])

  if (!publicKey) {
    return null
  }

  return <div ref={containerRef} />
}
