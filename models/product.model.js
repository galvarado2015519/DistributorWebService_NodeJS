'use strict'

const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db.config');

const ProductModel = sequelize.define('Product', {
    code:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'Description is required'}
        }
    },
    amount:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'Amount is required'}
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

module.exports = ProductModel;