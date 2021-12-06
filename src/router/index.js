import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tipo from '../views/Tipo.vue'
import Pokedex from '../views/Pokedex.vue'
import Perfil from '../views/Perfil.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Pokedex',
    name: 'Pokedex',
    component: Pokedex
  },
  {
    path: '/Perfil',
    name: 'Perfil',
    component: Perfil
  },
  {
    path: '/Tipo',
    name: 'Tipo',
    component: Tipo
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
