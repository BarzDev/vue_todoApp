import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./routers";
import store from "./store";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
