'use strict'

const ScheduleModel = require('../models/Schedule.model');
const { Op } = require('sequelize');

const createSchedule = async (req, res) =>{

    try{
        const schedule = new ScheduleModel(req.body);
        await schedule.save();

        return res.status(200).json({
            ok: true,
            schedule
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const updateSchedule = async (req, res) =>{

    const { code } = req.params;
    try{
        
        const schedule = await ScheduleModel.update(req.body, {where: {code}})
        
        return res.status(200).json({
            ok: true,
            schedule
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const deleteSchedule = async (req, res) =>{

    const { code } = req.params;

    try{
        await ScheduleModel.destroy({where: {code}});

        return res.status(200).json({
            ok: true,
            message: 'Horario Eliminado'
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const getSchedule = async (req, res) =>{

    const { code } = req.params;
    
    try{
        const schedule = await ScheduleModel.findByPk(code)    

        if(!schedule){
            return res.status(404).json({
                ok: false,
                msg: 'Schedule dont exiss'
            })    
        }
        
        return res.status(200).json({
            ok: true,
            schedule
        })

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
        const schedules = await ScheduleModel.findAll();

        if(!schedules){
            return res.status(404).json({
                ok: false,
                msg: 'Dont exist registers'
            })
        }

        return res.status(200).json({
            ok: true,
            schedules
        })
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