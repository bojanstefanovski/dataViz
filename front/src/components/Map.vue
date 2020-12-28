<template>
  <div>
  <MapVisual2 v-if="isFetched" @fetched="cancelLoader"></MapVisual2>
  </div>
</template>

<script>
import axios from "axios"
import store from "../store"
import MapVisual2 from '@/components/MapVisual2'
export default {
  components :{
    MapVisual2,
  },
  data(){
      return{
          isFetched: false
      }
  },
  methods:{
     cancelLoader(){
         this.$emit("fetched", true)
     }
  },
  
  created(){
      let self = this
    axios
    .get('http://localhost:3000/stations', {
    })
    .then(function (response) { 
        console.log(response.data)
     store.commit("addStationsNames", response.data)
     self.isFetched = true
     console.log(store.state.stationsNames[0])

   
      
    })
    .catch(function (error) {
        console.log(error);
    });

  
  }
}
</script>