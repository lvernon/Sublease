const listingSell = require('../models/listComp.model.js')
const config = require('../config/config.js')
const mongoose = require('mongoose')
const { UsageRecordInstance } = require('twilio/lib/rest/supersim/v1/usageRecord')


exports.listById = function (req, res) {
   listingSell.find({ 'listSellId' : req.body.listSellId}, function(err, obj) {
     if (err) {
     if (err) res.status(200).send("NaN");
     } else {
     res.json(obj);
     }
   }); 
};


exports.listSell = function (req, res) {
    /* Add your code. Make sure to send the documents as a JSON response.*/
    listingSell.find({}, function(err, obj) {
      if (err) {
		if (err) res.status(200).send("NaN");
      } else {
		res.json(obj);
		console.log(obj)
      }
    }); 

};

exports.newSell = async (req, res) => {
   listingSell.create({
      offerId: req.body.rentPerMonth, //remember to increment front end
      
   }, function(err, pt){
     res.status(200).send("Success");
  });
}