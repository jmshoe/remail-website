'use client'

import { getCalApi } from '@calcom/embed-react'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { ButtonProps } from '@/components/ui/button'

interface CalBookingProps {
  mode?: 'button' | 'inline'
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
  className?: string
  children?: React.ReactNode
}

export function CalBooking({
  mode = 'button',
  variant = 'default',
  size = 'default',
  className,
  children,
}: CalBookingProps) {
  const inlineRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    ;(async function () {
      try {
        // Initialize Cal.com API with namespace
        const cal = await getCalApi({ namespace: 'direct-mail-consult' })
        
        // Configure UI settings
        cal('ui', { 
          hideEventTypeDetails: false, 
          layout: 'month_view' 
        })

        // For inline mode, initialize the inline embed
        if (mode === 'inline' && inlineRef.current) {
          const initInline = () => {
            if (!inlineRef.current) return

            // Access the namespace API through the global Cal object
            const Cal = (window as any).Cal
            if (Cal?.ns?.['direct-mail-consult']) {
              Cal.ns['direct-mail-consult']('inline', {
                elementOrSelector: inlineRef.current,
                config: { layout: 'month_view' },
                calLink: 'jason-macht/direct-mail-consult',
              })
              setIsLoaded(true)
            } else {
              // Retry after a short delay if namespace isn't ready
              setTimeout(initInline, 200)
            }
          }

          // Small delay to ensure DOM is ready
          setTimeout(initInline, 100)
        } else if (mode === 'button') {
          setIsLoaded(true)
        }
      } catch (error) {
        console.error('Failed to load Cal.com embed:', error)
      }
    })()
  }, [mode])

  if (mode === 'inline') {
    return (
      <div
        ref={inlineRef}
        id="cal-inline-direct-mail-consult"
        className={cn(
          'w-full overflow-hidden',
          className
        )}
        style={{
          minHeight: '650px',
        }}
      >
        {!isLoaded && (
          <div className="flex h-[650px] items-center justify-center text-slate-400">
            <div className="text-center">
              <div className="mb-2 h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto" />
              <p className="text-sm">Loading calendar...</p>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <Button
      data-cal-namespace="direct-mail-consult"
      data-cal-link="jason-macht/direct-mail-consult"
      data-cal-config='{"layout":"month_view"}'
      variant={variant}
      size={size}
      className={className}
    >
      {children || 'Schedule a Demo'}
    </Button>
  )
}
