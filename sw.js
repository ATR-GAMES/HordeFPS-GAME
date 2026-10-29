// Generated at build time (see vite.config.ts): keeps the whole game
// stored on the device so it plays offline.
const CACHE = 'hordefps-d797ab24f4';
const FILES = ["./","assets/cinzel-latin-400-normal-DnUIPmzd.woff2","assets/cinzel-latin-500-normal-B-2dbOfA.woff2","assets/cinzel-latin-600-normal-Dd5YO2UX.woff2","assets/eb-garamond-latin-400-italic-DSEbMgZu.woff2","assets/eb-garamond-latin-400-normal-BCNrxLz_.woff2","assets/eb-garamond-latin-500-normal-DehAIUv0.woff2","assets/im-fell-english-latin-400-italic-DD_ylKHZ.woff2","assets/im-fell-english-latin-400-normal-BhowGHCQ.woff2","assets/index-BITrA2da.css","assets/index-CsIHgP-1.js","favicon.svg","icon-192.png","icon-512.png","icons.svg","index.html","manifest.webmanifest"];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith('hordefps-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()),
  );
});
// Stored copy first; the network only for anything not stored (and then
// it's kept for next time).
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    caches.match(req, { ignoreSearch: true, ignoreVary: true }).then((hit) => {
      if (hit) return hit;
      if (req.mode === 'navigate') return caches.match('index.html', { ignoreVary: true }).then((page) => page || fetch(req));
      return fetch(req).then((res) => {
        if (res.ok && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      });
    }),
  );
});
