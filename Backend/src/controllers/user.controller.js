const {body, validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../model/user.model");

// const client = require("twilio")(
//     process.env.ACCOUNT_SID,
//     process.env.AUTH_TOKEN
// );


// //Create or Register User
const registerUser = async(req, res, next) => {
    try{
       let user = await User.create({
            name: req.body.name,
            mobileNumber: req.body.mobileNumber,
            email: req.body.email,
            password: req.body.password
        });

        const token = user.getJWTtoken()

        res.status(201).json({
            success : true, 
            token
        })

    }catch(error){
        res.status(500).json({message : error.message});
    }
}

// //User Login
const userLogin = async(req,res,next) => {
    try {
        const { email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({message : "Please Enter the Email and password"})
        }

        const user = await User.findOne({email}).select("+password")
        if(!user){
             return res.status(401).json({message : "Invalid Email or password"})
        }

        const match = await user.comparePassword(password);
        if(!match){
            return res.status(401).json({status : "failed" , message : "Invalid email or password"})
        }

        const token = user.getJWTtoken();

        res.status(200).json({
            success: true,
            token,
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}



module.exports = {
  registerUser,
  userLogin,
};