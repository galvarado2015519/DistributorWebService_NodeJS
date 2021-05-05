'use strict'

const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();

// Import routes
const userRoute = require("./routes/user.route");
const productRoute = require("./routes/product.route");
const scheduleRoute = require("./routes/Schedule.route");
const distributorRoute = require("./routes/distributor.route");
const channelRoute = require("./routes/channel.route");

// Configs of app
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

// Config app for routes
app.use('/user', userRoute);
app.use('/product', productRoute);
app.use('/schedule', scheduleRoute);
app.use('/distributor', distributorRoute);
app.use('/channel', channelRoute);

module.exports = app;