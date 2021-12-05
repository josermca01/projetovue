<template>
  <!-- Provides the application the proper gutter -->
  <v-container>
    <h1 class="text-center font-weight-thin" style="color: dark">Tipos Pokemons</h1>

    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12"> </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(data, i) in tipos"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        xs="2"
      >
        <SimpleCard :cardid="i" :cardInfo="data"/>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12"> </v-col>
    </v-row>
  </v-container>
</template>
<script>
import SimpleCard from "@/components/Cursando";
export default {
  components: {
    SimpleCard,
  },
  data() {
    return {
      titleView: this.$store.state.Tipos,
    };
  },
  computed: {
    tipos() {
      return this.$store.state.Tipos;
    },
    title() {
      return this.$store.getters.bigTitle;
    },
  },
};
</script>