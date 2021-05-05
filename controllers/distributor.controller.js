'use strict'

const { Op } = require('sequelize');
const DistributorModel = require('../models/distributor.model');

const createDistributor = async (req ,res) =>{
    const { notificationEmail, alertEmail } = req.body;

    try{
        let distributor = await DistributorModel.findOrCreate({ where: { [Op.or] : [{ notificationEmail}, {alertEmail}] }, defaults: req.body})
        
        if(!distributor[1]){
            return res.json({
                ok: false,
                msg: 'This email has already exist!'
            });
        }

        return res.json({
            ok: true,
            distributor: distributor[0]
        })

    }catch(err){
        console.log(err)
        return res.status(500).json({
            error: err
        })
    }
}

const updateDistributor = async (req, res) =>{
    const { code } = req.params;
    const { notificationEmail, alertEmail} = req.body;

    try{
        if(notificationEmail){
            const distributor = await DistributorModel.findOne({ where: { notificationEmail }})
            if(distributor && (distributor.code !== Number(code))){
                return res.json({
                    ok: false,
                    msg: 'This email are you using !'
                })
            }
        }else{
            const distributor = await DistributorModel.findOne({ where: { alertEmail }})
            if(distributor && (distributor.code !== Number(code))){
                return res.json({
                    ok: false,
                    msg: 'This email are you using !'
                })
            }
        }

        const distributor = await DistributorModel.update( req.body, { where: { code} } );
        return res.status(200).json({
            ok: true,
            distributor
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            error
        })
    }
}

const deleteDistributor = async (req, res) => {
    const { code } = req.params;

    try{
        let distributor = await DistributorModel.findByPk(code);

        if(!distributor){
            return res.status(404).json({
                ok: false,
                msg: 'This distributor dont exist'
            })
        }

        distributor = await DistributorModel.destroy({ where: { code } } );
        return res.status(200).json({
            ok: true,
            distributor
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const getDistributor = async(req, res) =>{
    const { code } = req.params;

    try{
        let distributor = await DistributorModel.findByPk( code )

        if(!distributor){
            return res.status(404).json({
                ok: false,
                msg: 'This user dont exist'
            })
        }
        return res.json({
            ok: true,
            distributor
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}


const getDistributors = async(req, res) =>{

    try{
        const distributors = await DistributorModel.findAll();

        if(!distributors){
            return res.status(404).json({
                ok: false,
                msg: 'Dont exist registers'
            })
        }
        
        return res.json({
            ok: true,
            distributors
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
    createDistributor,
    updateDistributor,
    deleteDistributor,
    getDistributor,
    getDistributors
}