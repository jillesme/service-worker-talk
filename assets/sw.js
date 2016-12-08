this.addEventListener('install', ev => {
  ev.waitUntil(
    caches
    .open('FILE-CACHE0v1')
    .then(cache => cache.addAll([
      '/',
      '/scripts/index.js',
      '/css/style.css'
    ]))
  );
});
