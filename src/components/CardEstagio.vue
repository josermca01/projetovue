<template>
  <!-- isso pertence ao v-card, faz parte da tag dele ->  :loading="loading" -->
  <v-card height="500" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="black"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-card-title class="justify-center">{{ cardInfo.title }}</v-card-title>
    <v-card-subtitle style="text-align: center"
      >{{ cardInfo.date }}<br />{{ cardInfo.workload }}</v-card-subtitle
    >
    <v-card-text style="text-align: center">{{
      cardInfo.function
    }}</v-card-text>
  </v-card>
</template>
<script>
export default {
  props: ["cardid", "cardInfo"],
};
</script>