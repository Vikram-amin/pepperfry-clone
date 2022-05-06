const {body, validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const client = require("twilio")(
    process.env.ACCOUNT_SID,
    process.env.AUTH_TOKEN
);

const User = require('../model/order.model');

//Create or Register User
const createUser = async(req, res, next) => {

    
    const errors = validationResult(req);
    if(errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    try{
        let user = await User.findOne({mobile_number: req.body.mobile_number});
        if(user){
            return res.status(400).json({error: "Please enter a unique phone number"});
        }

        const salt = await bcrypt.genSalt(10);
        const secretPassword = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            mobile_number: req.body.mobile_number,
            email: req.body.email,
            password: secretPassword
        });

        const data = {
            user: {
                id: user.id
            }
        };

        const AUTH_TOKEN = jwt.sign(data, process.env.JWT_SECRET_KEY);
        res.json({status: 200, AUTH_TOKEN});
    }catch{
        console.log(error.message);
        res.status(500).json("Internal Server Error");
    }
}

//User Login
const userLogin =  async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {mobile_number, password} = req.body;
    try {
        let user = await User.findOne({mobile_number});
        if(!user){
            return res.status(400).json({status: 400, error: "Invalid Credentials"});
        }

        const comparePassword = await bcrypt.compare(password, user.password);
        if(!comparePassword){
            return res.status(400).json({status: 400, error: "Invalid Credentials"});
        }

        const data = {
            user: {
                id: user.id
            }
        };

        const AUTH_TOKEN = jwt.sign(data, process.env.JWT_SECRET_KEY);
        console.log(AUTH_TOKEN);
        res.json({status: 200, AUTH_TOKEN});
    } catch (error) {
        console.log(error.message);
        res.status(500).json("Internal Server Error");
    }
}

// Get User
const getUser = async(req, res, next) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send({status:200, user});
    } catch (error) {
        res.send("Internal Server Error");
    }
}

//User Login with OTP
const loginViaOTP = async(req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {mobile_number} = req.body;
    try {
        let user = await User.findOne({mobile_number});
        if(!user){
            return res.status(400).json({status: 401, error: "Phone Number is not registered"});
        }

        client.verify
        .services(process.env.SERVICE_ID)
        .verifications.create({
            to: `+91${mobile_number}`,
            channel: "sms"
        })
        .then((data) => {
            res.status(200).json({status:200, data});
        })
        .catch((err) => {
            console.log(err.message);
            res.status(400).json({sucess: false, message: "error in sending otp"});
        });
    }catch(error){
        console.log(error.message);
        res.status(500).json("Internal Server Error");
    }
}

//OTP Verification
const verifyOTP = async(req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { code } = req.body;
    const { mobile_number } = req.query;
    try{
        let user = await User.findOne({mobile_number});

        //Check if the otp is verified or not
        client.verify
        .services(process.env.SERVICE_ID)
        .verificationChecks.create({
            to: `+91${mobile_number}`,
            code: code
        })
        .then((message) => {
            if(message.status !== "approved"){
                return res.status(400).json({success: false, error: "Inavlid OTP"});
            }
            const data = {
                user: {
                    id: user.id
                }
            };
            const AUTH_TOKEN = jwt.sign(data, process.env.JWT_SECRET_KEY);
            res.json({status: 200, AUTH_TOKEN});
        });
    }catch(error){
        console.log(error.message);
        res.status(500).json("Internal Server Error");
    }
}

//Edit User Details (Login Required)
const editUserDetails = async(req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.user.id, req.body, {
            new: true
        });
        res.status(200).json({status:200, user});
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    createUser,
    userLogin,
    getUser,
    loginViaOTP,
    verifyOTP,
    editUserDetails
}