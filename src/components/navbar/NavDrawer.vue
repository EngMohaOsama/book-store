<template>
    <v-navigation-drawer
        class="h-screen order-12 d-flex flex-column justify-space-between align-center"
        v-model="localDrawer"
        :location="$vuetify.display.mobile ? 'bottom' : 'left'"
        temporary
    >
        <v-container>
            <v-container class="d-flex flex-column justify-space-between align-center">
                <v-list>
                    <v-list-item
                        v-for="(item, index) in items"
                        :key="index"
                        :to="item.path"
                        @click="navigateTo(item.path)"
                    >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-container>

            <v-container class="d-flex flex-column justify-center align-center">
                <v-btn color="error" @click="closeDrawer" icon="mdi-close" :location="bot"></v-btn>
            </v-container>
        </v-container>
    </v-navigation-drawer>
</template>

<script>
export default {
    props: {
        drawer: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            localDrawer: this.drawer,
            group: null,
            items: [
                { title: "Home", path: "/" },
                { title: "Login", path: "/login" },
                { title: "About", path: "/about" },
                { title: "Shop", path: "/shop" },
            ],
        };
    },
    watch: {
        drawer(newVal) {
            this.localDrawer = newVal;
        },
        localDrawer(newVal) {
            this.$emit("update:drawer", newVal);
        },
    },
    methods: {
        navigateTo(path) {
            this.$router.push(path);
            this.localDrawer = false;
        },
        closeDrawer() {
            this.localDrawer = false;
        },
    },
};
</script>

<style scoped></style>
