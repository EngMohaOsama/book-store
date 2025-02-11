<template>
    <!-- event container -->
    <v-container>
        <homeEvent />

        <v-divider></v-divider>

        <homeMostSales />

        <v-divider></v-divider>
    </v-container>

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
