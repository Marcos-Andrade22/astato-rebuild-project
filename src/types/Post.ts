export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  featuredImage: string;
  category: string;
  publishDate: string;
  author: {
    name: string;
    avatar?: string;
  };
}

export interface BlogPostData {
  id: number;
  title: string;
  content: string;
  featuredImage: string;
  author: string;
  publishDate: string;
}