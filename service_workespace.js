self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('mi-pwa-cache').then(cache => {
      return cache.addAll([
        '/',
        'index.html',
        'Filosofia.html',
        'juegos.html',
        'Programacion.html',
      ]);
    })
  );
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(respuesta => respuesta || fetch(event.request))
  );
});