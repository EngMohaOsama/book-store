<template>
    <v-container class="d-flex justify-center my-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener" class="mx-4">
            <v-icon color="primary" size="36" class="hover-scale">mdi-facebook</v-icon>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener" class="mx-4">
            <v-icon color="primary" size="36" class="hover-scale">mdi-instagram</v-icon>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener" class="mx-4">
            <v-icon color="primary" size="36" class="hover-scale">mdi-twitter</v-icon>
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener" class="mx-4">
            <v-icon color="primary" size="36" class="hover-scale">mdi-youtube</v-icon>
        </a>
    </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
a {
    color: inherit;
    text-decoration: none;
    /* margin: 0 10px; */
}

a:visited {
    color: inherit;
}

.hover-scale {
    transition: transform 0.3s ease;
}

.hover-scale:hover {
    transform: scale(1.2);
}
</style>
