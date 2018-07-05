let staticCacheName = 'restaurant-static-v3';
const urlsToCache = [
  '/',
  'index.html',
  'restaurant.html',
  'sw_registration.js',
  'data/restaurants.json',
  'js/main.js',
  'js/dbhelper.js',
  'js/restaurant_info.js',
  'css/styles.css',
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg',
  'img/7.jpg',
  'img/8.jpg',
  'img/9.jpg',
  'img/10.jpg',
];

//Install fires when the browser sets up a service worker for the first time
self.addEventListener('install', function(event) {
  event.waitUntil(
    //cache the urls from urlsToCache and activate service worker as soon as install is finished
    caches
      .open(staticCacheName)
      .then(cache => cache.addAll(urlsToCache))
      .then(self.skipWaiting())
  );
});

//Activate fires when the the previous service worker is gone
self.addEventListener('activate', event => {
  event.waitUntil(
    //Get all cache names that exist
    //Promise.all says to wait until all promises completed
    caches.keys().then(cacheNames => Promise.all(
        //Return and delete names that do not match current static cache name
        cacheNames
          .filter(name => name.startsWith('restaurant-') && name !== staticCacheName)
          .map(name => caches.delete(name))
      )
    )
  )
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if(response) return response;
      return fetch(event.request);
    })
  );
});

