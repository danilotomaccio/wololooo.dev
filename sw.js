if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const d=e=>n(e,o),c={module:{uri:o},exports:t,require:d};i[o]=Promise.all(s.map((e=>c[e]||d(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-3Nh8IUCh.css",revision:null},{url:"assets/index-DZ6gLIX3.js",revision:null},{url:"index.html",revision:"ddcac78e27da31a78ad08ac55296b5ca"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"cfec37016e68b20add0c2ea3e54e7bdd"},{url:"pwa/pwa-192x192.png",revision:"b4aea92bf18f12f9543fc22442287952"},{url:"pwa/pwa-512x512.png",revision:"db393c833f29cc1354d4f06a70d65b0c"},{url:"manifest.webmanifest",revision:"e90491236581baa802b2d8da92557e93"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
