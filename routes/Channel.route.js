'use strict'

const ChannelController = require("../controllers/Channel.controller");
const express = require("express");
const api = express.Router();

api.get('/', ChannelController);
api.post('/', ChannelController);
api.put('/:id', ChannelController);
api.delete('/:id', ChannelController);

module.exports = api;