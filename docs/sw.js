// Service Worker - Auto cache cleanup & Network-first fallback
const CACHE_NAME = 'kpss-v9';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(async () => {
        const cached = await caches.match(event.request);
        if (cached) return cached;
        if (event.request.mode === 'navigate') {
          const mainIndex = await caches.match('/index.html') || await caches.match('./index.html');
          if (mainIndex) return mainIndex;
        }
        return new Response('Sayfa yuklenemedi. Lutfen yenileyin.', {
          status: 200,
          headers: { 'Content-Type': 'text/html; charset=utf-8' }
        });
      })
  );
});
