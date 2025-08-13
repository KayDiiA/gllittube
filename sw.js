// sw.js: GLLIT TV PWA service worker

const CACHE_NAME = 'gllittv-v1';

const ASSETS = [
  '/', // index.html root
  '/index.html',
  '/cardcollect.html',
  '/openfirebase.html',
  '/pandora.png',
  '/privacy.html',
  '/kkberkbm.ttf',
  '/favicon.png',
  '/gllittube-light.png',
  '/gllittube.png',
  '/icon-192.png',
  '/icon-512.png',
  '/manifest.json',
  '/sw.js',
  '/tv-light.png',
  '/TV.html',
  '/tv.png',
  '/Discord.png',
  '/Reddit.png',
  '/watch.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
