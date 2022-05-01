const express = require('express');
const app = express()
const orderRoute = require('./Routes/order.route')

app.use("/order",orderRoute)

module.exports = app



