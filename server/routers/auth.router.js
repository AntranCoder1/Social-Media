const express = require('express');
const router = express.Router();
const User = require('../models/users.models');
const bcrypt = require("bcrypt");

// @route api/auth/register
// @desc POST user
// @access Public
router.post('/register', async (req, res) => {
    try {
        // generate a new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        // save user and respond
        const user = await newUser.save();
        res.status(200).json({ success: true, message: 'User create successfully', user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" })
    }
})

// @router api/auth/login
// @desc POST user
// @access Public
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(500).json({ success: false, message: 'User not found' });

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json({ success: false, message: 'Wrong password' });

        res.status(200).json({ success: true, message: 'User logged in successfully', user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
})

module.exports = router;