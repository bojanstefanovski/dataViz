<template>
<div>
  <div class="map" v-if="isFetched">
    <LMap  @ready="onReady" @locationfound="onLocationFound" :zoom="zoom" :center="center">
      <LTileLayer :url="url"></LTileLayer>

      <ul >
        <li  v-for="(l,i) in latlong" :key="i">
            <LMarker :lat-lng="l" > 
                <LPopup> 
                    <label> Name: {{i}} </label>
                    <button @click="selectStation(i)"> Show details </button> 
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
      url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
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
getStations(){
        store.state.stationsNames[0].forEach(element => {  
        let station = element["Gare"].replace(/ *\([^)]*\) */g, "")
        this.stations.push(station.replace(/\s/g, '-'))
    });
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

    getLatLong(){
       
        for(let i=0; i<this.responseList.length; i++){
            if(this.stations.includes(this.responseList[i].fields.libelle.toUpperCase())){
                this.latlong[this.responseList[i].fields.libelle]= this.responseList[i].geometry.coordinates.reverse()
            }
        }
        
        this.isFetched = true
    },
    selectStation(name){
        for(let i=0; i<store.state.stationsNames[0].length; i++){

            let stations = store.state.stationsNames[0]
            if(stations[i]['Gare']=== name.replace(/-/g,' ').toUpperCase()){
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
                let object= {}
                object["cumulGrades"] = grades
                object['septGrades'] = septGrades
                object['marchGrades'] = marchGrades
                object["name"] = stations[i]['Gare']
                
                store.commit("selectStation", object)
               
            }
            
           
        } 

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
</style>