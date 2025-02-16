<template>
    <v-container class="my-auto d-flex justify-center">
        <v-card width="800">
            <v-list class="d-flex flex-row justify-space-around">
                <v-list-item
                    v-for="(category, index) in categories"
                    :key="index"
                    @click="filterBooksByCategory(category)"
                    :class="{ 'selected-category': selectedCategory === category }"
                    class="text-h6 text-primary"
                >
                    {{ category }}
                </v-list-item>
            </v-list>
        </v-card>
    </v-container>
</template>

<script>
import { userBookStore } from "@store/BookStore.js";

export default {
    computed: {
        categories() {
            return this.bookstore.categories;
        },
        selectedCategory() {
            return this.bookstore.selectedCategory;
        },
    },
    methods: {
        filterBooksByCategory(category) {
            this.bookstore.filterBooksByCategory(category);
        },
    },
    created() {
        this.bookstore.getBooks();
    },
    data() {
        return {
            bookstore: userBookStore(),
        };
    },
};
</script>

<style scoped></style>
