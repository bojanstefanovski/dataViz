<template>
  <div id='mainDiv'>
    <Map class="map" @fetched="loaderHandler"> </Map>
    
    <div v-if="datacollection" class="histogrammes">
        <h1> Global grades </h1>
        <reactive-histogramme class="reactive" :chart-data="datacollection" :key="datacollection"></reactive-histogramme>

        <button @click="showMoreDetails" v-if="showMore"> Hide</button>
        <button @click="showMoreDetails" v-else>show More Details</button>
        <div class="showMore" v-if="showMore">
             <div>
                 <h2> March 2019</h2>
             <reactive-histogramme  :chart-data="marchGrades" ></reactive-histogramme>

             </div>
             <div>
                 <h2> September 2019 </h2>
             <reactive-histogramme  :chart-data="septGrades" ></reactive-histogramme>
             </div>
        </div>
    </div>
        
        <loading :active.sync="isLoading" 
            :can-cancel="true"
            :is-full-page="fullPage"></loading>
    
  </div>
</template>

<script>

import Map from '@/components/Map'
//import Histogramme from '@/components/Histogramme'
import ReactiveHistogramme from '@/components/ReactiveHistogramme'
import store from "../store"
import Loading from 'vue-loading-overlay';
    // Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    name: "Container",
  components :{
    Map, ReactiveHistogramme, Loading
  
  },
  data () {
  return {
      //CELA LOGIKA TREBA DA SE STAVI VO COMPUTED
    // instantiating datacollection with null
    datacollection: null,
    isLoading: true,
    fullPage: true,
    showMore : false,
    septGrades: null,
    marchGrades: null
  }
},
created () {
  //anytime the vue instance is created, call the fillData() function.
},   
methods: {
    loaderHandler(){
        this.isLoading=false
    },
    showMoreDetails(){
        this.showMore= !this.showMore
    },
    makeChartDataObject(d){
         let datacollection = {
      // Data for the y-axis of the chart
      labels: ['Les informations', 'le déplacement pour venir et partir de la gare et dans la gare', 'la propreté et la sûreté', 'la qualité du moment passé en gare', 'les commerces et les service'],
      datasets: [
        {
          label: d,
          backgroundColor: '#f87979',
          // Data for the x-axis of the chart
          data: store.state.selectedStation[d]

          //GetStation informations

        }
      ]
    }
    return datacollection
    }


},
watch: {
    '$store.state.selectedStation': function(){
        this.showMore = false
         this.datacollection = this.makeChartDataObject("cumulGrades")
         this.septGrades = this.makeChartDataObject("septGrades")
         this.marchGrades = this.makeChartDataObject("marchGrades")   
    }
}
}
</script>

<style scoped>
#mainDiv {
    display: grid;
}

.histogrammes {
    margin-left: 43%;
    width: 55%;
    border: 2px solid black;
    text-align: center
}
.map {
    top: 0;
    bottom:0;
    width: 40%;
    position:fixed;
}

.showMore{
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
}

</style>