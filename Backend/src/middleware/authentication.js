const jwt = require('jsonwebtoken');
const User = require("../model/user.model");

const isAuthenticatedUser = async(req, res, next) => {
//   const token = req.header("authToken");
const token = req.headers.token;
console.log(token)

  if (!token){
    return res.status(401).send({ error: "Please Login first" });
  }

  try{
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(data._id)
    next()

  } catch (error){
    return res.status(401).send({ message : error.message});
  }
}

module.exports = { isAuthenticatedUser} 