import { Metadata } from 'next';
import { GradientBackground } from '@/components/ui/gradient-background';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { BlogList } from '@/components/blog/blog-list';
import { getBlogPosts } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="py-20 px-4">
      <GradientBackground>
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Blog</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Thoughts, ideas, and insights about software development, design, and technology.
              </p>
            </div>
          </ScrollAnimation>

          {posts.length > 0 ? (
            <BlogList initialPosts={posts} />
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </GradientBackground>
    </section>
  );
} 