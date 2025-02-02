<template>
    <v-hover v-slot:default="{ isHovering, props }">
        <v-btn
            v-bind="props"
            :variant="isHovering ? 'elevated' : 'text'"
            color="primary"
            min-width="92"
            rounded
        >
            <slot></slot>
        </v-btn>
    </v-hover>
</template>

<script>
export default {};
</script>

<style scoped>
.v-btn {
    transition: background-color 0.3s, color 0.3s;
}
</style>
