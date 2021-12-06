<template>
  <!-- isso pertence ao v-card, faz parte da tag dele ->  :loading="loading" -->
  <v-card height="220" class="mx-auto my-12" max-width="200">
    <v-img class="mx-auto my-12" :src="`https://cdn.traction.one/pokedex/pokemon/${cardid+1}.png`"></v-img>
    <v-card-title class="justify-center">{{ cardInfo.name }}</v-card-title>
  </v-card>
</template>
<script>
export default {
  props: ["cardid", "cardInfo"],
};
</script>