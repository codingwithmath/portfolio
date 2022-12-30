export type Metadata = {
  title: string
  date: string
  excerpt: string
  slug: string
}

export type Post = {
  metadata: Metadata,
  content: string,
}