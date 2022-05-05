const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
        name:{
            type: String, 
            required:[true , "Please Enter Your Name"],
            minLength:1
        },

        mobileNumber: { 
            type: Number,
            required:[true, "Please Enter Your Mobile Number "],
            unique: true,
            minlength: 10
        },
        email: {
            type: String,
            required:[ true, "Please Enter Your Email"],
            unique : true,
            validate : [validator.isEmail, " Please Enter Valid Email"]
        },
        password: {
            type: String,
            required: [true, "Please Enter Your Password"],
            minLength: 8,
            select : false,
        }
    }
)


// bcrypt the passoword  before

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')){ // check passwors is hashed
        return next()
    }
    this.password =await bcrypt.hash(this.password, 8)
})


// do login along with register

userSchema.methods.getJWTtoken = function(){
    return jwt.sign({ id: this._id.toString() }, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRES,
    });
}

// compare the passord for signin 

userSchema.methods.comparePassword = async function (enteredPassword) {
  const passwordHash = this.password;
  return await bcrypt.compare(enteredPassword, passwordHash);
};




const User = mongoose.model("user", userSchema);
module.exports = User;