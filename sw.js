if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>n(e,t),d={module:{uri:t},exports:o,require:c};i[t]=Promise.all(s.map((e=>d[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-04110d4e"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-tHtbKRjE.css",revision:null},{url:"assets/index-uA-UruZt.js",revision:null},{url:"index.html",revision:"f9052ad7a1d751809e10d7ad14cab4ee"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.svg",revision:"9a05b20a3e7de4049a893b5e2b2b43ae"},{url:"apple-touch-icon.png",revision:"b657ab22c25f5df27becdb76ce640bbd"},{url:"pwa-192x192.png",revision:"fe35bf7efc0f7ca3bb25ee220fd08eaa"},{url:"pwa-512x512.png",revision:"5c20ebb46f8d646dbf23b9782cf8c673"},{url:"manifest.webmanifest",revision:"a01dae2c230068e9bb1d7c9d0a8ac49c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
