const listSDb = require('../controllers/listSDbController.js')
const config = require('../config/config.js')
const express = require('express')
const mongoose = require('mongoose')

const Router = express.Router();


Router.get('/list', listSDb.listSell); 
Router.get('/fetch', listSDb.fetchSell); 


module.exports = Router