import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { ReactNode } from 'react';

const postsDirectory = join(process.cwd(), 'content/blog');

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  author: {
    name: string;
    image: string;
  };
  content: ReactNode;
  readingTime: string;
};

export type BlogPostMeta = Omit<BlogPost, 'content'>;

export async function getBlogPosts(): Promise<BlogPostMeta[]> {
  const posts = readdirSync(postsDirectory);
  
  return posts
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const source = readFileSync(join(postsDirectory, file), 'utf-8');
      const { data } = matter(source);
      const slug = file.replace(/\.mdx$/, '');
      
      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        tags: data.tags || [],
        author: data.author || {
          name: 'Your Name',
          image: '/profile/avatar.svg',
        },
        readingTime: calculateReadingTime(source),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const source = readFileSync(join(postsDirectory, `${slug}.mdx`), 'utf-8');
    const { data, content } = matter(source);
    
    const { content: mdxContent } = await compileMDX({
      source: content,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypePrettyCode,
              {
                theme: 'github-dark',
                onVisitLine(node: any) {
                  // Prevent lines from collapsing in `display: grid` mode, and
                  // allow empty lines to be copy/pasted
                  if (node.children.length === 0) {
                    node.children = [{ type: 'text', value: ' ' }];
                  }
                },
                onVisitHighlightedLine(node: any) {
                  node.properties.className.push('line--highlighted');
                },
                onVisitHighlightedWord(node: any) {
                  node.properties.className = ['word--highlighted'];
                },
              },
            ],
            [
              rehypeAutolinkHeadings,
              {
                properties: {
                  className: ['anchor'],
                  ariaLabel: 'Link to section',
                },
              },
            ],
          ],
        },
      },
    });

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags || [],
      author: data.author || {
        name: 'Your Name',
        image: '/profile/avatar.svg',
      },
      content: mdxContent,
      readingTime: calculateReadingTime(content),
    };
  } catch (error) {
    console.error(`Error getting blog post ${slug}:`, error);
    return null;
  }
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
} 