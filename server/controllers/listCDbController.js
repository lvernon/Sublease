const listingComp = require('../models/listComp.model.js')
const config = require('../config/config.js')
const mongoose = require('mongoose')


/*
USING fetchRem:
Make a get request with "clinicId" added to the request.
*/

exports.listById = function (req, res) {
   listingComp.find({ 'listCompId' : req.body.listCompId}, function(err, obj) {
     if (err) {
     if (err) res.status(200).send("NaN");
     } else {
     res.json(obj);
     }
   }); 
};


exports.listComp = function (req, res) {
    /* Add your code. Make sure to send the documents as a JSON response.*/
    listingComp.find({}, function(err, obj) {
      if (err) {
		if (err) res.status(200).send("NaN");
      } else {
		res.json(obj);
		console.log(obj)
      }
    }); 

};

exports.newComp = async (req, res) => {
   listingComp.create({
      offerId: req.body.rentPerMonth, //remember to increment front end
      
   }, function(err, pt){
     res.status(200).send("Success");
  });
}