"use client";

import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  text?: string;
}

export function Loading({ size = 24, text, className, ...props }: LoadingProps) {
  return (
    <div
      className={cn(
        "flex min-h-[200px] w-full flex-col items-center justify-center gap-2",
        className
      )}
      {...props}
    >
      <Loader2 className="h-[2em] w-[2em] animate-spin text-primary" style={{ fontSize: size }} />
      {text && <p className="text-sm text-muted-foreground">{text}</p>}
    </div>
  );
} 