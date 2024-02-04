const asyncHandler = require('express-async-handler');
const User = require('../models/UserModel');
const generateToken = require('../config/generateToken');

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;

    if (!name || !email || !password) {
        res.status(404);
        throw new Error("Enter all required fields");
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
        pic
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            password: user.password,
            pic: user.pic,
            token: generateToken(user._id)
        });
    }
    else {
        res.status(404);
        throw new Error("User not found");
    }
});

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(404);
        throw new Error("Enter a valid email and password");
    }

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            password: user.password,
            pic: user.pic
        })
    }
    else {
        res.status(404);
        throw new Error("Enter valid username and password");
    }
});

module.exports = { registerUser, authUser };
