import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { createPinia } from "pinia";

import Vue3Toastify from "vue3-toastify";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(Vue3Toastify, {
  position: "bottom-center",
  transition: "flip",
  theme: "dark",
});

app.mount("#app");
