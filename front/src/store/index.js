import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    stations: [],
    stationsNames:[],
    stationsFreq:[],
    selectedStation: [],
    selectedStationFreq: []
  },
  mutations: {
    selectStation(state, station){
      
       state.selectedStation = station
    },
    addStations(state, stations) {

      state.stations.push(stations)
    },
    addStationFreq(state, station){
     
      state.stationsFreq.push(station)
    },
    addStationsNames(state, stations) {
      
      state.stationsNames = stations
      },
    

   
  }
})

export default store;