import HomePage from "@pages/HomePage.vue";
import LogInPage from "@pages/LogInPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", component: HomePage },
    { path: "/login", component: LogInPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
