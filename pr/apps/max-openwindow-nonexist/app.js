const urlDifferentOrigin = "https://asdfasdfasdfs";

self.addEventListener('paymentrequest', e => {
  evt.respondWith(new Promise((resolve) => {
    const promise = evt.openWindow(urlDifferentOrigin);
    if (!promise) {
      console.log("failed to openWindow");
      resolve("Failed to openWindow");
    }
  }));
});
