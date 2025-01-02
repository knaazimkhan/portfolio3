import { BlogSectionSkeleton } from "@/components/ui/blog-section-skeleton";

export default function BlogLoading() {
  return (
    <div className="min-h-screen">
      <div className="sr-only" role="status" aria-live="polite">
        Loading blog posts...
      </div>
      <BlogSectionSkeleton />
    </div>
  );
} 