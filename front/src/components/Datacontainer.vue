<template>
    <div v-if="isSelected" class="min-h-screen">
  <div id="routes">
     <!-- use router-link component for navigation. -->
            <!-- specify the link by passing the `to` prop. -->
            <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
            <router-link class=" link p-2 border-b  text-right" to="/Histogrammes">Barometre informations</router-link>
            <router-link class="link p-2  border-b" to="/Frequentation">Frequentation in stations</router-link>

           
    </div>
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <br/>
    <div class="mt-12">
         <h1>{{name}} </h1>
         <router-view ></router-view>
    </div>
    
 </div>
 <div v-else class="min-h-screen"> 
     <h1 class="text-gray-700 text-4xl pleaseSelect text-center"> Please select a train station from the map </h1>
     <hr />
 </div>
</template>

<script>
import axios from 'axios'
import store from "../store"

export default {
    name: "Datacontainer",
  components :{
    
  
  },
  data () {
  return {
    
    name: "",
    stations: [],
    isFetched: false,
    isSelected: false
  
  }
},
 
methods: {
    loaderHandler(){
        this.isLoading=false
    },
    getFrequentation(){
       let self = this
      axios.get('https://data.sncf.com/api/records/1.0/search/?dataset=frequentation-gares&q='+this.buildQuery()+'&rows=1000', { //Fali name u attribut, napravi ja listat da go zachuvuva i imeto na stanicata.
         })
        .then(function (response) {     
            self.isFetched=true
            store.commit("addStationFreq", response['data'].records)       
        })
        .catch(function (error) {
        console.log(error);
        }); 
    },
      buildQuery(){
        let output = ""
        for(let i=0; i<this.stations.length-1; i=i+2){
            output= output+this.filterNames(this.stations[i])+"+or+"+this.filterNames(this.stations[i+1])
            if(i!==this.stations.length-2){
                output=output+"+or+"
            }
        } 
       
        return output
    },
    filterNames(name) {
        let neww = name.replace("-VILLE", "")
        
        return neww
    }
  


},
created() {
    this.stations = store.state.stationsNames
    this.getFrequentation()
    
},
watch: {
    '$store.state.selectedStation': function(){
        this.name= store.state.selectedStation['name']
        this.isSelected = true
        
    }
}


}
</script>

<style scoped>
.link{
    border-bottom:  1px solid  #365064;
    
}

.router-link-active {
    background-color: #365064;
    
}
#routes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 55%;
    position: fixed;
    background-color: #222222;
}
.pleaseSelect{
    margin: auto;
    margin-top: 40%;
}

</style>