import { Skeleton } from "@/components/ui/skeleton";

export const TestimonialsSkeleton = () => {
  return (
    <section
      className="w-full py-12 space-y-8"
      aria-label="Loading testimonials"
      role="progressbar"
      aria-busy="true"
    >
      {/* Section title skeleton */}
      <div className="text-center mb-12">
        <Skeleton className="h-10 w-64 mx-auto" />
      </div>

      {/* Testimonials slider skeleton */}
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="relative">
          {/* Navigation arrows skeleton */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full">
            <Skeleton className="w-10 h-10 rounded-full" />
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <Skeleton className="w-10 h-10 rounded-full" />
          </div>

          {/* Testimonial card */}
          <div className="bg-card rounded-lg p-6 md:p-8 space-y-6">
            {/* Avatar and info */}
            <div className="flex items-center gap-4">
              <Skeleton className="w-16 h-16 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>

            {/* Quote */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-11/12" />
              <Skeleton className="h-4 w-10/12" />
              <Skeleton className="h-4 w-9/12" />
            </div>

            {/* Company logo */}
            <div className="pt-4">
              <Skeleton className="h-8 w-32" />
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="w-2 h-2 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 