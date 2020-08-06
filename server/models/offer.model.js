const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    offerId: {type: Number},
    rentDiscount: {type: Number},
    sellerName:{type:String},
    buyerName:{type:String},
    applicationFeeDiscount: {type: Number},
    leaseTransferFeeDiscount: {type: Number},
    monthsFree: {type: Number},
    parkingFeeDiscount: {type: Number},
    accepted:{type:Boolean},
    utilitiesCovered:{type:Boolean}
});


module.exports = mongoose.model('offerDB', offerSchema);
