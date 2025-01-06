import Link from "next/link";

export default function BlogPostNotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
      <p className="text-muted-foreground text-center mb-8">
        Sorry, the blog post you&apos;re looking for doesn&apos;t exist or has been removed.
      </p>
      <Link
        href="/#blog"
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        View All Posts
      </Link>
    </main>
  );
} 