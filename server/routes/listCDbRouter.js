const listCDb = require('../controllers/listCDbController.js')
const config = require('../config/config.js')
const express = require('express')
const mongoose = require('mongoose')

const Router = express.Router();


Router.get('/list', listCDb.listComp); 
Router.post('/create', listCDb.newComp); 
Router.post('/list/byId', listCDb.listById); 


module.exports = Router