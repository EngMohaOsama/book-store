<template>
    <v-container id="events" class="h-50 w-75 d-flex flex-column ga-2">
        <h2 class="text-primary my-4">MOST SALES</h2>
        <v-row>
            <v-col cols="12" md="4" v-for="(item, index) in items" :key="index">
                <v-img :src="item.img" class="card-img hover-scale" height="50%"></v-img>
                <v-card-title class="text-subtitle-2 text-center text-primary-darken-1">{{
                    item.title
                }}</v-card-title>
                <v-card-subtitle class="text-caption text-center">
                    {{ item.subtitle }}
                </v-card-subtitle>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import theDoorToDoorBookstore from "@/assets/imgs/sales/The-Door-to-Door-Bookstore.jpg";
import theForgottenBookShopInParis from "@/assets/imgs/sales/The-Forgotten-Bookshop-in-Paris.jpg";
import theFullMoonCoffeeShop from "@/assets/imgs/sales/The-Full-Moon-Coffee-Shop.jpg";

export default {
    data() {
        return {
            items: [
                {
                    img: theDoorToDoorBookstore,
                    title: "The Door-to-Door Bookstore",
                    subtitle: "Carsten Henn",
                },
                {
                    img: theForgottenBookShopInParis,
                    title: "The Forgotten Book Shop In Paris",
                    subtitle: "Madeline Martin",
                },
                {
                    img: theFullMoonCoffeeShop,
                    title: "The Full Moon Coffee Shop",
                    subtitle: "Mai Mochizuki",
                },
            ],
        };
    },
};
</script>

<style scoped>
.card-img {
    width: 100%;
    height: 70%;
    object-fit: cover;
}
.hover-scale {
    transition: transform 0.3s ease;
    transform-origin: center bottom;
}

.hover-scale:hover {
    transform: scale(1.05);
}
</style>
