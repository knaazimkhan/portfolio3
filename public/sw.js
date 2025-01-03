// Skip service worker in development
if (process.env.NODE_ENV === 'development') {
  self.addEventListener('install', () => self.skipWaiting());
  self.addEventListener('activate', () => self.clients.claim());
} else {
  const CACHE_NAME = 'portfolio-cache-v1';
  const OFFLINE_URL = '/offline';

  // Install event - cache basic assets
  self.addEventListener('install', (event) => {
    event.waitUntil(
      (async () => {
        const cache = await caches.open(CACHE_NAME);
        // Cache basic assets
        await cache.addAll([
          '/',
          OFFLINE_URL,
          '/manifest.json',
          '/favicon.ico',
        ]);
        // Force the waiting service worker to become the active service worker
        await self.skipWaiting();
      })()
    );
  });

  // Activate event - clean up old caches
  self.addEventListener('activate', (event) => {
    event.waitUntil(
      (async () => {
        // Clean up old caches
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => caches.delete(name))
        );
        // Take control of all pages immediately
        await self.clients.claim();
      })()
    );
  });

  // Fetch event - network first, fallback to cache
  self.addEventListener('fetch', (event) => {
    // Only handle GET requests
    if (event.request.method !== 'GET') return;

    // Skip Chrome DevTools requests
    if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
      return;
    }

    event.respondWith(
      (async () => {
        try {
          // Try network first
          const networkResponse = await fetch(event.request);
          
          // Cache successful responses
          if (networkResponse.ok) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(event.request, networkResponse.clone());
          }
          
          return networkResponse;
        } catch (error) {
          // Network failed, try cache
          const cachedResponse = await caches.match(event.request);
          if (cachedResponse) {
            return cachedResponse;
          }

          // For navigation requests, return offline page
          if (event.request.mode === 'navigate') {
            const cache = await caches.open(CACHE_NAME);
            return cache.match(OFFLINE_URL);
          }

          throw error;
        }
      })()
    );
  });

  // Listen for messages from clients
  self.addEventListener('message', (event) => {
    if (event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
}
