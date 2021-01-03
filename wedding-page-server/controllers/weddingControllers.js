/* This file includes logic what my server uses */ 
const sql = require('../db/weddingSQL');




module.exports = {

    fetchAll: async (req, res) => { 
        try {
            let c = await sql.getAllQuests();

            res.json({ status: "OK", data : c});
        }
        catch (err) {
            console.log(err);
            res.json({status : "NOT OK", msg : "Virhe haettaessa kaikkia"});
        }
    },
    fetChildren: async (req, res) => { 
        try {
            let c = await sql.getChildren();

            res.json({ status: "OK", data : c});
        }
        catch (err) {
            console.log(err);
            res.json({status : "NOT OK", msg : "Virhe haettaessa lapsia"});
        }
    },
    fetchAdults: async (req, res) => { 
        try {
            let c = await sql.getAdults();

            res.json({ status: "OK", data : c});
        }
        catch (err) {
            console.log(err);
            res.json({status : "NOT OK", msg : "Virhe haettaessa aikuisia"});
        }
    },
    fetchEmails: async (req, res) => { 
        try {
            let c = await sql.getEmails();

            res.json({ status: "OK", data : c});
        }
        catch (err) {
            console.log(err);
            res.json({status : "NOT OK", msg : "Virhe haettaessa sposteja"});
        }
    },
    fetchAllergies: async (req, res) => { 
        try {
            let c = await sql.getAllergies();

            res.json({ status: "OK", data : c});
        }
        catch (err) {
            console.log(err);
            res.json({status : "NOT OK", msg : "Virhe haettaessa allergioita"});
        }
    },
    fetchPassword: async (req, res) => { 
        if (req.query.user == undefined || req.query.user == "" || req.query.password === "" || req.query.password == undefined ){
            res.statusCode = 400;
            res.send({ status: "NOT OK", error_msg: "Käyttäjänimi tai salasana puuttui"});
            return;
        }
        try {
            console.log(req.query.user)
            let c = await sql.getPassword(req.query.user, req.query.password);
            
            console.log("C:" , c)

            if(c.length === 1){
                req.session.user = c[0].kayttajatunnus;
                console.log("Sessio: " ,req.session.user);
                res.send({ status: "OK", data : "Kirjautuminen ok"});
            }else{
                res.statusCode = 400;
                res.send({ status: "NOT OK", error_msg: "Käyttäjänimi tai salasana väärin"});
            }

            
        }
        catch (err) {
            console.log(err);
            res.json({status : "NOT OK", msg : "Virhe haettaessa salsanaa"});
        }
    },
    AddQuest: async (req, res) => { // lisäyksessä data bodyssä
        // Check that all the needed params are defined
        if(req.body.Etunimi == undefined || req.body.Sukunimi == undefined || req.body.sposti == undefined || 
            req.body.allergiat == undefined ||req.body.aikuinen == undefined || req.body.Etunimi == "" || req.body.Sukunimi == "" || req.body.sposti == ""){

                res.statusCode = 400;
                res.send({ status: "NOT OK", error_msg: "Kenttiä puuttui tai olivat tyhjiä"});
                return;
        }
        try {
            console.log("Lisäys alkaa");
            let c = await sql.addQuest(req.body.Etunimi,req.body.Sukunimi,req.body.sposti,req.body.allergiat, req.body.aikuinen);
            console.log("c: ",c);
            req.body.idvieraat = c.insertId;
            res.json({ status: "OK", data : req.body});
        }
        catch (err) {
            console.log(err);
            res.json({status : "NOT OK", msg : "Virhe lisättäessä vierasta"});
        }
    }

}