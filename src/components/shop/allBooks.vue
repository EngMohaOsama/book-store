<template>
    <v-container>
        <v-row>
            <v-col v-for="book in paginatedBooks" :key="book.id" cols="12" sm="6" md="4">
                <v-card class="card" width="60%">
                    <v-img :src="book.img" class="card-img hover-scale"></v-img>

                    <v-card-title class="text-subtitle-2 text-center text-primary-darken-1">
                        {{ book.title }}
                    </v-card-title>

                    <v-card-subtitle class="text-caption text-center">
                        {{ book.author }}
                    </v-card-subtitle>

                    <v-card-subtitle class="text-caption text-center">
                        {{ book.price }} <span>EGP</span>
                    </v-card-subtitle>
                    <v-card-actions class="d-flex justify-space-around">
                        <v-btn @click="addToCart(book)" color="primary" icon>
                            <v-icon>mdi-cart-plus</v-icon>
                        </v-btn>
                        <v-btn @click="removeFromCart(book.id)" color="red" icon>
                            <v-icon>mdi-cart-remove</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-pagination
            v-model="bookstore.currentPage"
            :length="totalPages"
            :total-visible="5"
        ></v-pagination>
    </v-container>
</template>

<script>
import { userBookStore } from "@store/BookStore.js";

export default {
    data() {
        return {
            bookstore: userBookStore(),
            pageSize: 12,
        };
    },
    computed: {
        paginatedBooks() {
            const start = (this.bookstore.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.bookstore.filteredBooks.slice(start, end);
        },
        totalPages() {
            return Math.ceil(this.bookstore.totalBooks / this.pageSize);
        },
    },
    methods: {
        addToCart(book) {
            this.bookstore.addToCart(book);
        },
        removeFromCart(bookId) {
            this.bookstore.removeFromCart(bookId);
        },
        filterBooksByCategory(category) {
            this.bookstore.filterBooksByCategory(category);
        },
    },
    created() {
        this.bookstore.getBooks();
    },
};
</script>

<style scoped>
span {
    font-size: 0.5rem;
}
</style>
