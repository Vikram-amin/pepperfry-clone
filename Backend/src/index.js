const express = require('express');
const app = express()
const orderRoute = require('./Routes/order.route')
const productRoute = require("./Routes/product.route");
const userRoute = require("./Routes/user.route")
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

if (process.env.NODE_ENV !== "PRODUCTION") {
  // require("dotenv").config({ path: "config.env" });
   require("dotenv").config({ path: "Backend/src/config/config.env" });

  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());

  app.use("/api/v1/", orderRoute);
  app.use("/api/v1/", productRoute);
  app.use("/api/v1/user", userRoute);

}


module.exports = app



