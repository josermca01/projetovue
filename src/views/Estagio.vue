<template>
  <!-- Provides the application the proper gutter -->
  <v-container>
    <h1 class="text-center font-weight-thin" style="color: dark">
        Experiencia
    </h1>
    
      <v-row>
        <v-col
          v-for="(data, i) in myCards"
          :key="i"
          cols="12"
          sm="8"
          md="6"
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
    myCards() {
      return this.$store.state.Estagio;
    },
    title() {
      return this.$store.getters.bigTitle;
    },
  },
};
</script>