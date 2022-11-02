<template>
  <v-app>
    <v-app-bar :elevation="2" rounded="">
      <v-app-bar-title>Lazy</v-app-bar-title>
      <template v-slot:append>
        <v-btn icon="mdi-weather-night" @click="toggleTheme"></v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <NewSecret />
      <DisplaySecrets />
    </v-main>
  </v-app>
</template>

<script>
import { useTheme } from "vuetify/lib/framework.mjs";
import NewSecret from "./components/NewSecret.vue";
import DisplaySecrets from "./components/DisplaySecrets.vue";
export default {
  name: "App",
  components: {
    NewSecret,
    DisplaySecrets,
  },
  setup() {
    const theme = useTheme();

    const toggleTheme = () => {
      theme.global.name.value = theme.global.current.value.dark
        ? "light"
        : "dark";
    };

    return {
      toggleTheme,
    };
  },
  created() {
    document.title = "Lazy";
  },
};
</script>
