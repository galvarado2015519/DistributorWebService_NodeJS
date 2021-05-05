'use strict'

const ProductModel = require('../models/product.model');

const createProduct = async (req, res) =>{

    try{
        const product = new ProductModel(req.body);
        await product.save();

        return res.status(200).json({
            ok: true,
            product
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const updateProduct = async (req, res) =>{

    const { code } = req.params;

    try{
        const verify = await ProductModel.findByPk(code)

        if(!verify){
            return res.status(404).json({
                ok: false,
                msg: 'This code of product dont exist'
            }) 
        }

        const product = await ProductModel.update(req.body, {where: {code}})
        
        return res.status(200).json({
            ok: true,
            product
        }) 
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const deleteProduct = async (req, res) =>{

    const { code } = req.params;

    try{

        const verify = await ProductModel.findByPk(code)
        
        if(!verify){
            return res.status(200).json({
                ok: false,
                message: 'Product code dont exist'
            })
        }

        await ProductModel.destroy({where: {code}});

        return res.status(200).json({
            ok: true,
            message: 'Product Deleted'
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }
}

const getProduct = async (req, res) =>{

    const { code } = req.params;

    try{
        const product = await ProductModel.findByPk(code)    

        if(!product){
            return res.status(404).json({
                ok: false,
                msg: 'Product dont exiss'
            })    
        }
        
        return res.status(200).json({
            ok: true,
            product
        })
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
        const products = await ProductModel.findAll();

        if(!products){
            return res.status(404).json({
                ok: false,
                msg: 'Dont exist registers'
            })
        }

        return res.status(200).json({
            ok: true,
            products
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
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getProducts
}