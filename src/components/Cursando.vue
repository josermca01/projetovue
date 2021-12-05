<template>
  <!-- isso pertence ao v-card, faz parte da tag dele ->  :loading="loading" -->
  <v-card height="70" class="mx-auto my-12" max-width="200" :color=cardInfo.color>
    <template slot="progress">
    </template>

    <v-card-title class="justify-center">{{ cardInfo.title }}</v-card-title>
  </v-card>
</template>
<script>
export default {
  props: ["cardid", "cardInfo"],
};
</script>