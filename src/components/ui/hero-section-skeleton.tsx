import { Skeleton } from "@/components/ui/skeleton";

export const HeroSectionSkeleton = () => {
  return (
    <section
      className="min-h-screen w-full flex flex-col items-center justify-center space-y-8 px-4 md:px-6"
      aria-label="Loading hero section"
      role="progressbar"
      aria-busy="true"
    >
      {/* Avatar skeleton */}
      <Skeleton className="w-32 h-32 rounded-full" />

      {/* Name and title skeletons */}
      <div className="space-y-4 text-center">
        <Skeleton className="h-12 w-64 mx-auto" />
        <Skeleton className="h-6 w-48 mx-auto" />
      </div>

      {/* Description skeleton */}
      <div className="space-y-2 max-w-2xl mx-auto text-center">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6 mx-auto" />
        <Skeleton className="h-4 w-4/6 mx-auto" />
      </div>

      {/* CTA buttons skeleton */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <Skeleton className="h-12 w-36" />
        <Skeleton className="h-12 w-36" />
      </div>

      {/* Social links skeleton */}
      <div className="flex justify-center gap-4 mt-6">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="w-10 h-10 rounded-full" />
        ))}
      </div>
    </section>
  );
}; 