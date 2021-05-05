'use strict'

const ProductController = require("../controllers/product.controller");
const express = require("express");
const api = express.Router();

api.get('/', ProductController.getProducts);
api.get('/:code', ProductController.getProduct);
api.post('/', ProductController.createProduct);
api.put('/:code', ProductController.updateProduct);
api.delete('/:code', ProductController.deleteProduct);

module.exports = api;