<template>
    <v-container>
        <bookCategory @filter-category="filterBooksByCategory" />
        <allBooks ref="allBooks" />
    </v-container>
</template>

<script>
import allBooks from "@shop/allBooks.vue";
import bookCategory from "@shop/bookCategory.vue";

export default {
    components: {
        allBooks,
        bookCategory,
    },
    methods: {
        filterBooksByCategory(category) {
            this.$refs.allBooks.filterBooksByCategory(category);
        },
    },
};
</script>

<style scoped></style>
