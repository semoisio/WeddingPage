/* This file includes all the routes what I'm using */
var express = require('express');

var router = express.Router();
var app = express();
const ctrl = require('../controllers/weddingControllers');
const auth = require('../authentication/auth');
const { Router } = require('express');





//routes
// this route add qust to databasa
router.route('/Vieraat')
    .post(ctrl.AddQuest);
//this route returns all the children from database
router.route('/Kirjautuminen')
    .get(ctrl.fetchPassword);

// this route returns all the people who have registered to wedding
router.get('/Ilmoittautuneet', auth.autUser,ctrl.fetchAll);

// this route returns all the different emails what are in the database
router.get('/Spostit', auth.autUser,ctrl.fetchEmails);

// this route returns all the allergies of the quests
router.route('/Allergiat')
    .get(auth.autUser, ctrl.fetchAllergies);

// this route returns all the adults from database
router.route('/Aikuiset')
    .get(auth.autUser,ctrl.fetchAdults);

// this route returns all the children from database
router.route('/Lapset')
    .get(auth.autUser,ctrl.fetChildren);



//publish functions outside of this js-file
module.exports = router;