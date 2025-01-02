import { Skeleton } from "@/components/ui/skeleton";

export const ProjectCardSkeleton = () => {
  return (
    <div className="group relative rounded-lg border bg-background/50 overflow-hidden backdrop-blur-sm">
      <div className="relative aspect-video overflow-hidden">
        <Skeleton variant="card" />
      </div>

      <div className="p-6 space-y-4">
        <Skeleton variant="text" className="w-3/4" />
        <Skeleton variant="text" className="w-full" />
        
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} variant="button" className="w-16 h-6" />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 p-6 pt-0">
        <Skeleton variant="button" className="w-8 h-8" />
        <Skeleton variant="button" className="w-8 h-8" />
      </div>
    </div>
  );
}; 