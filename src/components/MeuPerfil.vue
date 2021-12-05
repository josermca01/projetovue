<template>
  <!-- isso pertence ao v-card, faz parte da tag dele ->  :loading="loading" -->
  <v-card class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-black"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-card-title class="justify-center">{{ cardInfo.title }}</v-card-title>
    <v-card-subtitle style="text-align: center">{{
      cardInfo.level
    }}</v-card-subtitle>
  </v-card>
</template>
<script>
export default {
  props: ["cardid", "cardInfo"],
};
</script>