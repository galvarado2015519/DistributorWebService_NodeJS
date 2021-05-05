'use strict'

const ChannelController = require("../controllers/Channel.controller");
const express = require("express");
const api = express.Router();

api.get('/', ChannelController.getChannel);
api.get('/:code', ChannelController.getChannels);
api.post('/', ChannelController.createChannel);
api.put('/:code', ChannelController.updateChannel);
api.delete('/:code', ChannelController.deleteChannel);

module.exports = api;