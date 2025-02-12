<template>
    <v-container>
        <v-row>
            <v-col v-for="book in paginatedBooks" :key="book.id" cols="12" sm="6" md="4">
                <v-card class="card">
                    <v-img :src="book.img" class="card-img hover-scale"></v-img>
                    <v-card-title class="text-subtitle-2 text-center text-primary-darken-1">{{
                        book.title
                    }}</v-card-title>
                    <v-card-subtitle class="text-caption text-center">{{
                        book.author
                    }}</v-card-subtitle>
                    <v-card-subtitle class="text-caption text-center">
                        <span>EGP</span> {{ book.price }}
                    </v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
        <v-pagination v-model="currentPage" :length="totalPages" :total-visible="5"></v-pagination>
    </v-container>
</template>

<script>
import { userBookStore } from "@store/BookStore.js";

export default {
    data() {
        return {
            bookstore: userBookStore(),
            currentPage: 1,
            pageSize: 9,
        };
    },
    computed: {
        paginatedBooks() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.bookstore.books.slice(start, end);
        },
        totalPages() {
            return Math.ceil(this.bookstore.totalBooks / this.pageSize); // استخدام totalBooks من المخزن
        },
    },
    created() {
        this.bookstore.getBooks();
    },
};
</script>

<style scoped>
.card {
    width: 60%;
}
.card-img {
    width: 100%;

    object-fit: cover;
}
span {
    font-size: 0.5rem;
}
.hover-scale {
    transition: transform 0.3s ease;
    transform-origin: center bottom;
}

.hover-scale:hover {
    transform: scale(1.05);
}
</style>
