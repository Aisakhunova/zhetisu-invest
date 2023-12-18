import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css"; // Глобальный импорт стилей Bootstrap

createApp(App).use(router).mount("#app");
