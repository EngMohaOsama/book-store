<template>
    <v-container id="events" class="h-50 w-75 d-flex flex-column ga-2">
        <h2 class="text-primary">MOST SALES</h2>
        <v-row>
            <v-col cols="12" md="4" v-for="(item, index) in items" :key="index">
                <v-card class="mx-auto" max-width="300" hover>
                    <v-img :src="item.img" class="card-img" height="70%"></v-img>
                    <v-card-title>{{ item.title }}</v-card-title>
                    <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import dailyDealImage from "@/assets/imgs/events/Daily-Deal.jpeg";
import VipOffersImage from "@/assets/imgs/events/VIP-Offers.jpeg";
import WeekendDiscountsImage from "@/assets/imgs/events/Weekend-Discounts.jpeg";

export default {
    data() {
        return {
            items: [
                {
                    img: dailyDealImage,
                    title: "Daily Deal",
                    subtitle: "Every day is a now deal !",
                },
                {
                    img: VipOffersImage,
                    title: "Vip Offers",
                    subtitle: "secure your seat now !",
                },
                {
                    img: WeekendDiscountsImage,
                    title: "Weekend Discount",
                    subtitle: "check it now !",
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
</style>
