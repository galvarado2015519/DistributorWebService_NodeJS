'use strict'

const { DataTypes } = require("sequelize/types");
const { sequelize } = require("../config/db.config");

const UserModel = sequelize.define("user", {
    code:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'The name is required'}
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {msg: 'This email is invalid'},
            notNull: { msg: 'Email is required'}
        }
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {msg: 'Phone is required'}
        }
    },
    distributorCode:{
        type: DataTypes.INTEGER,
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

module.exports = UserModel;