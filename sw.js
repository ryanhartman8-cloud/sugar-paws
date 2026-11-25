// Sugar Paws service worker.
//
// Deliberately NETWORK-FIRST. This project has already been bitten once by
// caching making a fresh Netlify deploy invisible, so the network always wins
// when it is reachable; the cache exists only so the game still runs on a
// plane, in a car, or on flaky hotel wifi. Bump CACHE whenever the shell list
// below changes and the old cache is dropped on activate.
const CACHE = "sugar-paws-v1";

const SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./manifest.webmanifest",
  "./js/game.js",
  "./js/levels.js",
  "./js/physics.js",
  "./js/save.js",
  "./js/audio.js",
  "./js/input.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./apple-touch-icon-180.png",
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      // one bad URL would reject addAll and leave no cache at all, so each
      // file is fetched on its own and a miss is simply skipped
      .then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if(req.method !== "GET") return;
  // leave cross-origin alone (Google Fonts): the CSS already falls back to
  // system fonts if they never arrive
  if(new URL(req.url).origin !== self.location.origin) return;

  e.respondWith(
    fetch(req)
      .then(res => {
        if(res && res.ok){
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(req).then(hit => hit || caches.match("./index.html")))
  );
});

// lets the page ask a waiting worker to take over immediately
self.addEventListener("message", e => { if(e.data === "skipWaiting") self.skipWaiting(); });
