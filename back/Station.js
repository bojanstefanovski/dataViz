
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
          "type": "Date"
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
          "type": "Date"
        },
        "Sep-18": {
          "type": "Date"
        },
        "mars 2019 SGE": {
          "type": "Date"
        },
        "sept 19 SGE": {
          "type": "String"
        },
        "cumul 2019 SGE": {
          "type": "Date"
        },
        "mars 2019 P1E": {
          "type": "Date"
        },
        "sept 2019 P1E": {
          "type": "String"
        },
        "cumul 2019 P1E": {
          "type": "Date"
        },
        "mars 2019 P1EA": {
          "type": "Date"
        },
        "sept 2019 P1EA": {
          "type": "Date"
        },
        "cumul 2019 P1EA": {
          "type": "Date"
        },
        "mars 2019 P2E": {
          "type": "Date"
        },
        "sept 2019 P2E": {
          "type": "String"
        },
        "cumul 2019 P2E": {
          "type": "Date"
        },
        "mars 2019 P3E": {
          "type": "String"
        },
        "sept 2019 P3E": {
          "type": "String"
        },
        "cumul 2019 P3E": {
          "type": "Date"
        },
        "mars 2019 P4E": {
          "type": "String"
        },
        "sept 2019 P4E": {
          "type": "Date"
        },
        "cumul 2019 P4E": {
          "type": "String"
        },
        "mars 2019 P4EA": {
          "type": "String"
        },
        "sept 2019 P4EA": {
          "type": "String"
        },
        "cumul 2019 P4EA": {
          "type": "String"
        },
        "mars 2019 P4EB": {
          "type": "String"
        },
        "sept 2019 P4EB": {
          "type": "Date"
        },
        "cumul 2019 P4EB": {
          "type": "String"
        },
        "mars 2019 P5E": {
          "type": "String"
        },
        "sept 2019 P5E": {
          "type": "String"
        },
        "cumul 2019 P5E": {
          "type": "String"
        }, 
      
}, {collection: "barometre"});
let Station = module.exports = mongoose.model("Station", station)