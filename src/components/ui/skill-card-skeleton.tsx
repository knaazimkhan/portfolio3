import { Skeleton } from "@/components/ui/skeleton";

// interface SkillCardSkeletonProps {
//   index?: number;
// }

export const SkillCardSkeleton: React.FC = () => {
  return (
    <div className="group relative rounded-lg border bg-background/50 p-6 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Skeleton variant="avatar" className="w-6 h-6" />
        </div>
        <div>
          <Skeleton variant="text" className="w-32 h-5 mb-1" />
          <Skeleton variant="text" className="w-48 h-4" />
        </div>
      </div>

      <div className="space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="group relative rounded-lg border p-3 transition-colors hover:border-primary"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Skeleton variant="avatar" className="w-5 h-5" />
                <Skeleton variant="text" className="w-24" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton variant="text" className="w-16 h-4" />
                <Skeleton variant="text" className="w-20 h-5 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 