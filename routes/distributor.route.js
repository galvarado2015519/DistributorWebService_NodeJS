'use strict'

const distributorController = require("../controllers/distributor.controller");
const express = require("express");
const api = express.Router();

api.get('/', distributorController);
api.post('/', distributorController);
api.put('/:id', distributorController);
api.delete('/:id', distributorController);

module.exports = api;