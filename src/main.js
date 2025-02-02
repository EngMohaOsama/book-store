import { vuetify } from "@plugins/vuetify.js";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// styles
import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.mount("#app");
