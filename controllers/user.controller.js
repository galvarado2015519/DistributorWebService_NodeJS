'use strict'

const UserModel = require('../models/user.model');
const { Op } = require('sequelize');

const createUser = async (req, res) =>{

    try{
        
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const updateUser = async (req, res) =>{

    try{
        
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const deleteUser = async (req, res) =>{

    try{
        
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const getUser = async (req, res) =>{

    try{
        
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const getUsers = async (req, res) =>{

    try{
        
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUser,
    getUsers
}