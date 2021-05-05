'use strict'

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.config');

const ChannelModel = sequelize.define('Channel', {
    code: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'Name is required'}
        }
    },
    distributorCode: {
        type:DataTypes.INTEGER,
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
})

module.exports = ChannelModel;