import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import type { BlogPostMeta } from '@/lib/mdx'

interface BlogCardProps {
  post: BlogPostMeta
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 p-8 ring-1 ring-slate-200 transition-all duration-300 hover:shadow-xl hover:ring-primary/30">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors md:text-3xl">
              {post.title}
            </h2>
            <p className="text-lg text-slate-600 line-clamp-3">
              {post.description}
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>{formattedDate}</time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-sm font-semibold text-white">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-medium text-slate-900">{post.author}</p>
                {post.authorRole && (
                  <p className="text-sm text-slate-500">{post.authorRole}</p>
                )}
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 right-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
              Read article
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="relative h-full overflow-hidden rounded-xl bg-white p-6 ring-1 ring-slate-200 transition-all duration-300 hover:shadow-lg hover:ring-primary/30 hover:-translate-y-1">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-slate-600 line-clamp-2">
            {post.description}
          </p>
          <div className="flex items-center gap-3 pt-2 text-xs text-slate-500">
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <time dateTime={post.date}>{formattedDate}</time>
            </div>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
          <div className="flex items-center gap-2 pt-3 border-t border-slate-100 mt-auto">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-slate-600 to-slate-800 text-xs font-medium text-white">
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <span className="text-sm font-medium text-slate-700">{post.author}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
