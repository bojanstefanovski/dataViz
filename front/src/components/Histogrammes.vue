<template>
     <div  class="histogrammes">
        <div id="firstHist">
            <div class="legend text-xs">
                <h1> Legend </h1>
                <div class=""> <p> P1 --- Informations </p> </div>
                <div class=""> <p> P2 --- Travel to and from the station and in the station </p></div>
                <div class=""> <p> P3 --- Cleanliness and safety</p> </div> 
                <div class=""> <p> P4 --- The quality of the moment spent at the station</p> </div>
                <div class=""> <p> P5 --- Shops and services </p> </div>  
            </div>  
            <div>
                <h1> Global grades </h1>
                <reactive-histogramme  class="reactive histogramme" :chart-data="datacollection" ></reactive-histogramme>
            </div>
        </div>
        <button class="button p-1 bg-gray-700 rounded text-xs hover:bg-gray-900" @click="showMoreDetails" v-if="showMore">Show less</button>
        <button class="button p-1 bg-gray-700  text-xs  rounded hover:bg-gray-900" @click="showMoreDetails" v-else>Show More</button>
        <div class="showMore" v-if="showMore">
             <div>
                 <h2 class="text-center"> March 2019 </h2>
             <reactive-histogramme v-if="marchGrades.datasets[0].data" class="smallHistogramme" :chart-data="marchGrades" ></reactive-histogramme>
            <not-available v-else> </not-available>
             </div>
             <div>
                 <h2 class="text-center"> September 2019 </h2>
             <reactive-histogramme v-if="septGrades.datasets[0].data " class="smallHistogramme" :chart-data="septGrades" ></reactive-histogramme>
             <not-available v-else> </not-available>
             </div>
        </div>
    
  </div>
</template>

<script>

//import Histogramme from '@/components/Histogramme'
import ReactiveHistogramme from '@/components/ReactiveHistogramme'
import store from "../store"

    // Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import NotAvailable from './NotAvailable.vue';

export default {
    name: "Histogrammes",
    components :{
    ReactiveHistogramme,
        NotAvailable
  
  },
  data () {
  return {
    datacollection: null,
    showMore : false,
    septGrades: null,
    marchGrades: null
  }
},  
methods: {
    showMoreDetails(){
        this.showMore= !this.showMore
    },
    makeChartDataObject(d){
      
         let datacollection = {
             datasets: [{
            label: "P1",
            backgroundColor: "#56900C",
            data: [store.state.selectedStation[d][0]],
      },{
         label: "P2",
         backgroundColor: "#0C5A90",
         data: [store.state.selectedStation[d][1]],
      },{
         label: "P3",
         backgroundColor: "#900C3F",
         data: [store.state.selectedStation[d][2]],
      },{
         label: "P4",
         backgroundColor: "#DDC709",
         data: [store.state.selectedStation[d][3]],
      },
      {
         label: "P5",
         backgroundColor: "#E87617",
         data: [store.state.selectedStation[d][4]],
      }]
      // Data for the y-axis of the chart
      
    }
    return datacollection
    },
    fillData(){
        this.datacollection = this.makeChartDataObject("cumulGrades")
         this.septGrades = this.makeChartDataObject("septGrades")
         this.marchGrades = this.makeChartDataObject("marchGrades") 
    }
},
created(){
     this.fillData()
},
watch: {
    '$store.state.selectedStation': function(){
        this.showMore = false
         this.fillData() 
    }
}
}
</script>

<style scoped>


.showMore{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top:5%;

    
    
}
.histogramme{
  background-color: #262626;
  width: 70vh;

}

.smallHistogramme {
    background-color: #262626;
    width: 90%
}

#firstHist {
    display:grid;
    grid-template-columns: 1fr 3fr;
}

.legend {
    display: flex;
   flex-direction: column;
   justify-content:  space-between;
}
.button {
    margin-left: 43%;
    margin-top: 5%;
    width: 14%;  
    
}
@media (max-width: 800px) {  
  
.showMore {
    display: block
}
}


</style>