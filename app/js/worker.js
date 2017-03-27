/* ==========================================================================
    Marsonians - Service Worker
   ========================================================================== */

/* ==========================================================================
    Worker - Config
   ========================================================================== */
const config = {
    'version': '1.0.2',
    'required_assets': [
        './assets/css/style.min.css',
        './assets/fonts/bangers.woff2',

        './assets/img/loading/loading.png',
        './assets/img/loading/loading.json',
        './assets/img/start-btn.png',
        './assets/img/restart-btn.png',
        './assets/img/logo.png',
        './assets/img/astronaughty.png',
        './assets/img/background/background-alt.jpg',
        './assets/img/background/landscape.png',
        './assets/img/background/moon.png',
        './assets/img/alien-1/alien-1.png',
        './assets/img/alien-1/alien-1.json',
        './assets/img/alien-1-expl/alien-1-expl.png',
        './assets/img/alien-1-expl/alien-1-expl.json',
        './assets/img/life-expl/life-expl.png',
        './assets/img/life-expl/life-expl.json',
        './assets/img/game-over/game-over.png',
        './assets/img/game-over/game-over.json',
        './assets/img/life.png',

        './assets/audio/laser.mp3',
        './assets/audio/explosion.mp3',
        './assets/audio/life.mp3',
        './assets/audio/pain.mp3',
        './assets/audio/blop.mp3',
        './assets/audio/win.mp3',

        './assets/js/vendors.min.js',
        './assets/js/app.min.js'
    ],
    'required_templates': [
        './index.html'
    ],
    'required_urls': [
        './'
    ]
};

const allRequiredFiles = [].concat(config.required_assets, config.required_templates, config.required_urls);



/* ==========================================================================
    Worker - Helpers

    Helperfunctions
   ========================================================================== */
// Trim slash URL
const trimSlash = (str) => {
    return str.replace(/(.)\/$/, '$1');
};


// Define Scope Origin
const scopeOrigin = trimSlash(self.registration.scope);


// Is Cacheable request?
const isCacheableRequest = (request) => {
    if (request.url.startsWith(scopeOrigin)) {
        return true;
    } else {
        return false;
    }
};



/* ==========================================================================
    Worker - Install

    This runs when the worker is first installed.
    It installs all required files
   ========================================================================== */
self.addEventListener('install', (e) => {
    if (self.skipWaiting) {
        self.skipWaiting();
    }

    e.waitUntil(caches.open('marsonians--' + config.version).then((cache) => {
        return cache.addAll(allRequiredFiles);
    }).catch((err) => {
        console.warn.call(console, `install: ${err}`);
    }).then(
        self.skipWaiting()
    ));
});



/* ==========================================================================
    Worker - Activate

    This runs after the worker is installed.
    It handles the deletion of expired caches.
   ========================================================================== */
self.addEventListener('activate', (e) => {
    const cacheWhitelist = ['marsonians--' + config.version];

    if (self.skipWaiting) {
        self.skipWaiting();
    }

    e.waitUntil(caches.keys().then((keys) => {
        const deletions = keys.map((key) => {
            if (cacheWhitelist.indexOf(key) === -1) {
                return caches.delete(key);
            }
        });

        return Promise.all(deletions);
    }).catch((err) => {
        console.warn.call(console, `activate: ${err}`);
    }).then(
        self.clients.claim()
    ));
});



/* ==========================================================================
    Worker - Fetch

    This runs upon every request.
   ========================================================================== */
self.addEventListener('fetch', (e) => {
    if (isCacheableRequest(e.request)) {
        e.respondWith(caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        }).catch((err) => {
            console.warn.call(console, `fetch: ${err}`);
        }));
    }
});
