const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const { isEmail } = require('validator');

const UserSchema = mongoose.Schema({
    name: { type: "String", required: true },
    email: { 
        type: "String", 
        required: [true, "Please enter an email"], 
        unique: true,
        validate: [isEmail,'Please enter a valid email']
    },
    password: { 
        type: "String", 
        required: [true, "Please enter a password"],
        minlength: [6, "Minimum password length is 6 characters"] 
    },
    pic: {
        type: "String",
        default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    }
},
    { timeStamps: true }
);

UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

UserSchema.pre("save", async function (next) {
    if (!this.isModified) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', UserSchema);

module.exports = User;