<template>
    <v-container>
        <h1 class="text-center text-primary">Cart</h1>

        <div class="d-flex justify-space-around">
            <div>Product</div>
            <div class="ml-14">Price</div>
        </div>
        <v-card
            class="d-flex flex-row justify-space-around align-center"
            width="100%"
            height="100px"
            v-if="bookstore.cart.length === 0"
        >
            <v-card-title class="text-info">Your cart is empty</v-card-title>
        </v-card>
        <v-row>
            <v-col v-for="book in bookstore.cart" :key="book.id" cols="12">
                <v-card
                    class="d-flex flex-row justify-space-around align-center"
                    width="100%"
                    height="100px"
                >
                    <v-btn color="error" variant="text" @click="bookstore.removeFromCart(book.id)">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    <v-img :src="book.img" :style="{ width: '50px', height: '50px' }"></v-img>
                    <v-card-subtitle :style="{ width: '40%', textAlign: 'center' }">{{
                        book.title
                    }}</v-card-subtitle>
                    <v-card-subtitle :style="{ width: '40%', textAlign: 'center' }">
                        {{ book.price }} <span>EGP</span>
                    </v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
        <div
            class="d-flex flex-row justify-space-around align-center my-10"
            width="100%"
            height="100px"
            v-if="bookstore.cart.length !== 0"
        >
            <v-btn color="primary" @click="buyItems">Buy</v-btn>
            <v-btn color="error" @click="clearCart">Clear Cart</v-btn>
            <p>Total Price: {{ totalPrice }} <span>EGP</span></p>
        </div>
    </v-container>
</template>

<script>
import { userBookStore } from "@store/BookStore.js";

export default {
    data() {
        return {
            bookstore: userBookStore(),
        };
    },
    computed: {
        totalPrice() {
            return this.bookstore.cart.reduce((total, book) => total + book.price, 0);
        },
    },
    methods: {
        buyItems() {
            alert("Purchase successful!");
        },
        clearCart() {
            this.bookstore.clearCart();
        },
    },
};
</script>

<style scoped>
img {
    background-size: cover;
}
span {
    font-size: 0.5rem;
}
</style>
