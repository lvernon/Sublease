const offerDb = require('../controllers/offerDbController.js')
const config = require('../config/config.js')
const express = require('express')
const mongoose = require('mongoose')

const Router = express.Router();



Router.get('/list', offerDb.listOffer); //list them all
//Router.get('/fetch', offerDb.fetchOffer); //fetch emails
Router.post('/create', offerDb.newOffer); //testing function
Router.post('/list/byId', offerDb.listById);



module.exports = Router