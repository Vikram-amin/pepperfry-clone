const express = require("express");
const router = express.Router();
const {createUser, userLogin, getUser, loginViaOTP, verifyOTP, editUserDetails} = require('../controllers/user.controller');

let jwt = require("jsonwebtoken");

const fetchUser = (req, res, next) => {
  const token = req.header("authToken");
  if (!token){
    return res.status(401).send({ error: "Please authenticate first" });
  }

  try{
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = data.user;
    next();
  } catch (error){
    console.log(error.message);
    return res.status(401).send({ error: "Please authenticate first" });
  }
};

// Route 1:
router.post('/user/register', [
    body("name", "Please enter a name"),
    body("email", "Please enter a valid email").isEmail(),
    body("password", "Password must be atleast 8 characters"),
    body("mobile_number", "Please enter a valid mobile number").isLength({
      min: 10,
    })
],createUser);

// Route 2:
router.post('/user/login', [
    body("mobile_number", "Please enter a valid mobile number").isLength({
      min: 10,
    }),
    body("password", "Password can not be blank").exists()
], userLogin);

// Route 3:
router.get('/user/getuser', fetchUser, getUser);

// Route 4:
router.post('/user/otplogin', [
    body("mobile_number", "Please enter a valid mobile number").isLength({
      min: 10,
    })
], loginViaOTP);

// Route 5:
router.post('/user/otpverify',
    [body("code", "Otp must be 4 digit").isLength({ min: 4, max: 4 })],
    verifyOTP
)

// Route 6:
router.put('/user/edituser', fetchUser, editUserDetails);

module.exports = router;