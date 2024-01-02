if ('serviceWorker' in navigator) {
 navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
      console.log('Service Worker Registered', registration);
      var serviceWorker = navigator.serviceWorker.controller;
      if (serviceWorker) {
        serviceWorker.postMessage({action: 'activate'});
      }
    })
    .catch(function(error) {
      console.log('Service Worker Registration Failed', error);
    });
}



document.querySelector('#download').addEventListener('click', function() {
 if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function(registration) {
        console.log('Service Worker Registered', registration);
        var serviceWorker = navigator.serviceWorker.controller;
        if (serviceWorker) {
          serviceWorker.postMessage({action: 'activate'});
        }
      })
      .catch(function(error) {
        console.log('Service Worker Registration Failed', error);
      });
 }
});