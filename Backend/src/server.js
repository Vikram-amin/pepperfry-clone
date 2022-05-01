require("dotenv").config();
const PORT = process.env.PORT || 8000;
const connectToDB = require("./config/dbConnect");
const app = require("./index");



const server = app.listen(PORT, () => {
  new connectToDB();
  console.log(`Server is listening at port: ${PORT}`);
});


