import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

export const ExperienceTimelineSkeleton = ({ index }: { index: number }) => {
  return (
    <motion.div
      className={`relative flex flex-col md:flex-row gap-8 md:gap-16 mb-12 ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 mt-6 z-10">
        <Skeleton variant="avatar" className="w-4 h-4 rounded-full" />
      </div>

      {/* Content */}
      <div className="flex-1 md:text-right">
        <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border shadow-sm">
          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <Skeleton variant="avatar" className="w-12 h-12 rounded-lg" />
            <div className="flex-grow">
              <Skeleton variant="text" className="w-48 h-6 mb-2" />
              <Skeleton variant="text" className="w-32 h-4" />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Skeleton variant="avatar" className="w-4 h-4" />
              <Skeleton variant="text" className="w-32 h-4" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton variant="avatar" className="w-4 h-4" />
              <Skeleton variant="text" className="w-24 h-4" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton variant="avatar" className="w-4 h-4" />
              <Skeleton variant="text" className="w-20 h-4" />
            </div>
          </div>

          {/* Skills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} variant="button" className="w-16 h-6" />
            ))}
          </div>
        </div>
      </div>

      {/* Empty space for timeline alignment */}
      <div className="flex-1" />
    </motion.div>
  );
}; 