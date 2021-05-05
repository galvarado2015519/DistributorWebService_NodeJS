'use strict'

const ChannelModel = require('../models/Channel.model');
const { Op } = require('sequelize');

const createChannel = async (req, res) =>{

    try{
        
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const updateChannel = async (req, res) =>{

    try{
        
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const deleteChannel = async (req, res) =>{

    try{
        
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const getChannel = async (req, res) =>{

    try{
        
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const getChannels = async (req, res) =>{

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
    createChannel,
    updateChannel,
    deleteChannel,
    getChannel,
    getChannels
}