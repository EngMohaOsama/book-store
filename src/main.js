// Component: App.vue
import App from "./App.vue";
// Router
import router from "./router";
// Vuetify
import { vuetify } from "@plugins/vuetify.js";
// Store
import { createPinia } from "pinia";

import { createApp } from "vue";

import { userBookStore } from "./stores/BookStore";

// styles
import "./assets/main.css";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(vuetify);

const store = userBookStore();
store.fetchCart();

app.mount("#app");
