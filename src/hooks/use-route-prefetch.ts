'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const routes = [
  '/projects',
  '/skills',
  '/education',
  '/blog',
  '/contact',
] as const;

export const useRoutePrefetch = () => {
  const router = useRouter();

  useEffect(() => {
    // Prefetch all routes after initial page load
    const prefetchRoutes = async () => {
      try {
        // Wait for initial page load
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Prefetch routes in sequence with a small delay
        for (const route of routes) {
          router.prefetch(route);
          // Add a small delay between prefetches to avoid overwhelming the browser
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      } catch (error) {
        console.error('Error prefetching routes:', error);
      }
    };

    prefetchRoutes();
  }, [router]);
}; 