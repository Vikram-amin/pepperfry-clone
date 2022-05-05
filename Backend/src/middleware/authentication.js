const jwt = require('jsonwebtoken');
const User = require("../model/user.model");

const isAuthenticatedUser = async(req, res, next) => {

  //const token = req.headers.token;
  // const token = req.headers.authorization;
  // console.log()

  //   if (!token){
  //     return res.status(401).send({ error: "Please Login first" });
  //   }

  //   try{
  //     const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  //     req.user = await User.findById(decodedData.id);
  //     next();

  //   } catch (error){
  //     return res.status(401).send({ message : error.message});
  //   }



    let token = req.headers.authorization || req.query.authorization;

    if (token && token.startsWith("Bearer ")) {
      token = token.substring(7, token.length);
      if (token.split(" ")[0] === "JWT") {
        throw new CustomError("Unauthorized", 401);
      }
      // For JWT Verification
      jwt.verify(token, "ANYFRHFRRECANY", function (err, decoded) {
        if (err) {
          return res.json({ message: err.message });
        }
      });
     
      next()

    } else if (req.query && req.query.token) {
      return req.query.token;
      
    }
     return res.send("errro");

}

module.exports = { isAuthenticatedUser} 