const express = require("express")
const connectDB = require("./Connection")
const app = express();

//Bring models

let Station = require("./Station")
connectDB()

const Port= 3000

app.get("/stations", function(req, res) {
   
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