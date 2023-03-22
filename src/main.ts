import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/global.css";
import "element-plus/dist/index.css";
import router from "./router";
import { createPinia } from "pinia";

createApp(App).use(router).use(createPinia()).mount("#app");
