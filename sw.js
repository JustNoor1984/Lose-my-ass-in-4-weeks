const CACHE="mijn-plan-v7-8-4-debug";const CORE=["./","./index.html","./manifest.webmanifest","./icon.svg","./assets/meal-oats.jpg","./assets/meal-pancakes.jpg","./assets/exercise-tai-1.jpg","./assets/exercise-tai-2.jpg","./assets/exercise-tai-3.jpg","./assets/exercise-tai-4.jpg"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)))});
self.addEventListener("activate",e=>{e.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x))))]))});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).then(r=>{let c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request)))});
