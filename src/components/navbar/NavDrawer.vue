<template>
    <v-navigation-drawer
        class="h-screen order-12 d-flex align-center"
        v-model="localDrawer"
        :location="$vuetify.display.mobile ? 'bottom' : 'left'"
        temporary
    >
        <v-list :items="items"></v-list>
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
                { title: "item 1", value: "foo" },
                { title: "item 2", value: "bar" },
                { title: "item 3", value: "fizz" },
                { title: "item 4", value: "buzz" },
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
};
</script>

<style scoped></style>
