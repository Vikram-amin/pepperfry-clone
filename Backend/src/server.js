

const connectToDB = require("./config/dbConnect");
const app = require("./index");

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "Backend/src/config/config.env" });
}

const server = app.listen(process.env.PORT, () => {
  new connectToDB();
  console.log(`Server is listening at port: ${process.env.PORT}`);
});


