import { Skeleton } from "@/components/ui/skeleton";

export const EducationCardSkeleton = () => {
  return (
    <div className="group relative rounded-lg border bg-background/50 p-6 backdrop-blur-sm">
      <div className="flex items-center gap-4 mb-4">
        <Skeleton variant="avatar" className="w-16 h-16" />
        <div className="flex-1">
          <Skeleton variant="text" className="w-40 h-6 mb-2" />
          <Skeleton variant="text" className="w-32 h-4" />
        </div>
      </div>

      <div className="space-y-3">
        {/* Degree and Field */}
        <div>
          <Skeleton variant="text" className="w-3/4 h-5 mb-1" />
          <Skeleton variant="text" className="w-2/3 h-4" />
        </div>

        {/* Date and Location */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Skeleton variant="text" className="w-24 h-4" />
          <span>•</span>
          <Skeleton variant="text" className="w-32 h-4" />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Skeleton variant="text" className="w-full h-4" />
          <Skeleton variant="text" className="w-5/6 h-4" />
        </div>

        {/* Achievements */}
        <div className="flex flex-wrap gap-2 mt-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} variant="button" className="w-24 h-7" />
          ))}
        </div>
      </div>
    </div>
  );
}; 