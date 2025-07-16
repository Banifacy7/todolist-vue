import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

console.log(" 1 Запустился Main.ts");

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
