<template>
  <div id='mainDiv'>
      <bar-chart v-if="datacollection.datasets[0].data" class="barChart" :chart-data="datacollection"> </bar-chart>
      <div v-else class="text-4xl text-gray-600 text-center  p-4 border border-gray-800 mt-5" id="noData">
          <img  src="../assets/nofound.png" alt="Image">
          <p> No available data for this particular station. </p>
           
           </div>
   
    
  </div>
</template>

<script>

import store from "../store"
import BarChart from './BarChart.vue';

export default {
  components: { BarChart },
    name: "Frequentation",
  data () {
  return {
      datacollection: [],
      name: "",
      station: []
   
  }
}, 
methods: {
    fillData(){
        let datacollection = {
          //Data to be represented on x-axis
          labels: ['2015', '2016', '2017', '2018', '2019'],
          datasets: [
            {
              label: 'Travelers',
              backgroundColor: '#f87979',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              borderColor: "orange",
              pointBorderColor: '#249EBF',
              fill: false,
              //Data to be represented on y-axis
              data: store.state.selectedStation['voyageursFreq']
            },
               {
              label: 'Non travelers',
              backgroundColor: '#f87979',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              borderColor: "blue",
              pointBorderColor: '#249EBF',
              fill: false,
              //Data to be represented on y-axis
              data: store.state.selectedStation['nonVoyageursFreq']
            },
            
          ]
        }
        
        return datacollection
    },
    initializeData(){
          this.name = store.state.selectedStation["name"]
     this.datacollection = this.fillData()
    }

   
   /* getStationFreq(){
        console.log(this.data)
        this.data.forEach(element => {
            console.log("coucou")
            let station = element.replace(/\s-\s/gi , "-")
            console.log(station)
            if(element.fields.nom_gare.toUpperCase()===this.name){
                this.station = element
            }
        });
    } */
},
created(){
     this.initializeData()
},
watch: { //OVA GO STAVI ZA KOA KJE SE MENJA TUKA DA SE MENJA I CURBATA 
    '$store.state.selectedStation': function(){
        this.initializeData()
    }

}
}
</script>

<style scoped>
.barChart{
  background-color: #262626;
}
img{
    margin: auto;
    opacity: 0.5
}

</style>