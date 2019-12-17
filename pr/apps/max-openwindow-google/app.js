const urlDifferentOrigin = "https://www.google.com";

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
  // evt.respondWith(new Promise((resolve) => {
  //   const promise = evt.openWindow('https://www.google.com');
  //   if (!promise) {
  //     console.log("failed to openWindow");
  //     resolve("Failed to openWindow");
  //   }
  // }));
});
