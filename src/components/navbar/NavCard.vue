<template>
    <v-card width="800">
        <v-list :items="items" class="d-flex flex-row justify-space-between"></v-list>
        <!-- <v-divider></v-divider> -->
    </v-card>
</template>

<script>
export default {
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
};
</script>

<style scoped></style>
