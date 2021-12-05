  <template>
  <v-main>
    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h3 class="text-h2 font-weight-thin mb-4" style="color: black">
            Desenvolvimento Web
          </h3>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
import MyCard from "@/components/MyCard";
export default {
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
  
  