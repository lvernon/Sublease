const listingComp = require('../models/listComp.model.js')
const config = require('../config/config.js')
const mongoose = require('mongoose')


/*
USING fetchRem:
Make a get request with "clinicId" added to the request.
*/
exports.fetchComp = function(req, res){

	listingComp.findOne({ 'listCompId' : req}, function(err, data){
		if (err) res.status(200).send("NaN");
		else res.status(200).json({
            listCompId: usra.listCompId,
            complexName: usra.complexName,
            roomConfigurationName:usra.roomConfigurationName,
            bedrooms: usra.bedrooms,
            bathrooms: usra.bathrooms,
            bathroomType:usra.bathroomType,
            furnished:usra.furnished,
            rentPerMonth: usra.rentPerMonth,
            utilitiesIncluded:usra.utilitiesIncluded,
            washerDryer:usra.washerDryer,
            deposit: usra.deposit,
            parkingFee: usra.parkingFee,
            leaseTransferFee: usra.leaseTransferFee,
            applicationFee: usra.applicationFee,
            applicationDiscount: usra.applicationDiscount,
            depositDiscount: usra.depositDiscount,
            parkingFeeDiscount: usra.parkingFeeDiscount,
            giftCard: usra.giftCard
		})
	})
}



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
