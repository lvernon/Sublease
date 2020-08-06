const listSDb = require('../controllers/listSDbController.js')
const config = require('../config/config.js')
const express = require('express')
const mongoose = require('mongoose')

const Router = express.Router();


Router.get('/list', listSDb.listSell); 
Router.post('/create', listSDb.newSell); 
Router.post('/list/byId', listSDb.listById); 


module.exports = Router