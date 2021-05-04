'use strict'

const mySql = require('mysql');
const dbConfig = require('./config/db.config');

const port = 3800;
const app = require('./app');

const connection = mySql.createConnection({
    host:dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

connection.connect(error => {
    if(error) throw error;
    else{
        console.log("Conection success with database");
        app.listen(port, ()=>{
            console.log('The server is running in the port: ' + port)
        })
    }
});

module.exports = connection;