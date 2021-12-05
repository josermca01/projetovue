<template>
<v-app>
  <Toolbar :items ="items"/>
  <NavigationDrawer :items ="items"/>
  <v-main>
    <router-view></router-view>
  </v-main>
  <Footer/>
  <BottomNavigation/>
</v-app>
</template>

<script>

  import NavigationDrawer from '@/components/NavigationDrawer'
  import BottomNavigation from '@/components/BottomNavigation'
  import Toolbar from '@/components/Toolbar'
  import Footer from '@/components/Footer'

  export default {
    components:{
      NavigationDrawer,
      BottomNavigation,
      Toolbar,
      Footer
      
    },
    data () { 
      
      return {
        items: [
      {
        title: "Inicio",
        address: "/",
      },
      {
        title: "Sobre Mim",
        address: "/Perfil",
      },
      {
        title: "Pokedex",
        address: "/Estagio",
      },
      {
        title: "Tipos",
        address: "/Cursando",
      },
    ],
       titleView:this.$store.state.cards
        
      }
    },
    computed:{
      myCards(){
        return this.$store.state.cards
      },
      title(){
        return this.$store.getters.bigTitle
      }
    }
  }
</script>
