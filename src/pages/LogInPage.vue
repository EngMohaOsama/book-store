<template>
    <v-container class="my-10 d-flex justify-center">
        <v-card width="400" class="login-page">
            <v-card-title class="text-center">
                <h1 class="display-1 text-primary">Login</h1>
            </v-card-title>

            <v-card-text>
                <v-form>
                    <v-text-field label="Username" class="mt-10" />

                    <v-text-field type="Password" label="Password" class="my-4" />
                </v-form>
            </v-card-text>

            <v-card-actions class="d-flex justify-center">
                <v-btn variant="flat" color="primary" width="50%" class="text-subtitle-1 my-2">
                    Login
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "LogInPage",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        handleLogin() {
            // Handle login logic here
            console.log("Email:", this.email);
            console.log("Password:", this.password);
        },
    },
};
</script>

<style scoped></style>
