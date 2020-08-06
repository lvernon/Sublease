const listingSell = require('../models/listComp.model.js')
const config = require('../config/config.js')
const mongoose = require('mongoose')
const { UsageRecordInstance } = require('twilio/lib/rest/supersim/v1/usageRecord')


exports.fetchSell = function(req, res){
	listingSell.findOne({ 'listSellId' : req}, function(err, data){
		if (err) res.status(200).send("NaN");
		else res.status(200).json({
            listSellId: usra.listSellId,
            complexName: usra.complexName,
            roomConfigurationName: usra.roomConfigurationName,
            bedrooms: usra.bedrooms,
            sellerName: usra.sellerName,
            bathrooms: usra.bathrooms,
            currentRoommates: usra.currentRoommates,
            bathroomType:usra.bathroomType,
            furnished:usra.furnished,
            rentPerMonth: usra.rentPerMonth,
            utilitiesIncluded:usra.utilitiesIncluded,
            washerDryer:usra.washerDryer,
            deposit: usra.deposit,
            leaseTransferFee: usra.leaseTransferFee,
            applicationFee: usra.applicationFee,
            applicationDiscount: usra.applicationDiscount,
            depositDiscount: usra.depositDiscount,
            rentDiscount: usra.rentDiscount,
            otherDiscount: usra.otherDiscount,
            leaseTransferFeeDiscount:usra.leaseTransferFeeDiscount,
            availabilityStart:usra.availabilityStart,
            availabilityEnd: usra.availabilityEnd,
            description: usra.description
		})
	})
}



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