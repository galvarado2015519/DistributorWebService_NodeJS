'use strict'

const UserController = require("../controllers/user.controller");
const express = require("express");
const api = express.Router();

api.get('/', UserController.getUser);
api.get('/:code', UserController.getUsers);
api.post('/', UserController.createUser);
api.put('/:code', UserController.updateUser);
api.delete('/:code', UserController.deleteUser);

module.exports = api;