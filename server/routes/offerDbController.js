const offer = require('../models/listComp.model.js')
const config = require('../config/config.js')
const mongoose = require('mongoose')
const { UsageRecordInstance } = require('twilio/lib/rest/supersim/v1/usageRecord')


exports.fetchOffer = function(req, res){
	offer.findOne({ 'listSellId' : req}, function(err, data){
		if (err) res.status(200).send("NaN");
		else res.status(200).json({
            offerId: usra.offerId,
            rentDiscount: usra.rentDiscount,
            sellerName:usra.sellerName,
            buyerName:usra.buyerName,
            applicationFeeDiscount: usra.applicationFeeDiscount,
            leaseTransferFeeDiscount: usra.leaseTransferFeeDiscount,
            monthsFree: usra.monthsFree,
            parkingFeeDiscount: usra.parkingFeeDiscount,
            accepted:usra.accepted,
            utilitiesCovered:usra.utilitiesCovered
		})
	})
}



exports.listOffer = function (req, res) {
    /* Add your code. Make sure to send the documents as a JSON response.*/
    offer.find({}, function(err, obj) {
      if (err) {
		if (err) res.status(200).send("NaN");
      } else {
		res.json(obj);
		console.log(obj)
      }
    }); 

};

exports.editOffer = function(req, res){
	appt.updateOne({ 'offerId' : req.offerId}, {'rentDiscount' : req.rentDiscount, 'applicationFeeDiscount' : req.applicationFeeDiscount, 'leaseTransferFeeDiscount' : req.leaseTransferFeeDiscount, 'monthsFree' : req.monthsFree, 'parkingFeeDiscount' : req.parkingFeeDiscount, 'utilitiesCovered' : req.utilitiesCovered}, function(err, usra){
		if (err) res.status(200).send("NaN");
		else res.status(200).send("Successful update");
	})
}

