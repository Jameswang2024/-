const CACHE="fruit-merge-3d-pro-v1";
const ASSETS=["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png","./assets/wood_bg.jpg","./assets/cherry.png","./assets/strawberry.png","./assets/grape.png","./assets/orange.png","./assets/apple.png","./assets/lemon.png","./assets/kiwi.png","./assets/dragon.png","./assets/pineapple.png","./assets/watermelon.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
