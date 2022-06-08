const jwt = require('jsonwebtoken');
const User = require("../model/user.model");

require("dotenv").config();

const isAuthenticatedUser = async(req, res, next) => {



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
      //  console.log("token", token);

       // retrive the user if user exits then good else bad token
       let payload;
       try {
         payload = await verifyToken(token);
        //  console.log(payload);
       } catch (error) {
         return res.status(500).json({ message: error.message });
       }

       let user;
       try {
         user = await User.findById(payload.id).lean().exec();
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

      //  console.log(user)

       req.user = user;
       next();

}

module.exports = { isAuthenticatedUser} 



