import { defineStore } from "pinia";

export const userBookStore = defineStore("bookStore", {
    state: () => ({
        books: [
            { id: 1, title: "Book 1", isFav: false },
            { id: 2, title: "Book 2", isFav: true },
            { id: 3, title: "Book 3", isFav: false },
        ],
    }),
});
