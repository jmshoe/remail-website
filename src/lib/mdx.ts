import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const CONTENT_PATH = path.join(process.cwd(), 'content')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  authorRole?: string
  tags: string[]
  image?: string
  imageAlt?: string
  readingTime: string
  content: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
  author: string
  authorRole?: string
  tags: string[]
  image?: string
  imageAlt?: string
  readingTime: string
}

export function getBlogPosts(): BlogPostMeta[] {
  const blogDir = path.join(CONTENT_PATH, 'blog')

  if (!fs.existsSync(blogDir)) {
    return []
  }

  const files = fs.readdirSync(blogDir).filter((file) => file.endsWith('.mdx'))

  const posts = files.map((file) => {
    const filePath = path.join(blogDir, file)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)
    const slug = file.replace(/\.mdx$/, '')
    const stats = readingTime(content)

    return {
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      author: data.author || 'REmail Team',
      authorRole: data.authorRole,
      tags: data.tags || [],
      image: data.image,
      imageAlt: data.imageAlt || data.title,
      readingTime: stats.text,
    }
  })

  // Sort by date, newest first
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPost(slug: string): BlogPost | null {
  const blogDir = path.join(CONTENT_PATH, 'blog')
  const filePath = path.join(blogDir, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  const stats = readingTime(content)

  return {
    slug,
    title: data.title || 'Untitled',
    description: data.description || '',
    date: data.date || new Date().toISOString(),
    author: data.author || 'REmail Team',
    authorRole: data.authorRole,
    tags: data.tags || [],
    image: data.image,
    imageAlt: data.imageAlt || data.title,
    readingTime: stats.text,
    content,
  }
}

export function getAllBlogSlugs(): string[] {
  const blogDir = path.join(CONTENT_PATH, 'blog')

  if (!fs.existsSync(blogDir)) {
    return []
  }

  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

export function getBlogPostsByTag(tag: string): BlogPostMeta[] {
  const posts = getBlogPosts()
  return posts.filter((post) => post.tags.includes(tag))
}

export function getAllTags(): string[] {
  const posts = getBlogPosts()
  const tags = new Set<string>()
  posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)))
  return Array.from(tags).sort()
}
