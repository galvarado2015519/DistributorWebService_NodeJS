'use strict'

const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db.config');

const DistributorModel = sequelize.define('Distributor', {
    code: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    }, 
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'Name is required'}
        }
    },
    notificationEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: { msg: 'Invalid email'},
            notNull: { msg: 'Notification email is required'}
        }
    },
    alertEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: { msg: 'Invalid email'},
            notNull: { msg: 'Alert email is required'}
        }
    }
}, {
    timestamps: false,
    tableName: 'Distributor'
});

module.exports = DistributorModel;