
// On écoute l'évènement install pour effectuer les actions de démarrage
self.addEventListener('install', (event) => {
    event.waitUntil(     
    caches.open('v1').then((cache) => {
    return cache.addAll([
            './index.html',
            './img/icon/tile70x70.png',
            './img/icon/tile310x310.png',
            './css/bootstrap.min.css',
            './css/bootstrap.min.css.map',
            './js/bootstrap.bundle.min.js',
            './js/app.js',
            './js/bootstrap.bundle.min.js.map',
            './manifest.json',
            './sw.js'
          ]);
        })
      );
    });
  
  
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((resp) => {
 
        return resp || fetch(event.request).then((response) => {
            return caches.open('v1').then((cache) => {
              cache.put(event.request, response.clone());
              return response;
            });
          });
        })
      );
    });