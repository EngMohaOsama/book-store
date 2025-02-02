<template>
    <v-app class="app-background">
        <UserNavbar />

        <v-main>
            <HomePage />
        </v-main>
    </v-app>
</template>

<script>
import UserNavbar from "@navbar/UserNavbar.vue";
// import LogInPage from "@pages/LogInPage.vue";
import HomePage from "./pages/HomePage.vue";
export default {
    name: "App",
    components: { UserNavbar, HomePage },
};
</script>

<style>
/* body {
    background-color: white !important;
} */
</style>
