const urlDifferentOrigin = "https://asdfasdfasdfs";

self.addEventListener('paymentrequest', evt => {
  evt.respondWith(new Promise((resolve) => {
    const promise = evt.openWindow(urlDifferentOrigin);
    if (!promise) {
      console.log("failed to openWindow");
      reject("Failed to openWindow");
    }
  }));
});
