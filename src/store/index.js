import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects:[
      {name:"projeto1",description:"projetoPA"},
      {name:"projeto2",description:"projetoWEB"},
      {name:"projeto3",description:"projetoEletronicadigital"},
      {name:"projeto4",description:"projetoEAD"},
      {name:"projeto5",description:"projetoWEBLAB"},
      {name:"projeto6",description:"projetoPOO"},
      {name:"projeto7",description:"projetoArquitetura"},
      {name:"projeto8",description:"projetoAFWEB"}
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
