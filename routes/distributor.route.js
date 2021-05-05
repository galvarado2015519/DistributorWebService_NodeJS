'use strict'

const distributorController = require("../controllers/distributor.controller");
const express = require("express");
const api = express.Router();

api.get('/:code', distributorController.getDistributor);
api.post('/', distributorController.createDistributor);
api.put('/:code', distributorController.updateDistributor);
api.delete('/:code', distributorController.deleteDistributor);
api.get('/', distributorController.getDistributors);

module.exports = api;