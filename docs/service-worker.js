const CACHE_NAME = "imc-cache"; // pode ficar fixo
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.png"
];

// Instala: apaga o cache antigo e baixa tudo de novo (sempre a versão mais recente)
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      await caches.delete(CACHE_NAME);
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(ASSETS);
      self.skipWaiting(); // ativa mais rápido
    })()
  );
});

// Ativa e assume as abas abertas
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Estratégia: tenta cache primeiro, mas atualiza em segundo plano
self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(event.request);

      const networkFetch = fetch(event.request)
        .then((resp) => {
          // salva a versão nova no cache
          cache.put(event.request, resp.clone());
          return resp;
        })
        .catch(() => cached);

      // devolve rápido do cache, e atualiza em background
      return cached || networkFetch;
    })()
  );
});

// Recebe comando da página para atualizar na hora
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});
