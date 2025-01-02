import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: "default" | "card" | "text" | "avatar" | "button";
}

export const Skeleton = ({ className, variant = "default", ...props }: SkeletonProps) => {
  const baseClass = "animate-pulse bg-muted rounded-md";
  
  const variants = {
    default: "w-full h-4",
    card: "w-full aspect-video",
    text: "h-4 w-[250px]",
    avatar: "w-12 h-12 rounded-full",
    button: "h-10 w-24",
  };

  return (
    <div
      className={cn(baseClass, variants[variant], className)}
      {...props}
      role="status"
      aria-label="Loading..."
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}; 