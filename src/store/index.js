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
      { title: "Fire" ,color:"red"},
      { title: "Water" ,color:"blue"},
      { title: "Grass" ,color:"green"},
      { title: "Poison" ,color:"purple"},
      { title: "Ground" ,color:"deep-orange darken-4"},
      { title: "Stell" ,color:"blue-grey lighten-3"},
      { title: "Fighting" ,color:"deep-orange darken-4"},
      { title: "Electric" ,color:"yellow"},
      { title: "Flying" ,color:"blue lighten-4"},
      { title: "Bug" ,color:"light-green darken-3"},
      { title: "Dark" ,color:"grey darken-4"},
      { title: "Dragon" ,color:"deep-purple darken-4"},
      { title: "Fairy" ,color:"pink lighten-3"},
      { title: "Ghost" ,color:"purple darken-4"},
      { title: "Ice" ,color:"blue lighten-5"},
      { title: "Normal" ,color:"grey darken-1"},
      { title: "Psychic" ,color:"pink darken-1"},
      { title: "Rock" ,color:"brown darken-1"},
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
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=3')
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
      return state.title.toUpperCase()
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
