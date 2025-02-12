import { defineStore } from "pinia";

export const userBookStore = defineStore("bookStore", {
    state: () => ({
        books: [],
        loading: false,
    }),
    actions: {
        async getBooks() {
            this.loading = true;
            const res = await fetch("http://localhost:3000/books");
            const data = await res.json();

            this.books = data;
            this.loading = false;
        },
    },
});
