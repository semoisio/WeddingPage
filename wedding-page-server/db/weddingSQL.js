/* This file includes all the database connections */ 

const { query } = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // this only for testing
    password: '',
    database: 'moisiot2022'
});

// below all the functions. 
module.exports = {
   // This function fetch all the quests from db and return promise
    getAllQuests: () => {

        return new Promise((resolve, reject) => {
            let query = "select idvieraat,Etunimi, Sukunimi,sposti,allergiat,aikuinen from ilmoittautuneet;";

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
    // This return all children
    getChildren: () => {

        return new Promise((resolve, reject) => {
            let query = "select idvieraat,Etunimi, Sukunimi,sposti,allergiat,aikuinen from ilmoittautuneet where aikuinen = 0;";

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
    // This return all children
    getAdults: () => {

        return new Promise((resolve, reject) => {
            let query = "select idvieraat,Etunimi, Sukunimi,sposti,allergiat,aikuinen from ilmoittautuneet where aikuinen = 1;";

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
    addQuest: (etunimi,sukunimi,sposti,allergiat,aikuinen) => {
        return new Promise((resolve , reject) =>{
            let query = "INSERT INTO `ilmoittautuneet` (`Etunimi`,`Sukunimi`,`sposti`,`allergiat`,`aikuinen`) VALUES (?, ?,?,?,?);";

            connection.query(query,[etunimi,sukunimi,sposti,allergiat,aikuinen], function(error, result, fields){
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
    getPassword: (user) => {
        return new Promise((resolve , reject) =>{
            let query = "select salasana from kirjautuminen where kayttajatunnus = ?;";

            connection.query(query,[user], function(error, result, fields){
                if(error){
                    reject(error);
                }
                else{
                    resolve(result);
                }
            })
        })
    }
}