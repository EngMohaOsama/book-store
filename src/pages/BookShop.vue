<template>
    <v-container>
        <v-row>
            <v-col v-for="book in paginatedBooks" :key="book.id" cols="12" sm="6" md="4">
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
            </v-col>
        </v-row>
        <v-pagination v-model="currentPage" :length="totalPages" :total-visible="5"></v-pagination>
    </v-container>
</template>

<script>
import { userBookStore } from "@store/BookStore.js";
import { computed, ref } from "vue";

export default {
    setup() {
        const bookstore = userBookStore();
        const currentPage = ref(1);
        const pageSize = 9;

        bookstore.getBooks();

        const getMaxId = () => {
            return Math.max(...bookstore.books.map((book) => book.id));
        };

        const totalBooks = ref(getMaxId());

        console.log(totalBooks.value);
        const paginatedBooks = computed(() => {
            const start = (currentPage.value - 1) * pageSize;
            const end = start + pageSize;
            return bookstore.books.slice(start, end);
        });

        const totalPages = computed(() => {
            return Math.ceil(totalBooks.value / pageSize);
        });

        return { bookstore, currentPage, paginatedBooks, totalPages };
    },
};
</script>

<style scoped>
.card-img {
    width: 100%;
    height: 70%;
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
