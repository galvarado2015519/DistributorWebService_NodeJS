'use strict'

const ProductController = require("../controllers/product.controller");
const express = require("express");
const api = express.Router();

api.get('/', ProductController.getProduct);
api.get('/:code', ProductController.getProducts);
api.post('/', ProductController.createProduct);
api.put('/:code', ProductController.updateProduct);
api.delete('/:code', ProductController.deleteProduct);

module.exports = api;