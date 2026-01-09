import type { Metadata } from 'next'
import { getBlogPosts, getAllTags } from '@/lib/mdx'
import { BlogCard } from '@/components/blog'
import { JsonLd, itemListSchema, breadcrumbSchema } from '@/components/seo/JsonLd'

const BASE_URL = 'https://www.remaildirect.com'

export const metadata: Metadata = {
  title: 'Blog - Direct Mail Marketing Tips for Real Estate Investors | REmail',
  description:
    'Expert guides, strategies, and tips for real estate direct mail marketing. Learn how to find motivated sellers, optimize campaigns, and maximize ROI.',
  openGraph: {
    title: 'Blog - Direct Mail Marketing Tips for Real Estate Investors',
    description:
      'Expert guides, strategies, and tips for real estate direct mail marketing. Learn how to find motivated sellers, optimize campaigns, and maximize ROI.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.remaildirect.com/blog',
  },
}

export default function BlogPage() {
  const posts = getBlogPosts()
  const tags = getAllTags()
  const featuredPost = posts[0]
  const recentPosts = posts.slice(1)

  // Prepare blog posts for ItemList schema
  const blogListItems = posts.map((post) => ({
    name: post.title,
    url: `${BASE_URL}/blog/${post.slug}`,
    description: post.description,
    ...(post.image && { image: `${BASE_URL}${post.image}` }),
  }))

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: BASE_URL },
          { name: 'Blog', url: `${BASE_URL}/blog` },
        ])}
      />
      <JsonLd data={itemListSchema(blogListItems)} />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Direct Mail Marketing Blog
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Expert strategies, tips, and guides to help real estate investors
              find motivated sellers and close more deals with direct mail.
            </p>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 cursor-pointer transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mb-8 text-sm font-semibold uppercase tracking-wider text-slate-500">
              Featured Article
            </h2>
            <BlogCard post={featuredPost} featured />
          </div>
        </section>
      )}

      {/* Recent Posts Grid */}
      {recentPosts.length > 0 && (
        <section className="py-12 pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mb-8 text-sm font-semibold uppercase tracking-wider text-slate-500">
              Recent Articles
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {posts.length === 0 && (
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <p className="text-lg text-slate-600">
              No blog posts yet. Check back soon!
            </p>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="border-t border-slate-100 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Ready to Launch Your Direct Mail Campaign?
            </h2>
            <p className="mt-4 text-slate-600">
              Join thousands of real estate investors using REmail to find
              motivated sellers and close more deals.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
