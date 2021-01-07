<template >
  <div id="mainDv">
      <div id="child">
          <div class="h1div  rounded p-2">
                <h1 class="text-4xl border-b text-center"> Informations about France's train station. </h1>
                <p class="mt-2 text-center"> This webpage shows informations for some of the french biggest train station </p> 
           </div>
            <button class="mt-10 button button pl-6 pr-6  pt-4 pb-4 bg-gray-700 rounded text-xl hover:bg-gray-900" @click="showMap"> Show Map </button>
            <div class="second">
                <div class="barometer rounded"> 
                   <h2 class=" text-center p-2">Customer satisfaction</h2>
                    <p class="text-xs p-2 ">The station customer satisfaction barometer is the main tool for measuring the perceived quality 
                        of Gares & Connexions. Customers are interviewed face to face at the station and rate the station from 0 to 10 around the 5 service promises:<br/>

                                        Promise 1: information <br/>
                                        Promise 2: travel to and from the station and in the station <br/>
                                        Promise 3: cleanliness and safety <br/>
                                        Promises 4: the quality of the moment spent at the station <br/>
                                        Promise 5: shops and services
                      </p>
                </div>
                <div class="frequ rounded"> 
                   <h2 class="text-center p-2">  Frequentation in station </h2>
                   <p class="text-xs p-2 ">This information is derived on the one hand from ticketing data for national and regional traffic outside Ile-de-France and on the other hand from an extrapolation for regional traffic in Ile-de-France from the counts carried out all every 3 to 4 years and published elsewhere in Open Data. An estimate of the proportion of non-travelers is made from station surveys. In the absence of a survey, a default rate is defined (20% for stations a and b outside Ile-de-France and 0% for stations b Ile-de-France and c). The calculation methodology is refined year after year with a resumption of the history which may explain variations in the data published from one year to the next. If you have any questions, you can send it to us through the contact form of the Open Data portal.
                      </p>

                </div>
            </div>
      </div>

  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  methods: {
      showMap(){
          this.$emit("showMap")
      }
  }
}
</script>

<style scoped>
#mainDv {
    height: 100vh;
    background-image: url("../assets/trainstation.png");
    -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
   display: flex;
  justify-content: center;
   position: relative;
 
}
#child{
      
  /* Center vertically */
  position: absolute;
  top: 20%;
}

.second {
    margin:auto;
    width:70%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px
    
    
}
.button{
    margin-left:43%

}
.barometer{
    max-width: 500px;
    overflow: hidden;
      border-right:1px solid rgb(189, 153, 75);
    background-color: rgba(54, 80, 100, 0.87);
    
}
.frequ {
    max-width: 500px;
    overflow: hidden;
    background-color: 	rgba(54, 80, 100, 0.87)
   
}
.frequ h2 {
    
}
.barometer h2 {
   
  
}
.h1div {
    background-color: 
}

</style>
