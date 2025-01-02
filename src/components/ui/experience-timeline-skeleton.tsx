import { Skeleton } from "@/components/ui/skeleton";

export const ExperienceTimelineSkeleton = () => {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      {/* Timeline line */}
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-muted before:ml-[6px] sm:before:ml-[29px] before:top-8 before:-bottom-[10px]">
        <div className="absolute left-0 sm:left-[27px] flex items-center justify-center w-4 h-4">
          <Skeleton variant="avatar" className="w-4 h-4 rounded-full" />
        </div>
        
        {/* Date */}
        <div className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-muted-foreground">
          <Skeleton variant="text" className="w-16 h-4" />
        </div>
        
        {/* Content */}
        <div className="sm:pl-12">
          <div className="flex flex-col space-y-3">
            {/* Company Logo */}
            <div className="flex items-center gap-3">
              <Skeleton variant="avatar" className="w-10 h-10" />
              <div>
                <Skeleton variant="text" className="w-32 h-5 mb-1" />
                <Skeleton variant="text" className="w-24 h-4" />
              </div>
            </div>
            
            {/* Description */}
            <div className="space-y-2">
              <Skeleton variant="text" className="w-full h-4" />
              <Skeleton variant="text" className="w-5/6 h-4" />
              <Skeleton variant="text" className="w-4/6 h-4" />
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} variant="button" className="w-16 h-6" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 