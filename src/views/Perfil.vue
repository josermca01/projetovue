<template>
  <v-container>
    <h1 class="text-center font-weight-thin" style="color: dark">Perfil</h1>
    <v-container>
      <v-row>
        <v-col
          v-for="(data, i) in myCards"
          :key="i"
          cols="12"
          sm="6"
          md="4"
          xs="2"
        >
          <MyCard :cardId="i" :cardInfo="data" />
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12"> </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import MyCard from "@/components/MeuPerfil";
export default {
  name: "Home",

  components: {
    MyCard,
  },
  data() {
    return {
      titleView: this.$store.state.cards,
    };
  },
  computed: {
    myCards() {
      return this.$store.state.cards;
    },
    title() {
      return this.$store.getters.bigTitle;
    },
  },
};
</script>
