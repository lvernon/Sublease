const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    offerId:  Number,
    listSellId:  Number,
    listCompId:  Number,
    name:String,
    rentPerMonth:  Number,
    deposit:  Number,
    leaseTransferFee:  Number,
    applicationFee:  Number,
    monthsFree:  Number,
    utilitiesIncluded:Boolean,
    accepted:Boolean
}, { collection : 'offer' });


module.exports = mongoose.model('offerDB', offerSchema);
