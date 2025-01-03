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
      // Register service worker
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          if (process.env.NODE_ENV === 'development') {
            console.log('Service Worker registered with scope:', registration.scope);
          }

          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
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
              });
            }
          });
        })
        .catch((error) => {
          if (process.env.NODE_ENV === 'development') {
            console.error('Service Worker registration failed:', error);
          }
        });

      // Handle offline/online events
      window.addEventListener('online', () => {
        toast.success('You are back online!');
      });

      window.addEventListener('offline', () => {
        toast.error('You are offline. Some features may be limited.');
      });
    }
  }, []);
}; 