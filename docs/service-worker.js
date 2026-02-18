// Troque o número quando quiser forçar atualização imediata
const CACHE_VERSION = "v7";
const CACHE_NAME = `imc-cache-${CACHE_VERSION}`;

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.png",
  "./privacy.html",
  "./terms.html",
  "./about.html"
];

// Instala: baixa os arquivos principais
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(ASSETS);
      self.skipWaiting();
    })()
  );
});

// Ativa: apaga caches antigos e assume as abas abertas
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((k) => k.startsWith("imc-cache-") && k !== CACHE_NAME)
          .map((k) => caches.delete(k))
      );
      await self.clients.claim();
    })()
  );
});

// Estratégia: cache-first com atualização em segundo plano (stale-while-revalidate)
self.addEventListener("fetch", (event) => {
  // Só intercepta GET
  if (event.request.method !== "GET") return;

  // Evita problemas com requests que o cache não aceita (alguns cross-origin)
  const url = new URL(event.request.url);
  const sameOrigin = url.origin === self.location.origin;

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(event.request);

      const fetchAndUpdate = fetch(event.request)
        .then((resp) => {
          // só guarda no cache se for do mesmo domínio e resposta OK
          if (sameOrigin && resp && resp.status === 200) {
            cache.put(event.request, resp.clone());
          }
          return resp;
        })
        .catch(() => cached);

      return cached || fetchAndUpdate;
    })()
  );
});

// Comando vindo da página para ativar a nova versão na hora
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});
