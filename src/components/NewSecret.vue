<template>
  <v-form>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="2">
          <v-text-field
            v-model="companyName"
            label="Nom du compte"
            variant="underlined"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="secret"
            :rules="rules"
            :counter="12"
            label="Secret"
            variant="underlined"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-btn icon="mdi-plus" color="success" @click="addSecret"></v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { ref } from "vue";
import { secrets } from "@/utils/storage";
import STORAGES from "@/utils/storageIndexes";
export default {
  name: "NewSecretForm",

  setup() {
    const companyName = ref("");
    const secret = ref("");
    const rules = [
      (v) => (v.length > 11 ? true : "La taille du secret est incorrecte"),
    ];
    console.log(secrets.storage);
    const addSecret = () => {
      const value = { accountName: companyName.value, secret: secret.value };
      secrets.storage.push(value);
      localStorage.setItem(
        STORAGES.SECRET_STORAGE,
        JSON.stringify(secrets.storage)
      );
    };
    return {
      companyName,
      secret,
      rules,
      addSecret,
    };
  },
};
</script>

<style>
</style>