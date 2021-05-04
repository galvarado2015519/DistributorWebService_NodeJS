'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const userRoute = require("./routes/user.route");
const productRoute = require("./routes/product.route");
const scheduleRoute = require("./routes/Schedule.route");
const distributorRoute = require("./routes/distributor.route");
const channelRoute = require("./routes/channel.route");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// app.use('/user', userRoute);
// app.use('/product', productRoute);
// app.use('/Schedule', scheduleRoute);
// app.use('/distributor', distributorRoute);
// app.use('/Channel', channelRoute);

module.exports = app;