// Service Worker mínimo para habilitar el banner de instalación PWA
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pasa las solicitudes directamente a la red para no interferir con Firestore
  event.respondWith(fetch(event.request));
});