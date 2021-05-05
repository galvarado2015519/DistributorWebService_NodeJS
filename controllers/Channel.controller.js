'use strict'

const ChannelModel = require('../models/Channel.model');

const createChannel = async (req, res) =>{

    try{
        const channel = new ChannelModel(req.body);
        await channel.save();

        return res.status(200).json({
            ok: true,
            channel
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const updateChannel = async (req, res) =>{

    const { code } = req.params;

    try{
        const verify = await ChannelModel.findByPk(code)

        if(!verify){
            return res.status(404).json({
                ok: false,
                msg: 'This code of channel dont exist'
            }) 
        }

        const channel = await ChannelModel.update(req.body, {where: {code}})
        
        return res.status(200).json({
            ok: true,
            channel
        }) 
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const deleteChannel = async (req, res) =>{

    const { code } = req.params;

    try{
        const verify = await ChannelModel.findByPk(code)
        
        if(!verify){
            return res.status(200).json({
                ok: false,
                message: 'Channel code dont exist'
            })
        }

        await ChannelModel.destroy({where: {code}});

        return res.status(200).json({
            ok: true,
            message: 'channel Deleted'
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const getChannel = async (req, res) =>{

    const { code } = req.params;

    try{
        const channel = await ChannelModel.findByPk(code)    

        if(!channel){
            return res.status(404).json({
                ok: false,
                msg: 'Channel dont exist'
            })    
        }
        
        return res.status(200).json({
            ok: true,
            channel
        })
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
        const channels = await ChannelModel.findAll();

        if(!channels){
            return res.status(404).json({
                ok: false,
                msg: 'Dont exist registers'
            })
        }

        return res.status(200).json({
            ok: true,
            channels
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
    createChannel,
    updateChannel,
    deleteChannel,
    getChannel,
    getChannels
}