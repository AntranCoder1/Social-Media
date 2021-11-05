const express = require('express');
const router = express.Router();
const User = require('../models/users.models');
const bcrypt = require('bcrypt');

// @router api/users/:id
// @desc PUT user
// @access Private
router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (error) {
                console.log(error);
                res.status(500).json({ success: false, message: 'Incorrect password' });
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json({ success: true, message: 'Account has been updated' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: 'Internal server erorr' });
        }
    } else {
        res.status(403).json({ success: false, message: 'You can updated only your account!' })
    }
})



module.exports = router;