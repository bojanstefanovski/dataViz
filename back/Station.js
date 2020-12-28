
const mongoose = require('mongoose'),

Schema = mongoose.Schema;
const station = new Schema({
        "Agence": {
          "type": "String"
        },
        "Typologie de la gare": {
          "type": "String"
        },
        "Niveau de service": {
          "type": "String"
        },
        "Code UIC": {
          "type": "String"
        },
        "Gare": {
          "type": "String"
        },
        "Typologie de client": {
          "type": "String"
        },
        "Zone": {
          "type": "String"
        },
        "Niveau de travaux": {
          "type": "String"
        },
        "Sep-17": {
          "type": "Number"
        },
        "Sep-18": {
          "type": "Number"
        },
        "mars 2019 SGE": {
          "type": "Number"
        },
        "sept 19 SGE": {
          "type": "Number"
        },
        "cumul 2019 SGE": {
          "type": "Number"
        },
        "mars 2019 P1E": {
          "type": "Number"
        },
        "sept 2019 P1E": {
          "type": "Number"
        },
        "cumul 2019 P1E": {
          "type": "Number"
        },
        "mars 2019 P1EA": {
          "type": "Number"
        },
        "sept 2019 P1EA": {
          "type": "Number"
        },
        "cumul 2019 P1EA": {
          "type": "Number"
        },
        "mars 2019 P2E": {
          "type": "Number"
        },
        "sept 2019 P2E": {
          "type": "Number"
        },
        "cumul 2019 P2E": {
          "type": "Number"
        },
        "mars 2019 P3E": {
          "type": "Number"
        },
        "sept 2019 P3E": {
          "type": "Number"
        },
        "cumul 2019 P3E": {
          "type": "Number"
        },
        "mars 2019 P4E": {
          "type": "Number"
        },
        "sept 2019 P4E": {
          "type": "Number"
        },
        "cumul 2019 P4E": {
          "type": "Number"
        },
        "mars 2019 P4EA": {
          "type": "Number"
        },
        "sept 2019 P4EA": {
          "type": "Number"
        },
        "cumul 2019 P4EA": {
          "type": "Number"
        },
        "mars 2019 P4EB": {
          "type": "Number"
        },
        "sept 2019 P4EB": {
          "type": "Number"
        },
        "cumul 2019 P4EB": {
          "type": "Number"
        },
        "mars 2019 P5E": {
          "type": "Number"
        },
        "sept 2019 P5E": {
          "type": "Number"
        },
        "cumul 2019 P5E": {
          "type": "Number"
        }, 
      
}, {collection: "barometre"});
let Station = module.exports = mongoose.model("Station", station)