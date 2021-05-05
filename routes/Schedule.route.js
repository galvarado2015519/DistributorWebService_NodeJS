'use strict'

const ScheduleController = require("../controllers/Schedule.controller");
const express = require("express");
const api = express.Router();

api.get('/', ScheduleController.getSchedules);
api.get('/:code', ScheduleController.getSchedule);
api.post('/', ScheduleController.createSchedule);
api.put('/:code', ScheduleController.updateSchedule);
api.delete('/:code', ScheduleController.deleteSchedule);

module.exports = api;