import { Skeleton } from "@/components/ui/skeleton";

export const EducationCardSkeleton = () => {
  return (
    <div className="h-full">
      <div className="group relative rounded-lg border bg-background/50 p-6 backdrop-blur-sm transition-shadow hover:shadow-lg">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1 space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                <Skeleton variant="avatar" className="h-full w-full" />
              </div>
              <div>
                <Skeleton variant="text" className="h-6 w-40 mb-1" />
                <Skeleton variant="text" className="h-4 w-32" />
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-4 space-y-2">
          <Skeleton variant="text" className="h-4 w-full" />
          <Skeleton variant="text" className="h-4 w-5/6" />
          <Skeleton variant="text" className="h-4 w-4/6" />
        </div>

        {/* Skills/Courses */}
        <div className="mt-4 flex flex-wrap gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} variant="button" className="h-6 w-20" />
          ))}
        </div>

        {/* Duration */}
        <div className="mt-4 flex items-center gap-2 text-sm">
          <Skeleton variant="avatar" className="h-4 w-4" />
          <Skeleton variant="text" className="h-4 w-32" />
        </div>
      </div>
    </div>
  );
}; 