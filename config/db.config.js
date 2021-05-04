'use strict'

const { Sequelize } = require("sequelize/types");

const sequelize = new Sequelize({
    HOST: "localhost",
    USER: "root",
    PASSWORD: "admin",
    DB: "distributordb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});


module.exports = {
    sequelize
};