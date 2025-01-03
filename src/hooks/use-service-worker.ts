'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';

export const useServiceWorker = () => {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      process.env.NODE_ENV === 'production'
    ) {
      let registration: ServiceWorkerRegistration;
      let stateChangeListener: ((this: ServiceWorker, ev: Event) => void) | null = null;

      // Register service worker
      navigator.serviceWorker
        .register('/sw.js')
        .then((reg) => {
          registration = reg;
          if (process.env.NODE_ENV === 'development') {
            console.log('Service Worker registered with scope:', reg.scope);
          }

          // Check for updates
          const updateFoundListener = () => {
            const newWorker = reg.installing;
            if (newWorker) {
              stateChangeListener = () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available, show update toast
                  toast.message('Update Available', {
                    description: 'A new version is available. Click to update.',
                    action: {
                      label: 'Update',
                      onClick: () => window.location.reload(),
                    },
                  });
                }
              };
              newWorker.addEventListener('statechange', stateChangeListener);
            }
          };

          reg.addEventListener('updatefound', updateFoundListener);

          // Store cleanup function
          return () => {
            reg.removeEventListener('updatefound', updateFoundListener);
            if (stateChangeListener && reg.installing) {
              reg.installing.removeEventListener('statechange', stateChangeListener);
            }
          };
        })
        .catch((error) => {
          if (process.env.NODE_ENV === 'development') {
            console.error('Service Worker registration failed:', error);
          }
        });

      // Handle offline/online events
      const handleOnline = () => toast.success('You are back online!');
      const handleOffline = () => toast.error('You are offline. Some features may be limited.');

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      // Cleanup function
      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
        if (registration?.installing && stateChangeListener) {
          registration.installing.removeEventListener('statechange', stateChangeListener);
        }
      };
    }
  }, []);
}; 