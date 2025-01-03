'use client';

import { useServiceWorker } from '@/hooks/use-service-worker';

interface ServiceWorkerProviderProps {
  children: React.ReactNode;
}

export function ServiceWorkerProvider({ children }: ServiceWorkerProviderProps) {
  // Initialize service worker
  useServiceWorker();

  return <>{children}</>;
} 