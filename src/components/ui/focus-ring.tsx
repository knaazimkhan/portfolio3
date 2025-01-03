import { cn } from "@/lib/utils";
import React from "react";

interface FocusRingProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const FocusRing = React.forwardRef<HTMLDivElement, FocusRingProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background rounded-lg",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

FocusRing.displayName = "FocusRing"; 