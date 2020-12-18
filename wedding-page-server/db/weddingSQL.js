const { query } = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // this only in testing
    password: '',
    database: 'moisiot2022'
});

// below all the functions. 
module.exports = {
   // This function fetch all the quests from db and return promise
    getAllQuests: () => {

        return new Promise((resolve, reject) => {
            let query = "select idvieraat,Etunimi, Sukunimi,sposti,allergiat from ilmoittautuneet;";

            connection.query(query, function (error, result, fields) {

                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        })
    },
    // This fucntion fetch all the emails from db.
    getEmails: () => {
        return new Promise((resolve , reject) =>{
            let query = "select distinct sposti from ilmoittautuneet;";

            connection.query(query, function(error, result, fields){
                if(error){
                    reject(error);
                }
                else{
                    resolve(result);
                }
            })
        })
    },
    // This function fetch all the allergies from db
    getAllergies: () => {
        return new Promise((resolve , reject) =>{
            let query = "select allergiat from ilmoittautuneet;";

            connection.query(query, function(error, result, fields){
                if(error){
                    reject(error);
                }
                else{
                    resolve(result);
                }
            })
        })
    },
    //This fucntion add one quest to db.
    addQuest: (etunimi,sukunimi,sposti,allergiat) => {
        return new Promise((resolve , reject) =>{
            let query = "INSERT INTO `ilmoittautuneet` (`Etunimi`,`Sukunimi`,`sposti`,`allergiat`) VALUES (?, ?,?,?);";

            connection.query(query,[etunimi,sukunimi,sposti,allergiat], function(error, result, fields){
                if(error){
                    console.log("virhe:", error);
                    reject(error);
                }
                else{
                    console.log("Onnistu");
                    resolve(result);
                }
            })
        })
    }
}