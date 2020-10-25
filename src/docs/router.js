const express = require('express');
const docsRouter = express.Router();

//--- Documentation pages
docsRouter.get('/', (req,res) => res.render('index'));
docsRouter.get('/liveTextScreen', (req,res) => res.render('./privacyPolicies/liveTextScreen'));
docsRouter.get('/airSofiaScreen', (req,res) => res.render('./privacyPolicies/airSofiaScreen'));
docsRouter.get('/greenTicketScreen', (req,res) => res.render('./privacyPolicies/greenTicketScreen'));
docsRouter.get('/covidInfoScreen', (req,res) => res.render('./privacyPolicies/covidInfoScreen'));
// docsRouter.get('/elements', (req,res) => res.render('elements'));
// docsRouter.get('/utilities', (req,res) => res.render('utilities'));
// docsRouter.get('/additional', (req,res) => res.render('additional'));

module.exports = docsRouter;