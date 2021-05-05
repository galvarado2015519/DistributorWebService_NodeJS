'use strict'

const UserModel = require('../models/user.model');
const { Op } = require('sequelize')

const createUser = async (req, res) =>{

    const  { email, phone } = req.body;

    try{
        const user = await UserModel.findOrCreate({ where: {[Op.or]:[ { email }, { phone } ]}, defaults: req.body});

        if(!user[1]){
            return res.status(400).json({
                ok:false,
                msg: 'Email or phone already exist in the database'
            })
        }
        return res.status(200).json({
            ok: true,
            user
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const updateUser = async (req, res) =>{

    const { code } = req.params;
    const { email, phone } = req.body;

    try{
        const verify = await UserModel.findByPk(code)

        if(!verify){
            return res.status(404).json({
                ok: false,
                msg: 'This code of user dont exist'
            }) 
        }else if (email){
            const repeatUser = await UserModel.findOne({ where: {[Op.or]:[ { email }, { phone }]}});
            if(user && (user.code !== Number(code))){
                return res.status(400).json({
                    ok: false,
                    msg: 'The email or phone already exist in the database '
                })
            }
        }

        const user = await UserModel.update(req.body, {where: {code}})
        
        return res.status(200).json({
            ok: true,
            user
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const deleteUser = async (req, res) =>{

    const { code } = req.params;

    try{
        const verify = await UserModel.findByPk(code)
        
        if(!verify){
            return res.status(200).json({
                ok: false,
                message: 'user code dont exist'
            })
        }

        const user =await UserModel.destroy({where: {code}});

        return res.status(200).json({
            ok: true,
            message: 'user Deleted',
            user: user
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const getUser = async (req, res) =>{

    const { code } = req.params;

    try{
        const user = await UserModel.findByPk(code)    
        
        if(!user){
            return res.status(404).json({
                ok: false,
                msg: 'user dont exist'
            })    
        }
        
        return res.status(200).json({
            ok: true,
            user
        })
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
        const users = await UserModel.findAll();

        if(!users){
            return res.status(404).json({
                ok: false,
                msg: 'Dont exist registers'
            })
        }

        return res.status(200).json({
            ok: true,
            users
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
    createUser,
    updateUser,
    deleteUser,
    getUser,
    getUsers
}