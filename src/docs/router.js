const express = require('express');
const docsRouter = express.Router();

//--- Documentation pages
docsRouter.get('/', (req,res) => res.render('index'));
docsRouter.get('/liveTextPrivacy', (req,res) => res.render('./privacyPolicies/liveTextPrivacy'));
docsRouter.get('/airSofiaPrivacy', (req,res) => res.render('./privacyPolicies/airSofiaPrivacy'));
docsRouter.get('/greenTicketPrivacy', (req,res) => res.render('./privacyPolicies/greenTicketPrivacy'));
// docsRouter.get('/elements', (req,res) => res.render('elements'));
// docsRouter.get('/utilities', (req,res) => res.render('utilities'));
// docsRouter.get('/additional', (req,res) => res.render('additional'));

module.exports = docsRouter;