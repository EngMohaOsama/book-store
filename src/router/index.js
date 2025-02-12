// Imported pages
import bookShop from "@/pages/bookShop.vue";
import AboutPage from "@pages/AboutUsPage.vue";
import HomePage from "@pages/HomePage.vue";
import LogInPage from "@pages/LogInPage.vue";

// Vue Router
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", component: HomePage },
    { path: "/login", component: LogInPage },
    { path: "/about", component: AboutPage },
    { path: "/shop", component: bookShop },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
