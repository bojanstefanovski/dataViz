<template>
  <div id='mainDiv'>
      <bar-chart v-if="datacollection.datasets[0].data" class="barChart" :chart-data="datacollection"> </bar-chart>
      <not-available v-else > </not-available>
          
   
    
  </div>
</template>

<script>

import store from "../store"
import BarChart from './BarChart.vue';
import NotAvailable from './NotAvailable'

export default {
  components: { BarChart, NotAvailable },
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
},
created(){
     this.initializeData()
},
//Watcher for the selected station in order to change the data of the line chart.
watch: { 
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


</style>