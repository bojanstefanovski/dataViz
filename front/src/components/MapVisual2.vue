<template>
<div>
  <div class="map" v-if="isFetched">
    <LMap  @ready="onReady" @locationfound="onLocationFound" :zoom="zoom" :center="center" >
      <LTileLayer :options="{ minZoom: 6 }" :url="url"></LTileLayer>

      <ul >
        <li  v-for="(l,i) in latlong" :key="i">
            <LMarker :lat-lng="l" > 
                <LPopup class="popup p-2"> 
                    <label class="text-center p-2"> {{i}} </label>
                    <button class="button p-1 bg-gray-700 rounded text-xs hover:bg-gray-900 text-white " @click="selectStation(i)"> Show details </button> 
                </LPopup> 
            </LMarker>

        </li>
      </ul>


    </LMap>

  </div>
  <br/>
    <br/>

  </div>

</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";

import axios from "axios"
import store from '../store';
export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
      zoom: 5.6,
      center: [47.1367826,1.5711133],
      bounds: null,
      results : null,
      country : [],
      latlong : {},
     
      stations: [],
      isFetched: false,

      responseList: []
    };
  },
  methods: {
    onReady (mapObject) {
  mapObject.locate();
  },
    onLocationFound(location){
      console.log(location)
  },

  //Gets the name station from the store
  //Filter all the paranteses
  //Replaces all the spaces with " - "
  //Pushesh stations names to the store for ruther use
  getStations(){
        store.state.stations[0].forEach(element => {  
        let station = element["Gare"].replace(/ *\([^)]*\) */g, "")
        this.stations.push(station.replace(/\s/g, '-'))
       
    });
      store.commit("addStationsNames", this.stations)
     
    },
  async getStationCoordinate(){
        let self = this
      axios.get('https://data.sncf.com/api/records/1.0/search/?dataset=liste-des-gares&q='+this.buildQuery()+'&rows=10000', { //Fali name u attribut, napravi ja listat da go zachuvuva i imeto na stanicata.
         })
        .then(function (response) {      
        self.responseList= response['data'].records
        self.getLatLong()
        self.$emit("fetched", true)
        })
        .catch(function (error) {
        console.log(error);
        }); 
    },
    buildQuery(){
        let output = ""
        for(let i=0; i<this.stations.length-1; i=i+2){
            output= output+this.stations[i]+"+or+"+this.stations[i+1]
            if(i!==this.stations.length-2){
                output=output+"+or+"
            }
        }
       
        return output
    },
  //Creates a list with station name and it's coordinates
    getLatLong(){

        for(let i=0; i<this.responseList.length; i++){
            if(this.stations.includes(this.responseList[i].fields.libelle.toUpperCase())){
                this.latlong[this.responseList[i].fields.libelle]= this.responseList[i].geometry.coordinates.reverse()
            }
        }
        
        this.isFetched = true
    },
    //When station is selected on the map we create an object with it's barometer information and it's frequentation. We store this object in the store
    selectStation(name){
      //Format the name
      let object ={}
        this.getBarometerInfo(object, name)
        this.getFrequentationInfo(object, name)
        store.commit("selectStation", object) 
        this.scrollToTop()
  
    },
  //Put barometer info for a station in the object.
    getBarometerInfo(object , name){
       let nameF = name.replace(/-/g,' ').toUpperCase()
        for(let i=0; i<store.state.stations[0].length; i++){
            let stations = store.state.stations[0]
            if(stations[i]['Gare']=== nameF){
                let station = stations[i]
                //Store global grades
                let grades = [station["cumul 2019 P1E"],
                               station["cumul 2019 P2E"],
                               station["cumul 2019 P3E"],
                               station["cumul 2019 P4E"],
                               station["cumul 2019 P5E"] ]
                //Store september grades
                let septGrades=[station["sept 2019 P1E"],
                               station["sept 2019 P2E"],
                               station["sept 2019 P3E"],
                               station["sept 2019 P4E"],
                               station["sept 2019 P5E"] ]
                //Store March grades
                let marchGrades=[station["mars 2019 P1E"],
                               station["mars 2019 P2E"],
                               station["mars 2019 P3E"],
                               station["mars 2019 P4E"],
                               station["mars 2019 P5E"] ]
                
                object["cumulGrades"] = grades
                object['septGrades'] = septGrades
                object['marchGrades'] = marchGrades
                object["name"] = stations[i]['Gare']        
            }       
        }
    },
    //Puts frequentation info in the object.
    getFrequentationInfo(object, name){
      
     // let nameF = name.replace(/-/g,' ')
       for(let i=0; i<store.state.stationsFreq[0].length; i++){
          let selectedStation = store.state.stationsFreq[0][i].fields
          
          if(this.formatStationName(selectedStation["nom_gare"]) === this.formatStationName(name)){
              let frequentationVoyageurs = 
                [selectedStation["total_voyageurs_2015"], selectedStation["total_voyageurs_2016"], selectedStation["totalvoyageurs2017"], selectedStation["total_voyageurs_2018"], selectedStation["total_voyageurs_2019"]]
              let frequentationNonVoyageurs = 
                [selectedStation["total_voyageurs_non_voyageurs_2015"], selectedStation["total_voyageurs_non_voyageurs_2016"], selectedStation["total_voyageurs_non_voyageurs_2017"], selectedStation["total_voyageurs_non_voyageurs_2018"], selectedStation["total_voyageurs_non_voyageurs_2019"]]
              object["voyageursFreq"] = frequentationVoyageurs
              object["nonVoyageursFreq"] = frequentationNonVoyageurs
          }
          
        }
    },

    formatStationName(name){
      let firstFiltering = name.replace(/\s-\s/gi , "-")
      let secondFiltering = firstFiltering.replace(/ /g, "-")  
      let formattedString = secondFiltering.toUpperCase()
      return formattedString
    },
    //Scroll to the top of the window, this is used when the windowd is small and the map is on the bottom of the page
     scrollToTop() {
       console.log("vleze")
                window.scrollTo(0,0);
           }

},

async created() {
    
    this.getStations()
   await this.getStationCoordinate()
    
    
    

  }
 
    
};
</script>
<style scoped>
    .map {
        height: 720px;  
    }
    .popup{
      display: flex;
      flex-direction: column;
    }
</style>