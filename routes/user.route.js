'use strict'

const userController = require("../controllers/user.controller");
const express = require("express");
const api = express.Router();

api.get('/', userController);
api.post('/', userController);
api.put('/:id', userController);
api.delete('/:id', userController);

module.exports = api;