export type Author = {
  name: string;
  avatar: string;
  title: string;
  bio?: string;
  social?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
};

export type BlogCategory = 
  | "Web Development"
  | "Mobile Development"
  | "DevOps"
  | "UI/UX"
  | "Career"
  | "Tutorial"
  | "Technology";

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  category: BlogCategory;
  tags: string[];
  author: Author;
  coverImage: string;
  readingTime: string;
  featured?: boolean;
  draft?: boolean;
  views?: number;
  likes?: number;
}; 