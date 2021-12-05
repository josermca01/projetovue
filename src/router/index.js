import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cursando from '../views/Cursando.vue'
import Estagio from '../views/Estagio.vue'
import Perfil from '../views/Perfil.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Estagio',
    name: 'Estagio',
    component: Estagio
  },
  {
    path: '/Perfil',
    name: 'Perfil',
    component: Perfil
  },
  {
    path: '/Cursando',
    name: 'Cursando',
    component: Cursando
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
