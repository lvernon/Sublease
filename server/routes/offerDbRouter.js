const offerDb = require('../controllers/offerDbController.js')
const config = require('../config/config.js')
const express = require('express')
const mongoose = require('mongoose')

const Router = express.Router();



Router.get('/list', offerDb.listOffer); //list them all
Router.get('/fetch', offerDb.fetchOffer); //fetch emails
Router.put('/edit', offerDb.editOffer); //testing function



module.exports = Router