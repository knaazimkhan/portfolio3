import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

export const EducationCardSkeleton = () => {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="h-full">
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

        {/* Details */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Focus Areas */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton variant="avatar" className="w-4 h-4" />
              <Skeleton variant="text" className="h-5 w-24" />
            </div>
            <div className="ml-4 space-y-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Skeleton variant="text" className="h-4 w-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton variant="avatar" className="w-4 h-4" />
              <Skeleton variant="text" className="h-5 w-24" />
            </div>
            <div className="ml-4 space-y-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Skeleton variant="text" className="h-4 w-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton variant="avatar" className="w-4 h-4" />
              <Skeleton variant="text" className="h-5 w-24" />
            </div>
            <div className="ml-4 space-y-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Skeleton variant="text" className="h-4 w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Meta Info */}
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Skeleton variant="avatar" className="w-4 h-4" />
            <Skeleton variant="text" className="h-4 w-24" />
          </div>
          <div className="flex items-center gap-1">
            <Skeleton variant="avatar" className="w-4 h-4" />
            <Skeleton variant="text" className="h-4 w-20" />
          </div>
          <Skeleton variant="button" className="h-6 w-20" />
        </div>
      </div>
    </motion.div>
  );
}; 