var express = require('express');
//var app = express();
var router = express.Router();

let ctrl = require('../controllers/weddingControllers');

//routes
// this route returns all the people who have registered to wedding
router.route('/Ilmoittautuneet')
    .get(ctrl.fetchAll);

// this route returns all the different emails what are in the database
router.route('/Spostit')
    .get(ctrl.fetchEmails);

// this route returns all the allergies of the quests
router.route('/Allergiat')
    .get(ctrl.fetchAllergies);

router.route('/AddQuests')
    .post(ctrl.AddQuest);

//publish functions outside of this js-file
module.exports = router;