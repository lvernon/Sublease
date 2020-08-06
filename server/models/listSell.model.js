const mongoose = require('mongoose');

const listSellSchema = new mongoose.Schema({
    listSellId:  Number,
    listCompId:  Number,
    complexName: String,
    roomConfigurationName: String,
    bedrooms:  Number,
    sellerName: String,
    bathrooms:  Number,
    currentRoommates:  Number,
    bathroom:String,
    furnished:Boolean,
    rentPerMonth:  Number,
    utilitiesIncluded:Boolean,
    washerDryer:Boolean,
    deposit:  Number,
    leaseTransferFee:  Number,
    applicationFee:  Number,
    availabilityStart:Date,
    availabilityEnd: Date,
    description: String,
});


module.exports = mongoose.model('listSDB', listSellSchema, 'listingsSeller');

