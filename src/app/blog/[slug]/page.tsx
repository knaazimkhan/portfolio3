import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowLeft, FaClock, FaCalendar, FaTag } from 'react-icons/fa';
import { GradientBackground } from '@/components/ui/gradient-background';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { ParallaxScroll } from '@/components/ui/parallax-scroll';
import { getBlogPost, getBlogPosts } from '@/lib/mdx';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      authors: [post.author.name],
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: '@your_twitter',
    },
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-20 px-4">
      <GradientBackground>
        <div className="container mx-auto max-w-4xl">
          <ScrollAnimation animation="slide">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <FaArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <header className="mb-12">
              <ScrollAnimation animation="fade" delay={0.2}>
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">{post.author.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <FaCalendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock className="w-4 h-4" />
                        {post.readingTime}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              <ParallaxScroll>
                <ScrollAnimation animation="fade" delay={0.4}>
                  <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                  <p className="text-xl text-muted-foreground mb-6">{post.description}</p>
                </ScrollAnimation>
              </ParallaxScroll>

              <ScrollAnimation animation="fade" delay={0.6}>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                    >
                      <FaTag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </ScrollAnimation>
            </header>

            <ScrollAnimation animation="fade" delay={0.8}>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {post.content}
              </div>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>
      </GradientBackground>
    </article>
  );
} 