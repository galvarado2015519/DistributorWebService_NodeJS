'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const userRoute = require("./routes/user.route");
const productRoute = require("./routes/product.route");
const processSchedule = require("./routes/proccessSchedule.route");
const distributorRoute = require("./routes/distributor.route");
const authorizedChannelRoute = require("./routes/user.route");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.json({message: "Welcome to the distributor server"});
}); 

app.use('/user', userRoute);
app.use('/product', productRoute);
app.use('/Schedule', processSchedule);
app.use('/distributor', distributorRoute);
app.use('/Channel', authorizedChannelRoute);

module.exports = app;