const express = require('express');
const app = express()
const orderRoute = require('./Routes/order.route')
const productRoute = require("./Routes/product.route");
app.use(express.json());


app.use("/order",orderRoute)
app.use("/api/v1", productRoute);


module.exports = app



