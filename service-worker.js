// File: service-worker.js

// Set the name of the cache storage
const CACHE_NAME = 'my-cache-v1';

// Define the list of files to cache
const FILES_TO_CACHE = [
 '/',
 '/index.html',
 '/style.css',
 '/quari/salem.html',
 '/quari/souleyman.html',
 '/quari/naji.html',
 '/quari/rajil.html',
 '/quari/chaikna.html',
 '/quari/hassen.html',
 '/quari/style1.css',
 '/quari/JS/salem.js',
 '/quari/JS/souleyman.js',
 '/quari/JS/naji.js',
 '/quari/JS/rajil.js',
 '/quari/JS/chaikna.js',
 '/quari/JS/hassen.js',
 '/img/icon.png',
 '/fonts/DTHULUTH.ttf'
 '/fonts/Suls.ttf'
];

// Add event listener for the 'install' event
self.addEventListener('install', (event) => {
 // Perform the install steps
 event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(FILES_TO_CACHE);
      })
 );
});

// Add event listener for the 'fetch' event
self.addEventListener('fetch', (event) => {
 // Check if the request is in the cache
 event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return the cached response, or fetch from the network
        return response || fetch(event.request);
      })
 );
});

// Add event listener for the 'activate' event
self.addEventListener('activate', (event) => {
 // Remove old caches
 const cacheWhitelist = [CACHE_NAME];
 event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
 );
});
