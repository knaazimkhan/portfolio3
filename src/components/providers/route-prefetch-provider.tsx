'use client';

import { useRoutePrefetch } from '@/hooks/use-route-prefetch';

interface RoutePrefetchProviderProps {
  children: React.ReactNode;
}

export function RoutePrefetchProvider({ children }: RoutePrefetchProviderProps) {
  // Initialize route prefetching
  useRoutePrefetch();

  return <>{children}</>;
} 