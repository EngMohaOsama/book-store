<template>
    <v-card width="400" class="login-page">
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
            <v-btn variant="flat" color="primary"> Login </v-btn>
        </v-card-actions>
    </v-card>
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

<style scoped>
.login-page {
    max-width: 400px;
    margin: 0 auto;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.login-page h1 {
    text-align: center;
}

.login-page form div {
    margin-bottom: 1em;
}

.login-page label {
    display: block;
    margin-bottom: 0.5em;
}

.login-page input {
    width: 100%;
    padding: 0.5em;
    box-sizing: border-box;
}

.login-page button {
    width: 100%;
    padding: 0.5em;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.login-page button:hover {
    background-color: #0056b3;
}
</style>
