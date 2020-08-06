const express = require('express');
const mapsRouter = require('./mapsRouter')
const patientDbRouter = require('./patientDbRouter')
const apptDbRouter = require('./apptDbRouter')
const remDbRouter = require('./remDbRouter')
const listSDbRouter = require('./listSDbRouter')
const listCDbRouter = require('./listCDbRouter')
const offerDbRouter = require('./offerDbRouter')
const remApiRouter = require('./remApiRouter')

const bodyParser = require('body-parser');

const mainRouter = express.Router();

mainRouter.use(bodyParser.urlencoded({ extended: false }));

mainRouter.use('/maps', mapsRouter)
mainRouter.use('/patient', patientDbRouter)
mainRouter.use('/appt', apptDbRouter)
mainRouter.use('/reminder', remDbRouter)
mainRouter.use('/remapi', remApiRouter)
mainRouter.use('/comp', listSDbRouter)
mainRouter.use('/sell', listCDbRouter)
mainRouter.use('/offer', offerDbRouter)


module.exports = mainRouter;