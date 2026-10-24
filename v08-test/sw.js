
const CACHE_NAME = 'mystic-oracle-v08-2';

const CARD_NAMES = [
  '00_fool.png',
  '01_magician.png',
  '02_high_priestess.png',
  '03_empress.png',
  '04_emperor.png',
  '05_hierophant.png',
  '06_lovers.png',
  '07_chariot.png',
  '08_strength.png',
  '09_hermit.png',
  '10_wheel_of_fortune.png',
  '11_justice.png',
  '12_hanged_man.png',
  '13_death.png',
  '14_temperance.png',
  '15_devil.png',
  '16_tower.png',
  '17_star.png',
  '18_moon.png',
  '19_sun.png',
  '20_judgement.png',
  '21_world.png'
];

const OFFLINE_FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  ...CARD_NAMES.map(name => './images/' + name)
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(OFFLINE_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      caches.keys().then(keys =>
        Promise.all(
          keys
            .filter(k =>
              k.startsWith('mystic-oracle-') &&
              k !== CACHE_NAME
            )
            .map(k => caches.delete(k))
        )
      ),
      self.clients.claim()
    ])
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;

  if (
    request.method !== 'GET' ||
    new URL(request.url).origin !== self.location.origin
  ) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put('./index.html', copy));
          }
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    fetch(request)
      .then(response => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(request, copy));
        }
        return response;
      })
      .catch(() => caches.match(request))
  );
});
