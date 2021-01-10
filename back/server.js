const express = require("express")
const connectDB = require("./Connection")
const app = express();

//Bring models

let Station = require("./Station")
connectDB()

const Port= 3000
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.get("/api/stations", function(req, res) {
   
    Station.find({}, function(err, stations){
        if(err){
            console.log(err)
        }
        else {
            res.send(stations)
        }
    })
})

app.listen(Port, () => {
    console.log("Server started")
})

//handle production 

if(process.env.NODE_ENV=== 'production'){
    //static folder
    app.use(express.static(__dirname+ '/public/'))

    //handle SPA
    app.get(/.*/, (re, res)=> res.sendFile(__dirname+ "/public/index.html"))
}