<template>
    <!-- event container -->
    <homeEvent />

    <v-divider length="50%"></v-divider>

    <homeMostSales />

    <v-divider length="70%"></v-divider>

    <!-- <v-container class="h-50 w-75"> </v-container> -->
</template>

<script>
import homeEvent from "./homeEvent.vue";
import homeMostSales from "./homeMostSales.vue";
export default {
    components: {
        homeEvent,
        homeMostSales,
    },
};
</script>

<style scoped></style>
