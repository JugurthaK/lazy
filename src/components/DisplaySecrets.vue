<template>
  <v-container>
    <v-row>
      <v-col>
        <v-list lines="one">
          <v-list-item
            v-for="secret in secrets"
            :key="secret.accountName"
            :title="secret.accountName"
          >
            <template v-slot:prepend>
              <v-avatar color="blue-lighten-1">
                <v-icon color="white">mdi-lock</v-icon>
              </v-avatar>
            </template>

            <template v-slot:append>
              <v-btn
                color="grey-lighten-1"
                icon="mdi-content-copy"
                variant="text"
                v-clipboard="generateTotp(secret.secret)"
              ></v-btn>
            </template>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { secrets } from "@/utils/storage";
import totp from "totp-generator";
export default {
  setup() {
    const generateTotp = (secret) => {
      const token = totp(secret);
      return token;
    };
    return {
      generateTotp,
      secrets: secrets.storage,
    };
  },
};
</script>

<style>
</style>