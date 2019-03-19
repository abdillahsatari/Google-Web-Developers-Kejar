var CACHE_NAME = 'caches-project';
var urlsToCache = [
  '/',
  '/index.html',
  '/mygrid.css',
  '/assets/calchome.png',
  '/assets/facebooky.png',
  '/assets/instay.png',
  '/assets/itsme.jpg',
  '/assets/link.png',
  '/assets/maps.jpg',
  '/assets/profile.jpg',
  '/assets/githuby.png',
  '/project1/menghitung.html',
  '/project1/add2numbers.css',
  '/project1/add2numbers.js',
  '/project2/map.html',
  '/project2/map.css',
  '/project2/map.js',
  '/project2/images/ikan_bakar.jpg',
  '/project2/images/planB.jpg',
  '/project2/images/seafood.jpg',
  '/project2/images/steak.jpg',
  '/project2/images/warkop.jpg',
  '/project3/map.html',
  '/project3/map.css',
  '/project3/map.js',
  '/project3/maps.json',
  '/project3/images/ikan_bakar.jpg',
  '/project3/images/planB.jpg',
  '/project3/images/seafood.jpg',
  '/project3/images/steak.jpg',
  '/project3/images/warkop.jpg',
  'https://fonts.googleapis.com/css?family=Oswald',
  'https://fonts.googleapis.com/css?family=Concert+One'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
self.addEventListener('activate', function(event) {

  // var cacheWhitelist = ['cache-mws'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});