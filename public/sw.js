const staticCacheName = "version-1" //디폴트를 정의하는 캐시
const urlsToCache = [
    "/bookclipper/index.html",'/bookclipper/static/js/bundle.js','/bookclipper/manifest.json'
]

const dynamicCache = "dynamicCache"; //디폴트를 제외한 캐시 

const limitCacheSize = (name, size)=>{
    caches.open(name).then(cache=>{
        cache.keys().then(keys=>{
            if(keys.length > size){
                cache.delete(keys[0]).then(limitCacheSize(name,size))
            }
        })
    })
}

this.addEventListener('install', (event)=>{ //앱이 실행하면 딱 한번 실행함 
    event.waitUntil(
        caches.open(staticCacheName).then((cache)=>{
            console.log('Opend Cache')
            return cache.addAll(urlsToCache);
        })
    )
})

this.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cacheRes=>{
            return cacheRes || fetch(event.request).then(fetchRes=>{
                return caches.open(dynamicCache).then(cache => {
                    cache.put(event.request.url, fetchRes.clone());
                    limitCacheSize(dynamicCache,10);
                    return fetchRes;
                })
            })
        }).catch(()=>{
            if(event.request.url.indexOf('.html') > -1){
                return caches.match('/fallback.html')    
            }            
        })
    )
})

this.addEventListener('activate', event=>{
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key=> key !== staticCacheName)
                .map(key => caches.delete(key))
            )
        })
    )
})