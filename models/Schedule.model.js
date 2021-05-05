'use strict'

const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/db.config');

const ScheduleModel = sequelize.define('Schedule', {
    code:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    start: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'Start time is required'}
        }
    },
    end: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {msg: 'End time is required'},
        }
    },
    distributorCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Distributor',
            key: 'code'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
}, {
    timestamps: false
});

module.exports = ScheduleModel;