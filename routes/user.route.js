'use strict'

const UserController = require("../controllers/user.controller");
const express = require("express");
const api = express.Router();

api.get('/', UserController.getUsers);
api.get('/:code', UserController.getUser);
api.post('/', UserController.createUser);
api.put('/:code', UserController.updateUser);
api.delete('/:code', UserController.deleteUser);

module.exports = api;