'use strict'

const ScheduleModel = require('../models/Schedule.model');
const { Op } = require('sequelize');

const createSchedule = async (req, res) =>{

    try{
        
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const updateSchedule = async (req, res) =>{

    try{
        
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const deleteSchedule = async (req, res) =>{

    try{
        
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const getSchedule = async (req, res) =>{

    try{
        
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const getSchedules = async (req, res) =>{

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
    createSchedule,
    updateSchedule,
    deleteSchedule,
    getSchedule,
    getSchedules
}