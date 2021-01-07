<template>
  <div id='mainDiv'>
    <Map class="map" @fetched="loaderHandler"> </Map>
    
    <Datacontainer id="datacontainer" v-if="datacollection" :key="datacollection"> </Datacontainer>
    
    <loading :active.sync="isLoading" 
            :can-cancel="true"
            :is-full-page="fullPage"></loading>
    
  </div>
</template>

<script>

import Map from '@/components/Map';
import Loading from 'vue-loading-overlay';
    // Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import Datacontainer from "@/components/Datacontainer"


export default {
    name: "Container",
  components :{
        Map, Loading, Datacontainer
  
  
  },
  data () {
  return {
    // instantiating datacollection with null
    datacollection: false,
    isLoading: true,
    fullPage: true,
  }
}, 
methods: {
    loaderHandler(){
        this.isLoading=false
        this.datacollection = true
    },
},
/*watch: {
    '$store.state.stationsNames': function(){
       // this.datacollection = true 
    }
} */
}
</script>

<style scoped>
#mainDiv {
    display: grid;
    
}

#datacontainer {
    margin-left: 43%;
    width: 55%;
    
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
   
}

</style>