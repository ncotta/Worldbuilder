const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../models/User');

const salt = bcrypt.genSaltSync(10);


router.post("/", async (req, res) => {
    const { username, password } = req.body;

    try { 
        const userDoc = await User.create({ 
            username, 
            password: bcrypt.hashSync(password, salt),
            role: 1
        });
        res.json(userDoc);
    } catch(e) {
        res.status(400).json(e);
    }
});

module.exports = router;