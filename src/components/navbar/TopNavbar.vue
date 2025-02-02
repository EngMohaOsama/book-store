<template>
    <v-app-bar color="background" :elevation="1" height="190">
        <v-container class="d-flex flex-column">
            <v-container class="d-flex justify-center">
                <v-app-bar-nav-icon variant="text" @click="ShowDrawer()"></v-app-bar-nav-icon>
                <v-spacer></v-spacer>
                <v-app-bar-title @click="console.log('clicked')" class="text-center">
                    <v-icon class="mr-2">mdi-book-open-blank-variant-outline</v-icon>
                    BookBox
                </v-app-bar-title>
                <v-spacer></v-spacer>
                <NavBtn>
                    <v-icon>mdi-dots-grid</v-icon>
                    <v-text>menu</v-text>
                </NavBtn>
            </v-container>
            <v-container class="d-flex justify-center">
                <NavCard />
            </v-container>
        </v-container>
    </v-app-bar>
</template>

<script>
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
    methods: {
        ShowDrawer() {
            this.$emit("toggle-drawer", !this.drawer);
        },
    },
};
</script>

<style scoped></style>
