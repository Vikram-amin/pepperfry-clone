const express = require('express');
const app = express()
const orderRoute = require('./Routes/order.route')
const productRoute = require("./Routes/product.route");
const userRoute = require("./Routes/user.route")
app.use(express.json());


app.use("/api/v1/order",orderRoute)
app.use("/api/v1", productRoute);
app.use("/api/v1/user" , userRoute)


module.exports = app



