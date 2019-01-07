/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "asset-manifest.json",
    "revision": "3c6441282c6e3a21cde388efcd39c45f"
  },
  {
    "url": "briefcase.png",
    "revision": "4a8718cfcd66425d8dce8cf1c9e6eb7a"
  },
  {
    "url": "favicon.png",
    "revision": "0802e28cbef22978d920895fbe764996"
  },
  {
    "url": "index.html",
    "revision": "dce6dae76460e1c4658c5eebda456a5d"
  },
  {
    "url": "manifest.json",
    "revision": "1a1f29d7890e4e4b019c2d5a42ceaac0"
  },
  {
    "url": "static/css/1.chunk.css",
    "revision": "ce464d357a78843b60ad7ca79504be94"
  },
  {
    "url": "static/js/1.chunk.js",
    "revision": "4eaaeb878fc0cebb8ff53e7f74262f8e"
  },
  {
    "url": "static/js/main.chunk.js",
    "revision": "f8432a70b71b6227e8416b9e18112acb"
  },
  {
    "url": "static/js/runtime~main.js",
    "revision": "b596c6d7641cd3e5836e0054ee70de62"
  },
  {
    "url": "static/media/color.png",
    "revision": "c7a33805ffda0d32bd2a9904c8b02750"
  },
  {
    "url": "static/media/line.gif",
    "revision": "567f57385ea3dde2c9aec797d07850d2"
  },
  {
    "url": "static/media/open-sans-v15-latin-300.eot",
    "revision": "76b56857ebbae3a5a689f213feb11af0"
  },
  {
    "url": "static/media/open-sans-v15-latin-300.svg",
    "revision": "27ef0b062b2e221df16f3bbd97c2dca8"
  },
  {
    "url": "static/media/open-sans-v15-latin-300.ttf",
    "revision": "177cc92d2e8027712a8c1724abd272cd"
  },
  {
    "url": "static/media/open-sans-v15-latin-300.woff",
    "revision": "521d17bc9f3526c690e8ada6eee55bec"
  },
  {
    "url": "static/media/open-sans-v15-latin-300.woff2",
    "revision": "60c866748ff15f5b347fdba64596b1b1"
  },
  {
    "url": "static/media/open-sans-v15-latin-700.eot",
    "revision": "148a6749baa5f658a45183ddb5ee159f"
  },
  {
    "url": "static/media/open-sans-v15-latin-700.svg",
    "revision": "2e00b2635b51ba336b4b67a5d0bc03c7"
  },
  {
    "url": "static/media/open-sans-v15-latin-700.ttf",
    "revision": "7e08cc656863d52bcb5cd34805ac605b"
  },
  {
    "url": "static/media/open-sans-v15-latin-700.woff",
    "revision": "623e3205570002af47fc2b88f9335d19"
  },
  {
    "url": "static/media/open-sans-v15-latin-700.woff2",
    "revision": "d08c09f2f169f4a6edbcf8b8d1636cb4"
  },
  {
    "url": "static/media/open-sans-v15-latin-regular.eot",
    "revision": "9dce7f01715340861bdb57318e2f3fdc"
  },
  {
    "url": "static/media/open-sans-v15-latin-regular.svg",
    "revision": "7aab4c13671282c90669eb6a10357e41"
  },
  {
    "url": "static/media/open-sans-v15-latin-regular.ttf",
    "revision": "c045b73d86803686f4cd1cc3f9ceba59"
  },
  {
    "url": "static/media/open-sans-v15-latin-regular.woff",
    "revision": "bf2d0783515b7d75c35bde69e01b3135"
  },
  {
    "url": "static/media/open-sans-v15-latin-regular.woff2",
    "revision": "cffb686d7d2f4682df8342bd4d276e09"
  },
  {
    "url": "static/media/primeicons.eot",
    "revision": "b8eccb1059ea5faaf6d8b7d457ccfd09"
  },
  {
    "url": "static/media/primeicons.svg",
    "revision": "38d77552b0353684a208177482d5b6ee"
  },
  {
    "url": "static/media/primeicons.ttf",
    "revision": "473e2a746d3c151d7dcaa626a7c84c60"
  },
  {
    "url": "static/media/primeicons.woff",
    "revision": "71bb3d79dcf18b45ae845409e7c2ada3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
