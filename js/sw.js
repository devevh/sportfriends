//variabilisation
var nomCache='sportfriends-v1';
var contenuCache=[
'manifest.webmanifest','sitemap.xml'
,'/images/logo.png'
,'/images/favicon.ico'
,'/images/icones/logo_800x800.png'
,'/images/icones/logo_500x500.png'
,'/images/icones/logo_200x200.png'
,'/images/icones/logo_512x512_maskable.png'
,'/images/icones/logo_512x512.png'
,'/images/icones/logo_192x192.png'
,'/images/icones/logo_32x32.png'
,'app.js'
,'/js/sw.js'
,'/app.js'
,'/js/accueil.js'
,'/js/cochesombre.js'
,'/js/compte.js'
,'/js/cookie.js'
,'/js/gestion_mode.js'
,'/js/gestionmdp.js'
,'/js/inscription.js'
,'/js/message.js'
,'/js/messages.js'
,'/js/profils.js'
,'/js/voirmdp.js'
,'/js/w3.js'
,'cg.html'
,'inscription.html'
,'reinit_mdp.html'
,'/css/w3-theme-bleu.css'
,'/css/w3.css'
,'/css/sombre.css'
,'/css/defaut.css'
,'/css/fontAwesome/css/all.css'
,'/css/fontAwesome/webfonts/fa-brands-400.ttf'
,'/css/fontAwesome/webfonts/fa-brands-400.woff2'
,'/css/fontAwesome/webfonts/fa-regular-400.ttf'
,'/css/fontAwesome/webfonts/fa-regular-400.woff2'
,'/css/fontAwesome/webfonts/fa-solid-900.ttf'
,'/css/fontAwesome/webfonts/fa-solid-900.woff2'
,'/css/fontAwesome/webfonts/fa-v4compatibility.ttf'
,'/css/fontAwesome/webfonts/fa-v4compatibility.woff2'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(nomCache).then(function(cache) {
      return cache.addAll(contenuCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();
        
        caches.open(nomCache).then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/images/logo.png');
      });
    }
  }));
});
