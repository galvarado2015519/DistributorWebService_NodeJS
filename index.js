'use strict'

const app = require('./app');
const mySql = require('mysql');
const {sequelize} = require('./config/db.config');

const dbConfig = sequelize;

const PORT = process.env.PORT || 3800;

// Conect with the data base and create the schema model
const connectDB = async() => {
    try {
        await sequelize.sync({ alter: false });
        console.log('DB is online');

    } catch (error) {
        console.log(error);
        return;
    }
}

connectDB();
require('./config/connectModels');

app.listen(PORT, ()=>{
    console.log('The server is running in the port: ' + PORT)
});

module.exports = connection;