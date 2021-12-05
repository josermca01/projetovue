<template>
  <!-- Provides the application the proper gutter -->
  <v-container>
    <h1 class="text-center font-weight-thin" style="color: dark">
        Experiencia
    </h1>
    
      <v-row>
        <v-col
          v-for="(data, i) in pokemons"
          :key="i"
          cols="12"
          sm="8"
          md="4"
          xs="4"
        >
          <CardEstagio :cardid="i" :cardInfo="data" />
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12"> </v-col>
      </v-row>
   
  </v-container>
</template>
<script>
import CardEstagio from "@/components/CardEstagio";
export default {
  components: {
    CardEstagio,
  },
  data() {
    return {
      titleView: this.$store.state.Estagio,
    };
  },
  computed: {
    pokemons(){
      return this.$store.state.pokemons
    },
    myCards() {
      return this.$store.state.Estagio;
    },
    title() {
      return this.$store.getters.bigTitle;
    },
    getPokemon(){
      return this.$store.getters.getPokemon;
    }
  },
    async created(){
      this.$store.dispatch("fetchPokemons")
    }
};
</script>