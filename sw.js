const CACHE_PREFIX = 'sos-online-' + self.registration.scope;
const CACHE_NAME = CACHE_PREFIX + 'v15';
const ASSETS = [
  './',
  './index.html',
  './sos-manifest-2026.json',
  './manifest.json',
  './favicon.svg',
  './safari-pinned-tab.svg',
  './favicon-32x32.png',
  './favicon-16x16.png',
  './apple-touch-icon.png',
  './red-sos-192.png',
  './red-sos-512.png',
  './red-sos-maskable-192.png',
  './red-sos-maskable-512.png',
  './favicon.ico'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k.startsWith(CACHE_PREFIX) && k !== CACHE_NAME).map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);

  // Ses ve müzik dosyalarını (Range / 206 streaming) Service Worker önbelleğinden tamamen muaf tut
  // Böylece tarayıcı medya motoru doğrudan ve gecikmesiz olarak MP3 streaming yapabilir
  if (
    e.request.destination === 'audio' ||
    url.pathname.includes('/music/') ||
    url.pathname.endsWith('.mp3') ||
    url.hostname.includes('archive.org')
  ) {
    return;
  }

  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
