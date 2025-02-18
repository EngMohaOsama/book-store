<template>
    <v-app-bar color="background" :elevation="1" height="190">
        <v-container class="d-flex flex-column">
            <v-container class="d-flex justify-center">
                <v-app-bar-nav-icon variant="text" @click="ShowDrawer()">
                    <NavBtn>
                        <v-icon>mdi-dots-grid</v-icon>
                        <v-text>menu</v-text>
                    </NavBtn>
                </v-app-bar-nav-icon>

                <v-spacer></v-spacer>

                <v-app-bar-title @click="navigateHome" class="text-center pointer">
                    <v-icon class="mr-2">mdi-book-open-blank-variant-outline</v-icon>
                    BookBox
                </v-app-bar-title>

                <v-spacer></v-spacer>
                <v-badge :content="cartItemCount" color="red" overlap>
                    <v-btn color="primary" variant="elevated" icon="mdi-cart-variant" :to="'/cart'">
                    </v-btn>
                </v-badge>
            </v-container>

            <v-container class="d-flex justify-center">
                <NavCard />
            </v-container>
        </v-container>
    </v-app-bar>
</template>

<script>
import { userBookStore } from "@store/BookStore.js";
import { computed } from "vue";
import NavBtn from "./NavBtn.vue";
import NavCard from "./NavCard.vue";

export default {
    components: {
        NavBtn,
        NavCard,
    },
    props: {
        drawer: {
            type: Boolean,
            required: true,
        },
    },
    setup() {
        const bookstore = userBookStore();
        const cartItemCount = computed(() => bookstore.cart.length);

        return {
            cartItemCount,
        };
    },
    methods: {
        ShowDrawer() {
            this.$emit("toggle-drawer", !this.drawer);
        },
        navigateHome() {
            this.$router.push("/");
        },
    },
};
</script>

<style scoped>
.pointer {
    cursor: pointer;
}
</style>
