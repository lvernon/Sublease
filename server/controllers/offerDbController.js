const offer = require('../models/listComp.model.js')
const config = require('../config/config.js')
const mongoose = require('mongoose')
const { UsageRecordInstance } = require('twilio/lib/rest/supersim/v1/usageRecord')


/*exports.fetchOffer = function(req, res){
	offer.findOne({ 'listSellId' : req}, function(err, data){
		if (err) res.status(200).send("NaN");
		else res.status(200).json({
            offerId: usra.offerId,
            sellerName:usra.sellerName,
            buyerName:usra.buyerName,
            rentPerMonth: usra.rentPerMonth,
            utilitiesIncluded:usra.utilitiesIncluded,
            deposit: usra.deposit,
            leaseTransferFee: usra.leaseTransferFee,
            applicationFee:usra.applicationFee,
            monthsFree: usra.monthsFree,
            accepted:usra.accepted,
		})
	})
}*/

exports.listOffer = function (req, res) {
   /* Add your code. Make sure to send the documents as a JSON response.*/
   offer.find({}, function(err, obj) {
     if (err) {
     if (err) res.status(200).send("NaN");
     } else {
     res.json(obj);
     // console.log(obj)
     }
   }); 
};
exports.listById = function (req, res) {
   offer.find({ 'listSellId' : req.body.listingId}, function(err, obj) {
     if (err) {
     if (err) res.status(200).send("NaN");
     } else {
     res.json(obj);
     }
   }); 
};

exports.newOffer = async (req, res) => {
   console.log("in rem controller!");
   offer.create({
      offerId: req.body.rentPerMonth, //remember to increment front end
      listSellId: req.body.listSellId, 
      listCompId: req.body.listCompId, 
      rentPerMonth : req.body.rentPerMonth, 
      deposit : req.body.deposit, 
      leaseTransferFee : req.body.leaseTransferFee, 
      leaseTransferFee : req.body.monthsFree, 
      leaseTransferFee : req.body.applicationFee, 
      leaseTransferFee : req.body.utilitiesCovered
   }, function(err, pt){
     res.status(200).send("Success");
  });
}


