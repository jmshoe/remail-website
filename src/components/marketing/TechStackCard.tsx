import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface TechStackCardProps {
  category: string
  name: string
  description: string
  logo?: string
  affiliateUrl: string
  className?: string
}

export function TechStackCard({
  category,
  name,
  description,
  logo,
  affiliateUrl,
  className,
}: TechStackCardProps) {
  return (
    <Link
      href={affiliateUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={cn(
        'group relative flex flex-col rounded-2xl bg-white p-6',
        'shadow-sm ring-1 ring-slate-900/5',
        'transition-all duration-200 hover:shadow-lg hover:-translate-y-1',
        className
      )}
    >
      {/* Category badge */}
      <Badge variant="secondary" className="w-fit mb-4 text-xs">
        {category}
      </Badge>

      {/* Logo or product name */}
      {logo ? (
        <div className="flex items-center justify-center h-16 mb-4">
          <Image
            src={logo}
            alt={`${name} logo`}
            width={140}
            height={56}
            className="object-contain max-h-14"
          />
        </div>
      ) : (
        <h3 className="text-lg font-bold text-foreground mb-2">{name}</h3>
      )}

      {/* Description */}
      <p className="text-sm text-muted-foreground flex-grow leading-relaxed">
        {description}
      </p>

      {/* Link indicator */}
      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
        Learn More
        <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
