"use client";

import { Wifi } from "lucide-react";

export default function OfflinePage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center space-y-4 text-center">
      <div className="rounded-full bg-muted p-4">
        <Wifi className="h-8 w-8" />
      </div>
      <h1 className="text-4xl font-bold">You&apos;re Offline</h1>
      <p className="text-muted-foreground">
        Please check your internet connection and try again.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
      >
        Try Again
      </button>
    </div>
  );
} 