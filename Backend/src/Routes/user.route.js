const express = require("express");
const router = express.Router();
const {registerUser, userLogin, userLogout, } = require('../controllers/user.controller');

router.post( "/register",registerUser);
router.post("/login", userLogin);
router.get("/logout",userLogout)


module.exports = router;