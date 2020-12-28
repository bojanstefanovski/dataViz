import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    stationsNames: [],
    selectedStation: []
  },
  mutations: {
    selectStation(state, station){
       state.selectedStation = station
       console.log(state.selectedStation)
    },
    addStationsNames(state, stations) {

      state.stationsNames.push(stations)
    },

   
  }
})

export default store;