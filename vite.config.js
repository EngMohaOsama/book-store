import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), vueDevTools()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
            "@navbar": fileURLToPath(new URL("./src/components/navbar", import.meta.url)),
            "@plugins": fileURLToPath(new URL("./src/plugins", import.meta.url)),
            "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
            "@imgs": fileURLToPath(new URL("./src/assets/imgs", import.meta.url)),
            "@payout": fileURLToPath(new URL("./src/assets/imgs/payout", import.meta.url)),
        },
    },
});
