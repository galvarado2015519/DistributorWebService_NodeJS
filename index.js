'use strict'

const app = require('./app');
const mySql = require('mysql');
const {sequelize} = require('./config/db.config');

const dbConfig = sequelize;

const PORT = process.env.PORT || 3800;

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
        app.listen(PORT, ()=>{
            console.log('The server is running in the port: ' + PORT)
        });
    }
});



 module.exports = connection;