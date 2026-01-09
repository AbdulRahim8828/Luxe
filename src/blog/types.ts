// Simple blog types
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  keywords: string;
  content?: string;
}

export interface BlogConfig {
  postsPerPage: number;
  featuredPostsLimit: number;
}