const express = require("express");
const router = express.Router();
const {registerUser, userLogin, getUser, loginViaOTP, verifyOTP, editUserDetails} = require('../controllers/user.controller');

router.post( "/register",registerUser);
router.post("/login", userLogin)


module.exports = router;