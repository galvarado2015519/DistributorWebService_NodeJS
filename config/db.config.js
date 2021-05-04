'use strict'

const { Sequelize } = require("sequelize/types");

const sequelize = new Sequelize({
    database: "distributordb",
    dialect: "mysql",
    host: "localhost",
    password: "admin",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    username: "root"
});


module.exports = {
    sequelize
};