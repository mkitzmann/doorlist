/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify, type ThemeDefinition } from "vuetify";
import colors from "vuetify/util/colors";

const doorlistTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: colors.grey.lighten5,
    primary: colors.blue.base,
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "doorlistTheme",
    themes: {
      doorlistTheme,
    },
  },
});
