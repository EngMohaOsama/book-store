<template>
    <v-container class="my-auto d-flex justify-center">
        <v-card width="800" v-if="isHidden">
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
        <v-card width="800" v-if="isVisible">
            <v-chip-group
                v-model="selectedCategory"
                column
                class="d-flex flex-row justify-space-around"
            >
                <v-chip
                    v-for="(category, index) in categories"
                    :key="index"
                    @click="filterBooksByCategory(category)"
                    :class="{ 'selected-category': selectedCategory === category }"
                    class="text-h6 text-primary"
                >
                    {{ category }}
                </v-chip>
            </v-chip-group>
        </v-card>
    </v-container>
</template>

<script>
import { userBookStore } from "@store/BookStore.js";

export default {
    data() {
        return {
            bookstore: userBookStore(),
            isVisible: true,
            isHidden: false,
        };
    },
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
        checkVisibility() {
            this.isVisible = window.innerWidth < 600;
            this.isHidden = !this.isVisible;
        },
    },
    created() {
        this.bookstore.getBooks();
    },

    mounted() {
        this.checkVisibility();
        window.addEventListener("resize", this.checkVisibility);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.checkVisibility);
    },
};
</script>

<style scoped></style>
