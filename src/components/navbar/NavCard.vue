<template>
    <v-card v-show="isVisible" width="800">
        <v-list class="d-flex flex-row justify-space-around">
            <v-list-item
                :to="item.path"
                v-for="(item, index) in items"
                :key="index"
                class="text-h6 text-primary"
            >
                {{ item.title }}
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { title: "Home", path: "/" },
                { title: "Login", path: "/login" },
                { title: "About", path: "/about" },
                { title: "Shop", path: "/shop" },
            ],
            isVisible: true,
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
        checkVisibility() {
            this.isVisible = window.innerWidth > 600;
        },
    },
};
</script>

<style scoped>
.test {
    background-color: red !important;
    border-radius: 50% !important;
}
</style>
