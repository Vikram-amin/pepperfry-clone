const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name:{type: String, required: true},
        mobile_number: {
            type: Number,
            required: true,
            unique: true,
            minlength: 10
        },
        email: {type: String, required: true},
        password: {type: String, required: true, minLength: 8}
    }
)

const User = mongoose.model("user", UserSchema);
module.exports = User;