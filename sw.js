var C="mi-semana-v2",F=["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png","./apple-touch-icon.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C}).map(function(x){return caches.delete(x)}))}));self.clients.claim()});
function put(r,n){var cp=n.clone();caches.open(C).then(function(c){c.put(r,cp)});return n}
self.addEventListener("fetch",function(e){var r=e.request;if(r.method!=="GET")return;
 if(r.mode==="navigate"){e.respondWith(fetch(r).then(function(n){return put(r,n)}).catch(function(){return caches.match(r).then(function(m){return m||caches.match("./index.html")})}));return}
 e.respondWith(caches.match(r).then(function(m){return m||fetch(r).then(function(n){return put(r,n)})}))});
