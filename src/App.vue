<template>
    <v-app class="app-background">
        <UserNavbar />

        <v-main>
            <router-view />
        </v-main>
        <UserFooter />
    </v-app>
</template>

<script>
import UserFooter from "@components/UserFooter.vue";
import UserNavbar from "@navbar/UserNavbar.vue";

export default {
    name: "App",
    components: { UserNavbar, UserFooter },
};
</script>

<style>
/* body {
    background-color: white !important;
} */
</style>
