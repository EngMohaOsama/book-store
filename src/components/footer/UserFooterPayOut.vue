<template>
    <v-container class="d-flex justify-space-between my-4 w-25">
        <div>
            <v-img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
                alt="PayPal"
                class="hover-scale icon-col"
                width="50"
                height="50"
                @click="navigateTo('https://www.paypal.com')"
            ></v-img>
        </div>

        <div>
            <v-img
                src="https://www.svgrepo.com/show/328112/visa.svg"
                alt="Visa"
                class="hover-scale icon-col"
                width="50"
                height="50"
                @click="navigateTo('https://www.visa.com')"
            ></v-img>
        </div>

        <div>
            <v-img
                src="https://logosarchive.com/wp-content/uploads/2021/07/American-Express-logo.svg"
                alt="American Express"
                class="hover-scale icon-col"
                width="50"
                height="50"
                @click="navigateTo('https://www.americanexpress.com')"
            ></v-img>
        </div>

        <div>
            <v-img
                src="https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mc_dla_symbol_92.png"
                alt="MasterCard"
                class="hover-scale icon-col"
                width="50"
                height="50"
                @click="navigateTo('https://www.mastercard.com')"
            ></v-img>
        </div>
    </v-container>
</template>

<script>
export default {
    methods: {
        navigateTo(url) {
            window.open(url, "_blank");
        },
    },
};
</script>

<style scoped>
.icon-col {
    /* margin: 0 10px; */
}

a {
    color: inherit;
    text-decoration: none;
}

a:visited {
    color: inherit;
}

.hover-scale {
    transition: transform 0.3s ease;
    cursor: pointer;
}

.hover-scale:hover {
    transform: scale(1.2);
}
</style>
