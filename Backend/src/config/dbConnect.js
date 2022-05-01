const mongoose = require("mongoose");
require('dotenv').config()

class Mongo {
  constructor() {
    this.createMongoConnection();
  }

  createMongoConnection() {
    mongoose.connect(process.env.DB_URI);

    mongoose.connection.once("open", () => {
      console.log("MongoDB is connected");
    });
    mongoose.connection.on("error", () => {
      console.log("Error occured in mongoDB connection");
    });
  }
}

module.exports = Mongo;
