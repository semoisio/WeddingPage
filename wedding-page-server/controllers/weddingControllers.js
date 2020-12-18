
const sql = require('../db/weddingSQL');

module.exports = {

    fetchAll: async (req, res) => { 
        try {
            let c = await sql.getAllQuests();

            res.json({ status: "OK", Quests : c});
        }
        catch (err) {
            res.json({status : "NOT OK", msg : err});
        }
    },
    fetchEmails: async (req, res) => { 
        try {
            let c = await sql.getEmails();

            res.json({ status: "OK", Emails : c});
        }
        catch (err) {
            res.json({status : "NOT OK", msg : err});
        }
    },
    fetchAllergies: async (req, res) => { 
        try {
            let c = await sql.getAllergies();

            res.json({ status: "OK", Allergies : c});
        }
        catch (err) {
            res.json({status : "NOT OK", msg : err});
        }
    },
    AddQuest: async (req, res) => { // lisäyksessä data bodyssä
        // Check that all the needed params are defined
        if(req.body.Etunimi == undefined || req.body.Sukunimi == undefined || req.body.sposti == undefined || 
            req.body.allergiat == undefined || req.body.Etunimi == "" || req.body.Sukunimi == "" || req.body.sposti == ""){

                res.statusCode = 400;
                res.send({ code: "NOT OK", error_msg: "Kenttiä puuttui tai olivat tyhjiä"});
                return;
        }
        try {
            console.log("Lisäys alkaa");
            let c = await sql.addQuest(req.body.Etunimi,req.body.Sukunimi,req.body.sposti,req.body.allergiat);
            console.log("c: ",c);
            req.body.idvieraat = c.insertId;
            res.json({ status: "OK", Quest : req.body});
        }
        catch (err) {
            res.json({status : "NOT OK", msg : err});
        }
    }

}