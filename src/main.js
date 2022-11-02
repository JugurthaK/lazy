import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { VueClipboard } from "@soerenmartius/vue3-clipboard";

loadFonts();

createApp(App).use(vuetify).use(VueClipboard).mount("#app");
