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



    // let token = req.headers.authorization || req.query.authorization;

    // if (token && token.startsWith("Bearer ")) {
    //   token = token.substring(7, token.length);
    //   if (token.split(" ")[0] === "JWT") {
    //     throw new CustomError("Unauthorized", 401);
    //   }
    //   // For JWT Verification
    //   jwt.verify(token, "ANYFRHFRRECANY", function (err, decoded) {
    //     if (err) {
    //       return res.json({ message: err.message });
    //     }
    //   });
     
    //   next()

    // } else if (req.query && req.query.token) {
    //   return req.query.token;
      
    // }
    //  return res.send("errro");

    const verifyToken = (token) => {
      return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
          if (err) return reject(err);

          return resolve(payload);
        });
      });
    };



       const bearer = req.headers.authorization;

       if (!bearer || !bearer.startsWith("Bearer")) {
         return res
           .status(401)
           .json({
             status: "failed",
             message: "Your email or password is not correct",
           });
       }

       // we need to verify the token
       const token = bearer.split("Bearer ")[1].trim();
       console.log("token", token);

       // retrive the user if user exits then good else bad token
       let payload;
       try {
         payload = await verifyToken(token);
         console.log(payload);
       } catch (error) {
         return res.status(500).json({ message: error.message });
       }

       let user;
       try {
         user = User.findById(payload.id).lean().exec();
       } catch (error) {
         return res.status(500).json({ message: error.message });
       }

       if (!user) {
         return res
           .status(401)
           .json({
             status: "failed",
             message: "Your email or password is not correct",
           });
       }

       req.user = user;
       next();

}

module.exports = { isAuthenticatedUser} 