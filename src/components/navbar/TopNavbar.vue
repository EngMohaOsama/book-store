<template>
    <v-app-bar color="background" :elevation="1" height="190">
        <v-container class="d-flex flex-column">
            <v-container class="d-flex justify-center">
                <v-app-bar-nav-icon v-show="isVisible" variant="text" @click="ShowDrawer()">
                    <v-btn icon="mdi-dots-grid" color="primary" variant="elevated"> </v-btn>
                </v-app-bar-nav-icon>

                <v-spacer></v-spacer>

                <v-app-bar-title @click="navigateHome" class="text-center pointer">
                    <v-icon class="mr-2">mdi-book-open-blank-variant-outline</v-icon>
                    <span v-show="isHidden">BookBox</span>
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
import NavCard from "./NavCard.vue";

export default {
    components: {
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
    data() {
        return {
            isVisible: true,
            isHidden: false,
        };
    },
    mounted() {
        this.checkVisibility();
        window.addEventListener("resize", this.checkVisibility);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.checkVisibility);
    },

    methods: {
        ShowDrawer() {
            this.$emit("toggle-drawer", !this.drawer);
        },
        navigateHome() {
            this.$router.push("/");
        },
        checkVisibility() {
            this.isVisible = window.innerWidth < 600;
            this.isHidden = !this.isVisible;
        },
    },
};
</script>

<style scoped>
.pointer {
    cursor: pointer;
}
</style>
