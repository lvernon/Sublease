const mongoose = require('mongoose');

const listCompSchema = new mongoose.Schema({
    listCompId: {type: Number},
    complexName: {type:String},
    roomConfigurationName: {type:String},
    bedrooms: {type: Number},
    bathrooms: {type: Number},
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
    giftCard: {type: Number},
});


module.exports = mongoose.model('listCDB', listCompSchema, 'listingsCompany');
