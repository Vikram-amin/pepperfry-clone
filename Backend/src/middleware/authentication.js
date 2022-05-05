const jwt = require('jsonwebtoken');
const User = require("../model/user.model");

const isAuthenticatedUser = async(req, res, next) => {

  //const token = req.headers.token;
  const token = req.cookies;



    if (!token){
      return res.status(401).send({ error: "Please Login first" });
    }

    try{
      const decodedData = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decodedData.id);
      next();

    } catch (error){
      return res.status(401).send({ message : error.message});
    }
}

module.exports = { isAuthenticatedUser} 