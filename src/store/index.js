import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      { title: "HTML", level: "Basico"},
      { title: "CSS", level: "Basico"},
      { title: "JavaScript", level: "Basico"},
      { title: "Java", level: "Basico"},
      { title: "Vue.js", level: "Básico" },
      { title: "C", level: "Intermediario" },
    ],
    Estagio: [
      { title: "F5 Tecnologia", workload: "Estagiário", date: "Julho/2020 - Janeiro/2021", function: "Suporte tecnico" },
      { title: "Omie", workload: "Estagiário", date: "janeiro/2021 - Atualmente", function: "Suporte tecnico"},
    ],
    Tipos: [
      { title: "fire" ,color:"red"},
      { title: "water" ,color:"blue"},
      { title: "grass" ,color:"green"},
      { title: "poison" ,color:"purple"},
      { title: "ground" ,color:"deep-orange darken-4"},
      { title: "stell" ,color:"blue-grey lighten-3"},
      { title: "fighting" ,color:"deep-orange darken-4"},
      { title: "electric" ,color:"yellow"},
      { title: "flying" ,color:"blue lighten-4"},
      { title: "bug" ,color:"light-green darken-3"},
      { title: "dark" ,color:"grey darken-4"},
      { title: "dragon" ,color:"deep-purple darken-4"},
      { title: "fairy" ,color:"pink lighten-3"},
      { title: "ghost" ,color:"purple darken-4"},
      { title: "ice" ,color:"blue lighten-5"},
      { title: "normal" ,color:"grey darken-1"},
      { title: "psychic" ,color:"pink darken-1"},
      { title: "rock" ,color:"brown darken-1"},
    ],
    pokemons:[],
    title: "Tecnologias"
  },
  mutations: {
    SET_POKEMON(state,payload){
      state.pokemons=payload
    }
  },
  actions: {
    fetchPokemons({commit}){
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((res)=>{
        const payload = res.data.results
        console.log(payload)
        commit('SET_POKEMON',payload)
      })
      .catch(err=>{console.log(err)})
    }
  },
  getters: {
    bigTitle(state) {
      return state.Tipos.map(tipo=>{
        return{
          title: tipo.title.toUpperCase(),
          color: tipo.color
        }
      })
    },
    getPokemon(state){
      var pokemon = state.pokemons.map( pokemon=>{
        return{
          name: pokemon.name.toUpperCase(),
          url: pokemon.url
        }
      }
      )
      return pokemon
    }
  }
})
