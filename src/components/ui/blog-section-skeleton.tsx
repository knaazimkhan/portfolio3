import { Skeleton } from "@/components/ui/skeleton";

export const BlogSectionSkeleton = () => {
  return (
    <section
      className="w-full py-12 space-y-8"
      aria-label="Loading blog posts"
      role="progressbar"
      aria-busy="true"
    >
      {/* Section title skeleton */}
      <div className="text-center mb-12">
        <Skeleton className="h-10 w-48 mx-auto" />
      </div>

      {/* Blog posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
        {[...Array(6)].map((_, i) => (
          <article key={i} className="space-y-4">
            {/* Post thumbnail */}
            <Skeleton className="w-full aspect-video rounded-lg" />
            
            {/* Post metadata */}
            <div className="flex items-center gap-4">
              <Skeleton className="w-16 h-4" />
              <Skeleton className="w-24 h-4" />
            </div>
            
            {/* Post title */}
            <Skeleton className="h-8 w-full" />
            
            {/* Post excerpt */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {[...Array(3)].map((_, j) => (
                <Skeleton key={j} className="h-6 w-16 rounded-full" />
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Load more button skeleton */}
      <div className="text-center mt-8">
        <Skeleton className="h-12 w-36 mx-auto" />
      </div>
    </section>
  );
}; 