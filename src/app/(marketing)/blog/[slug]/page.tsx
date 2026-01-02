import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react'
import { getBlogPost, getAllBlogSlugs, getBlogPosts } from '@/lib/mdx'
import { AuthorBio, BlogCard, mdxComponents } from '@/components/blog'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found | REmail Blog',
    }
  }

  return {
    title: `${post.title} | REmail Blog`,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const allPosts = getBlogPosts()
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3)

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  // Article JSON-LD schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: post.author,
      ...(post.authorRole && { jobTitle: post.authorRole }),
    },
    datePublished: post.date,
    dateModified: post.date,
    publisher: {
      '@type': 'Organization',
      name: 'REmail',
      url: 'https://remail.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://remail.com/blog/${slug}`,
    },
    keywords: post.tags.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6 py-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </header>

        {/* Article */}
        <article className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            {/* Meta */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                {post.title}
              </h1>
              <p className="mt-4 text-xl text-slate-600">{post.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>{formattedDate}</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </div>

            {/* Author */}
            <div className="mb-12 flex items-center justify-between border-y border-slate-100 py-6">
              <AuthorBio name={post.author} role={post.authorRole} />
              <button
                className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 transition-colors"
                title="Share article"
              >
                <Share2 className="h-4 w-4" />
                Share
              </button>
            </div>

            {/* Content */}
            <div className="prose prose-slate prose-lg max-w-none">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>

            {/* Tags footer */}
            <div className="mt-12 border-t border-slate-100 pt-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-slate-500">Tags:</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Card */}
            <div className="mt-12 rounded-xl bg-slate-50 p-6 md:p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                About the Author
              </p>
              <AuthorBio name={post.author} role={post.authorRole} variant="card" />
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-slate-100 bg-slate-50 py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-900">
                Related Articles
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="border-t border-slate-100 py-16">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Ready to Put These Strategies Into Action?
            </h2>
            <p className="mt-4 text-slate-600">
              Start your direct mail campaign today and see the difference
              professional marketing makes.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90"
            >
              Get Started Free
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
