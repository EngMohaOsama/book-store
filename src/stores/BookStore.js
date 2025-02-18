import { defineStore } from "pinia";

export const userBookStore = defineStore("bookStore", {
    state: () => ({
        books: [],
        filteredBooks: [],
        loading: false,
        totalBooks: 0,
        categories: [],
        selectedCategory: localStorage.getItem("selectedCategory") || "All",
        currentPage: 1,
        cart: [],
    }),
    actions: {
        async getBooks() {
            this.loading = true;
            const res = await fetch("http://localhost:3000/books");
            const data = await res.json();

            this.books = data;
            this.filterBooksByCategory(this.selectedCategory);
            this.totalBooks = this.filteredBooks.length;
            this.loading = false;
            this.getCategories();
        },
        async fetchCart() {
            const res = await fetch("http://localhost:3000/cart");
            const data = await res.json();
            this.cart = data;
        },
        filterBooksByCategory(category) {
            this.currentPage = 1;
            this.selectedCategory = category;
            localStorage.setItem("selectedCategory", category);
            if (category === "All") {
                this.filteredBooks = this.books;
            } else {
                this.filteredBooks = this.books.filter((book) => book.category === category);
            }
            this.totalBooks = this.filteredBooks.length;
        },
        getCategories() {
            const categoriesSet = new Set(this.books.map((book) => book.category));
            this.categories = ["All", ...Array.from(categoriesSet)];
        },
        async addToCart(book) {
            const bookInCart = this.cart.find((item) => item.id === book.id);
            if (!bookInCart) {
                this.cart.push(book);
                await fetch("http://localhost:3000/cart", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(book),
                });
            }
        },
        async removeFromCart(bookId) {
            this.cart = this.cart.filter((book) => book.id !== bookId);
            await fetch(`http://localhost:3000/cart/${bookId}`, {
                method: "DELETE",
            });
        },
        async clearCart() {
            const cartItems = [...this.cart];
            for (const item of cartItems) {
                await fetch(`http://localhost:3000/cart/${item.id}`, {
                    method: "DELETE",
                });
            }
            this.cart = [];
        },
    },
});
