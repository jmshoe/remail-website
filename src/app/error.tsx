'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold text-muted-foreground/30">Oops!</h1>
      <h2 className="mt-4 text-2xl font-semibold text-foreground">
        Something went wrong
      </h2>
      <p className="mt-2 text-muted-foreground">
        We apologize for the inconvenience. Please try again.
      </p>
      <Button onClick={() => reset()} className="mt-8">
        Try Again
      </Button>
    </div>
  )
}
