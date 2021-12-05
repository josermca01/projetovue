<template>
  <v-system-bar app color="black lighten-3">
    <v-spacer></v-spacer>
    <v-icon>mdi-wifi-strength-4</v-icon>
    <v-icon>mdi-signal-cellular-outline</v-icon>
    <v-icon>mdi-battery</v-icon>
    <span
      >{{ new Date().getDate() }}/{{ new Date().getMonth() }}/{{
        new Date().getFullYear()
      }}</span
    >
  </v-system-bar>
</template>

