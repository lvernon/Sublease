const mongoose = require('mongoose');

const listSellSchema = new mongoose.Schema({
    listSellId: {type: Number},
    complexName: {type:String},
    roomConfigurationName: {type:String},
    bedrooms: {type: Number},
    sellerName: {type:String},
    bathrooms: {type: Number},
    currentRoommates: {type: Number},
    bathroomType:{type:String},
    furnished:{type:Boolean},
    rentPerMonth: {type: Number},
    utilitiesIncluded:{type:Boolean},
    washerDryer:{type:Boolean},
    deposit: {type: Number},
    leaseTransferFee: {type: Number},
    applicationFee: {type: Number},
    applicationDiscount: {type: Number},
    depositDiscount: {type: Number},
    rentDiscount: {type: Number},
    otherDiscount: {type: Number},
    leaseTransferFeeDiscount: {type: Number},
    availabilityStart:{type:Date},
    availabilityEnd: {type:Date},
    description: {type:String},
});


module.exports = mongoose.model('listSDB', listSellSchema);

