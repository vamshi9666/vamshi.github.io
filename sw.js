const cache_name = 'v0.1';
const cache_stuff = ['./dist/index.html', './dist/index_bundle.js'];
self.addEventListener('install', e => {
	console.log('Service worker Installed ');
	e.waitUntil(
		caches
			.open(cache_name)
			.then(cache => {
				console.log('caching start ');
				cache.addAll(cache_stuff);
			})
			.then(() => {
				self.skipWaiting();
			})
	);
});

self.addEventListener('activate', e => {
	console.log('Service worker activated');
	e.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.map(cache => {
					if (cache !== cache_name) {
						console.log('Service Worker versions are old ');
						return caches.delete(cache);
					}
				})
			);
		})
	);
});

self.addEventListener('fetch', e => {
	console.log('Service worker : fetching ');
	e.respondWith(
		fetch(e.request)
			.then(res => {
				const cloned_res = res.clone();
				caches.open(cache_name).then(cache => {
					cache.put(e.request, cloned_res);
				});
				return res;
			})
			.catch(err => {
				caches.match(e.request).then(res => res);
			})
	);
});
