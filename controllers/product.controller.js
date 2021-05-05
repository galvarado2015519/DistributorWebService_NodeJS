'use strict'

const ProductModel = require('../models/product.model');
const { Op } = require('sequelize');

const createProduct = async (req, res) =>{

    try{
        
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const updateProduct = async (req, res) =>{

    try{
        
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const deleteProduct = async (req, res) =>{

    try{
        
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const getProduct = async (req, res) =>{

    try{
        
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const getProducts = async (req, res) =>{

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
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getProducts
}