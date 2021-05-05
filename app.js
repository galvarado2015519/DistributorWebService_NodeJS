'use strict'

const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();

const userRoute = require("./routes/user.route");
const productRoute = require("./routes/product.route");
const scheduleRoute = require("./routes/Schedule.route");
const distributorRoute = require("./routes/distributor.route");
const channelRoute = require("./routes/channel.route");


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use('/user', userRoute);
app.use('/product', productRoute);
app.use('/schedule', scheduleRoute);
app.use('/distributor', distributorRoute);
app.use('/channel', channelRoute);

module.exports = app;