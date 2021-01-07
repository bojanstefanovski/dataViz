<template>
  <div id="app">
  
    <FirstPage v-if="firstPage" @showMap="show"> </FirstPage>
   <Container v-if="showMap"></Container>
    
  </div>
</template>

<script>

import Container from './components/Container.vue'
import FirstPage from './components/FirstPage'

export default {
  name: 'App',
  components: {
    Container, FirstPage

  },
  data(){
    return{
      showMap: false,
      firstPage: true
    }
  },
  methods: {
    show(){
    this.showMap = true
    this.firstPage = false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #222222;
  height: 100%;
  color: #c6c6c6;
  
}
</style>
