import { Skeleton } from "@/components/ui/skeleton";

export const ContactSectionSkeleton = () => {
  return (
    <div className="container mx-auto max-w-6xl">
      {/* Section Title Skeleton */}
      <div className="text-center mb-12">
        <Skeleton className="h-8 w-48 mx-auto mb-4" />
        <Skeleton className="h-4 w-96 mx-auto" />
      </div>

      {/* Contact Form Skeleton */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Left Column - Form */}
        <div className="space-y-6">
          <div>
            <Skeleton className="h-4 w-20 mb-2" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div>
            <Skeleton className="h-4 w-20 mb-2" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div>
            <Skeleton className="h-4 w-20 mb-2" />
            <Skeleton className="h-32 w-full" />
          </div>
          <Skeleton className="h-11 w-full" />
        </div>

        {/* Right Column - Contact Info */}
        <div className="space-y-8">
          <div>
            <Skeleton className="h-6 w-32 mb-4" />
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Skeleton className="h-10 w-10 rounded-lg" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-48" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Skeleton className="h-6 w-32 mb-4" />
            <div className="flex gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-10 w-10 rounded-lg" />
              ))}
            </div>
          </div>

          <div>
            <Skeleton className="h-6 w-32 mb-4" />
            <div className="space-y-4">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Skeleton className="h-10 w-10 rounded-lg" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-48" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 