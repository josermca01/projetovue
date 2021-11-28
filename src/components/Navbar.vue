<template>
  <nav>
    <v-navigation-drawer app v-model="drawer" class="indigo">
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text">
          <v-btn dark @click= router :to="link.route">
            <v-list-tile-title class="white--text" >{{ link.text }}</v-list-tile-title>
          </v-btn>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar flat app>
        <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Page</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    <v-btn flat color="grey lighten-4" @click="drawer = !drawer">Drawer</v-btn>
      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right></v-icon>
      </v-btn>
    </v-toolbar>

  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        {  text: 'Dashboard', route: '/' },
        {  text: 'My Projects', route: '/projects' },
        {  text: 'Profile', route: '/profile' },
        {  text: 'About', route: '/about' },
      ]
    }
  }
}
</script>

<style>
</style>