<template>
    <v-footer elevation="12" class="d-flex flex-column">
        <UserFooterLinks />

        <v-divider length="70%"></v-divider>

        <UserFooterPayOut />

        <v-divider length="70%"></v-divider>

        <p class="mt-10">© Copyright <strong>Book Box</strong> 2025</p>
    </v-footer>
</template>

<script>
import UserFooterLinks from "./footer/UserFooterLinks.vue";
import UserFooterPayOut from "./footer/UserFooterPayOut.vue";
export default {
    components: {
        UserFooterLinks,
        UserFooterPayOut,
    },
};
</script>

<style scoped>
p {
    color: grey;
}
</style>
