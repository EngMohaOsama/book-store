// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";

const theme = {
    defaultTheme: "light",
    themes: {
        light: {
            dark: false,
            colors: {
                background: "#FFFFFF",
                surface: "#FFFFFF",
                primary: "#009688",
                "primary-darken-1": "#3700B3",
                secondary: "#03DAC6",
                "secondary-darken-1": "#018786",
                error: "#B00020",
                info: "#2196F3",
                success: "#4CAF50",
                warning: "#FB8C00",
                navbar: "#4CAC50",
            },
        },
    },
    variations: {
        colors: ["primary"],
        lighten: 3,
        darken: 3,
    },
};

export const vuetify = createVuetify({
    components,
    directives,
    theme,
});
