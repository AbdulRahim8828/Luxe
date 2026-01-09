/**
 * Service Worker for Luxe Wooden Furniture Polishing
 * Optimized caching strategy for luxury performance
 */

const CACHE_NAME = 'luxe-furniture-v1';
const STATIC_CACHE = 'luxe-static-v1';
const DYNAMIC_CACHE = 'luxe-dynamic-v1';
const IMAGE_CACHE = 'luxe-images-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/src/index.css',
  '/Luxe assets/optimized/luxe-furniture-wooden-collection-640w.webp',
  '/Luxe assets/optimized/luxe-polishing-sofa-640w.webp',
  '/Luxe assets/optimized/luxe-process-consultation-booking-640w.webp',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== IMAGE_CACHE) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests (except fonts and analytics)
  if (url.origin !== location.origin && 
      !url.hostname.includes('fonts.googleapis.com') &&
      !url.hostname.includes('fonts.gstatic.com')) {
    return;
  }

  // Handle different types of requests
  if (request.destination === 'image') {
    event.respondWith(handleImageRequest(request));
  } else if (url.pathname.includes('/Luxe assets/')) {
    event.respondWith(handleAssetRequest(request));
  } else if (url.pathname.includes('fonts.googleapis.com') || 
             url.pathname.includes('fonts.gstatic.com')) {
    event.respondWith(handleFontRequest(request));
  } else {
    event.respondWith(handlePageRequest(request));
  }
});

// Handle image requests with cache-first strategy
async function handleImageRequest(request) {
  try {
    const cache = await caches.open(IMAGE_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Return fallback image for luxury brand
    return new Response(
      '<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f5f5f5"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9a9a9a" font-family="Arial, sans-serif">Luxe Image Loading...</text></svg>',
      {
        headers: {
          'Content-Type': 'image/svg+xml',
          'Cache-Control': 'no-cache'
        }
      }
    );
  }
}

// Handle asset requests with cache-first strategy
async function handleAssetRequest(request) {
  try {
    const cache = await caches.open(STATIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    return new Response('Asset not available', { status: 404 });
  }
}

// Handle font requests with cache-first strategy
async function handleFontRequest(request) {
  try {
    const cache = await caches.open(STATIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    return new Response('Font not available', { status: 404 });
  }
}

// Handle page requests with network-first strategy
async function handlePageRequest(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page for luxury brand
    return new Response(
      `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Luxe Wooden Furniture Polishing - Offline</title>
        <style>
          body { 
            font-family: 'Poppins', sans-serif; 
            background: linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%);
            color: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            text-align: center;
          }
          .container {
            max-width: 500px;
            padding: 2rem;
          }
          h1 { 
            font-family: 'Playfair Display', serif;
            color: #D4AF37;
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }
          p { 
            font-size: 1.1rem;
            line-height: 1.6;
            color: #B8B8B8;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>LUXE</h1>
          <h2>Wooden Furniture Polishing</h2>
          <p>You're currently offline. Please check your internet connection and try again.</p>
          <p>We'll be here when you're back online to provide luxury furniture care services.</p>
        </div>
      </body>
      </html>`,
      {
        headers: {
          'Content-Type': 'text/html',
          'Cache-Control': 'no-cache'
        }
      }
    );
  }
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle any offline actions when back online
  console.log('Background sync triggered');
}

// Push notifications (if needed for luxury service updates)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/Luxe assets/optimized/luxe-brand-favicon.svg',
      badge: '/Luxe assets/optimized/luxe-brand-favicon.svg',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey
      },
      actions: [
        {
          action: 'explore',
          title: 'View Services',
          icon: '/Luxe assets/optimized/luxe-brand-favicon.svg'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/Luxe assets/optimized/luxe-brand-favicon.svg'
        }
      ]
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});