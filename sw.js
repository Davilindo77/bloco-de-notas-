const CACHE_NAME = 'notas-v1';
// Lista de arquivos que o app vai salvar para funcionar sem internet
const ASSETS = [
  '/bloco-de-notas-/',
  '/bloco-de-notas-/index.html',
  '/bloco-de-notas-/manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
