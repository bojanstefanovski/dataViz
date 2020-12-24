const mongoose = require("mongoose")

const URI = "mongodb+srv://bojan:bojan@cluster0.oieyc.mongodb.net/dataviz?retryWrites=true&w=majority"

const connectDb = async ()=>{
    await mongoose.connect(URI,  { useUnifiedTopology: true })
    console.log("The Db has been connected")
}

module.exports = connectDb