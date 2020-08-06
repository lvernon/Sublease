const apptDb = require('../controllers/apptDbController.js')
const config = require('../config/config.js')
const express = require('express')
const mongoose = require('mongoose')

const Router = express.Router();

/*Patient Database Router*/
console.log("in router");

Router.get('/list', apptDb.listAppt); //list them all
Router.get('/fetch', apptDb.fetchAppt); //fetch emails
Router.post('/create', apptDb.newAppt); //testing function
Router.post('/list/my-appointments', apptDb.listByID);
Router.put('/edit', apptDb.updateAppt); //fetch user information
Router.delete('/remove', apptDb.deleteAppt); //create user
Router.delete('/remove-appt', apptDb.removeAppt); // remove appointment

//Router.put('/pwreset', patientDb.pwReset); //potential password reset function?

module.exports = Router
