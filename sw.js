// we'll version our cache (and learn how to delete caches in
// some other post)
var CACHE_NAME = 'prasans.v1::static';

var urlsToCache = [
    '/',
    '/assets/js/application.js',
    '/assets/css/home.css',
    '/assets/images/home.png'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                    // Cache hit - return response
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});