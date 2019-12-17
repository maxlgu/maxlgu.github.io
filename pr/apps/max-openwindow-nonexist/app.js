const urlDifferentOrigin = "https://jlkasdflklksdl";

self.addEventListener('paymentrequest', e => {
  resolver = new PromiseResolver();
  e.respondWith(resolver.promise);
  e.openWindow(urlDifferentOrigin).then(client => {
    if (client === null) {
      resolver.reject('Failed to open window');
    }
  }).catch(err => {
    resolver.reject(err);
  });
});
