if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise((async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},s=(s,t)=>{Promise.all(s.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(s)};self.define=(s,i,c)=>{t[s]||(t[s]=Promise.resolve().then((()=>{let t={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return t;case"module":return n;default:return e(s)}}))).then((e=>{const s=c(...e);return t.default||(t.default=s),t}))})))}}define("./sw.js",["./workbox-030153e1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/BingSiteAuth.xml",revision:"48510fe94841e0f189eab42be34272b4"},{url:"/Japan_Trip_2011.pdf",revision:"162335a55b62f9e20b099cae6615c67b"},{url:"/_next/static/chunks/1ab556e6a634e2f7ff6976f207074cc06a84a07b.a70de27f0dfcabf33cb7.js",revision:"tidcjBALUPKhYmoyqCLuN"},{url:"/_next/static/chunks/489d2c465c85c2cc15a26442e5a1d8f436b66c3d.20e80e3e21951c1b1215.js",revision:"tidcjBALUPKhYmoyqCLuN"},{url:"/_next/static/chunks/commons.074f7794364aa80317a3.js",revision:"tidcjBALUPKhYmoyqCLuN"},{url:"/_next/static/chunks/framework.4b81eedf2fcdb09bf521.js",revision:"tidcjBALUPKhYmoyqCLuN"},{url:"/_next/static/chunks/main-de3a2b791e862b1cfab4.js",revision:"tidcjBALUPKhYmoyqCLuN"},{url:"/_next/static/chunks/pages/404-31630403c900faecebba.js",revision:"tidcjBALUPKhYmoyqCLuN"},{url:"/_next/static/chunks/pages/500-4eb38fe25e26b1abd0ed.js",revision:"tidcjBALUPKhYmoyqCLuN"},{url:"/_next/static/chunks/pages/_app-f85dfe1c70cdf2912c0a.js",revision:"tidcjBALUPKhYmoyqCLuN"},{url:"/_next/static/chunks/pages/_error-95fe16bb024fbb014d19.js",revision:"tidcjBALUPKhYmoyqCLuN"},{url:"/_next/static/chunks/pages/blog-6a7e9116a82c84536b56.js",revision:"tidcjBALUPKhYmoyqCLuN"},{url:"/_next/static/chunks/pages/blog/2012-11-08-japan-trip-2011-add0d5d6425c781bb954.js",revision:"tidcjBALUPKhYmoyqCLuN"},{url:"/_next/static/chunks/pages/blog/2013-04-10-bootstrap-and-asp-net-4-0-master-pages-5c9b46a04d28329f2f6b.js",revision:"tidcjBALUPKhYmoyqCLuN"},{url:"/_next/static/chunks/pages/blog/2013-05-23-jquery-time-picker-issues-and-net-e3d26d72d03732d1e5bf.js",revision:"tidcjBALUPKhYmoyqCLuN"},{url:"/_next/static/chunks/pages/blog/2013-05-23-wordpress-quicktip-display-x-number-of-posts-outside-your-blog-81f8e75ea4aa65bfd98f.js",revision:"tidcjBALUPKhYmoyqCLuN"},{url:"/_next/static/chunks/pages/blog/template-df6b7d9a23bd310419f2.js",revision:"tidcjBALUPKhYmoyqCLuN"},{url:"/_next/static/chunks/pages/gallery-bec2f36a1421dda9f80f.js",revision:"tidcjBALUPKhYmoyqCLuN"},{url:"/_next/static/chunks/pages/index-8ee76bb7f8d3c7402579.js",revision:"tidcjBALUPKhYmoyqCLuN"},{url:"/_next/static/chunks/pages/portfolio-3f4bfd75db45c17dfafa.js",revision:"tidcjBALUPKhYmoyqCLuN"},{url:"/_next/static/chunks/polyfills-5ba9c403cc30e4733b64.js",revision:"tidcjBALUPKhYmoyqCLuN"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"tidcjBALUPKhYmoyqCLuN"},{url:"/_next/static/css/8b621005781bc9929a9b.css",revision:"tidcjBALUPKhYmoyqCLuN"},{url:"/_next/static/css/b182eed4f5479d6e529d.css",revision:"tidcjBALUPKhYmoyqCLuN"},{url:"/_next/static/tidcjBALUPKhYmoyqCLuN/_buildManifest.js",revision:"tidcjBALUPKhYmoyqCLuN"},{url:"/_next/static/tidcjBALUPKhYmoyqCLuN/_ssgManifest.js",revision:"tidcjBALUPKhYmoyqCLuN"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/feed.xml",revision:"7b296be32fc26cbdc610c2c6189d6398"},{url:"/google720ae23eb610f397.html",revision:"b656528f4b8ad1c3a40974b2bd449ef3"},{url:"/humans.txt",revision:"d45e9ddf94f2f2653c4af319bb95ea50"},{url:"/manifest.json",revision:"319085021f7000d71b795d54d1b0398f"},{url:"/robots.txt",revision:"81044e0a6407ec221462d85721544a16"},{url:"/sitemap.xml",revision:"f8053bb260d46f215cdc5b7bbed0b1c5"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
