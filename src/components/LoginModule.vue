<template>
    <v-card>
        <v-card-title>
            <h1 class="display-1">Login</h1>
        </v-card-title>

        <v-card-text>
            <v-form>
                <v-text-field label="Username" />

                <v-text-field type="Password" label="Password" />
            </v-form>
        </v-card-text>

        <v-card-actions>
            <v-btn variant="flat" color="blue">Register</v-btn>
            <v-btn variant="flat" color="primary">
                <v-icon icon="mdi-calendar" class="mr-2" />
                Login
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
/* .v-btn {
  color:black;
  background-color:;
} */
</style>
