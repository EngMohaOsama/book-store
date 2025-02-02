<template>
    <div class="home">
        <h1 class="w-25">This Is Homepage</h1>
        <v-container fluid>
            <v-row>
                <v-btn density="default">push me</v-btn>
            </v-row>
            <v-row>
                <v-btn density="comfortable">push me</v-btn>
            </v-row>
            <v-row>
                <v-btn density="compact">push me</v-btn>
            </v-row>
        </v-container>
        <v-btn density="default">push me</v-btn>
        <v-btn density="comfortable">push me</v-btn>
        <v-btn density="compact">push me</v-btn>
        <v-bottom-sheet>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" text="Click Me"></v-btn>
            </template>

            <v-card
                title="Bottom Sheet"
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, eos? Nulla aspernatur odio rem, culpa voluptatibus eius debitis dolorem perspiciatis asperiores sed consectetur praesentium! Delectus et iure maxime eaque exercitationem!"
            ></v-card>
        </v-bottom-sheet>
    </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
