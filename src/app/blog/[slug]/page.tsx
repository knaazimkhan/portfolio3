import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar, FaClock, FaArrowLeft, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { blogPosts } from "@/data/blog";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { AnimatedText } from "@/components/ui/animated-text";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

interface Props {
  params: Promise<{ slug: string }>;
}

function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug) ?? null;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [{ url: post.coverImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.coverImage],
    },
  };
}

const MarkdownComponents = {
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <FaArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </div>

        <ScrollAnimation animation="fade">
          <AnimatedText
            text={post.title}
            animation="bounce"
            className="text-4xl font-bold text-center mb-4"
          />
          <ParallaxScroll offset={20}>
            <p className="text-muted-foreground text-center mb-6 max-w-2xl mx-auto">
              {post.description}
            </p>
          </ParallaxScroll>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-12">
            <span className="inline-flex items-center gap-1">
              <FaCalendar className="w-4 h-4" />
              {new Date(post.publishedAt).toLocaleDateString()}
            </span>
            <span className="inline-flex items-center gap-1">
              <FaClock className="w-4 h-4" />
              {post.readingTime}
            </span>
          </div>
        </ScrollAnimation>

        <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-12">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid gap-12">
          {/* Author Info */}
          <div className="flex items-center gap-4 p-6 rounded-lg border bg-background/50 backdrop-blur-sm">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="flex-grow">
              <h3 className="font-semibold">{post.author.name}</h3>
              <p className="text-sm text-muted-foreground">{post.author.title}</p>
            </div>
            <div className="flex items-center gap-3">
              {post.author.social?.twitter && (
                <a
                  href={post.author.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
              )}
              {post.author.social?.github && (
                <a
                  href={post.author.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              )}
              {post.author.social?.linkedin && (
                <a
                  href={post.author.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Content */}
          <article className="prose prose-gray dark:prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={MarkdownComponents}
            >
              {post.content}
            </ReactMarkdown>
          </article>

          {/* Share Links */}
          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold mb-4">Share this article</h3>
            <div className="flex gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  post.title
                )}&url=${encodeURIComponent(
                  `https://naazimkhan.com/blog/${post.slug}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                  `https://naazimkhan.com/blog/${post.slug}`
                )}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 