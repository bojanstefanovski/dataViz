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
    //Store the selected station.
    selectStation(state, station){
      
       state.selectedStation = station
    },
    //Station from the barometer.
    addStations(state, stations) {

      state.stations.push(stations)
    },
    //Information about the frequentation
    addStationFreq(state, station){
     
      state.stationsFreq.push(station)
    },
    //Store stations names
    addStationsNames(state, stations) {
      
      state.stationsNames = stations
      },
    

   
  }
})

export default store;