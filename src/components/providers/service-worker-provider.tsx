'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';

export const ServiceWorkerProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      process.env.NODE_ENV === 'production'
    ) {
      let registration: ServiceWorkerRegistration;

      const registerServiceWorker = async () => {
        try {
          // Unregister any existing service workers first
          const registrations = await navigator.serviceWorker.getRegistrations();
          await Promise.all(registrations.map(reg => reg.unregister()));

          // Register new service worker
          registration = await navigator.serviceWorker.register('/sw.js');

          // Handle updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (!newWorker) return;

            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                toast.message('Update Available', {
                  description: 'A new version is available. Click to update.',
                  action: {
                    label: 'Update',
                    onClick: () => {
                      newWorker.postMessage({ type: 'SKIP_WAITING' });
                      window.location.reload();
                    },
                  },
                });
              }
            });
          });

          // Handle offline/online events
          window.addEventListener('online', () => toast.success('You are back online!'));
          window.addEventListener('offline', () => toast.error('You are offline. Some features may be limited.'));

        } catch (error) {
          console.error('Service Worker registration failed:', error);
        }
      };

      // Register service worker
      registerServiceWorker();

      // Cleanup function
      return () => {
        if (registration) {
          registration.unregister().catch(console.error);
        }
      };
    }
  }, []);

  return children;
}; 