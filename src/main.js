import App from "./App.svelte";

// register serviceWorker
if ("serviceWorker" in navigator) navigator.serviceWorker.register('./pwabuilder-sw.js');

const app = new App({
  target: document.body,
  props: {}
});

export default app;