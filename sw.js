/* BİYOMODÜL çevrimdışı önbellek. Sürüm değişince eski önbellek silinir. Baskı dosyaları (indir/) önbelleğe alınmaz. */
const V='biyomodul-v5';
const CORE=['./','index.html','manifest.webmanifest','ikon/ikon-192.png','ikon/ikon-512.png',
 'modeller/kalp.glb','modeller/goz.glb','modeller/beyin.glb','modeller/noktalar.json',
 'lib/three.min.js','lib/OrbitControls.js','lib/GLTFLoader.js','lib/DRACOLoader.js','lib/qrcode.min.js',
 'lib/draco/draco_decoder.js','lib/draco/draco_decoder.wasm','lib/draco/draco_wasm_wrapper.js'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(V).then(c=>Promise.all(CORE.map(u=>fetch(u).then(r=>{ if(r.ok) return c.put(u,r); }).catch(()=>{}))))); self.skipWaiting(); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch',e=>{ const r=e.request; if(r.method!=='GET'||r.url.includes('/indir/')) return;
  e.respondWith(caches.open(V).then(c=>c.match(r,{ignoreSearch:true}).then(hit=>{
    const net=fetch(r).then(res=>{ if(res&&res.ok&&res.type==='basic') c.put(r,res.clone()); return res; }).catch(()=>hit);
    return hit||net; }))); });
