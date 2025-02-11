<template>
    <NavDrawer v-model:drawer="drawer" />
    <TopNavbar :drawer="drawer" @toggle-drawer="drawer = $event" />
</template>

<script>
import NavDrawer from "./NavDrawer.vue";
import TopNavbar from "./TopNavbar.vue";
export default {
    components: {
        TopNavbar,
        NavDrawer,
    },
    data: () => ({
        drawer: false,
    }),
};
</script>

<style scoped></style>
