<template>
    <v-card width="800">
        <v-list class="d-flex flex-row justify-center">
            <v-list-item v-for="(item, index) in items" :key="index">
                <RouterLink :to="item.path" class="nav-link text-h6">{{ item.title }}</RouterLink>
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
                // { title: "books", path: "/" },
            ],
        };
    },
};
</script>

<style scoped>
/* .v-list-item {
    margin: 0 10px;
} */

/* .nav-link {
    color: #333;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s, color 0.3s;
    padding: 5px 10px;
    border-radius: 4px;
} */

/* .nav-link:hover {
    background-color: ;
    color: white;
} */
</style>
