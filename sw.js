// Service worker mínimo: só o necessário para a app ser instalável.
// Sem cache deliberadamente — a página vem sempre da rede, evitando versões presas.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
