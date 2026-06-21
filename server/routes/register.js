/**
 * Registration route for user authentication
 * Creates a new user in the database with the provided username and password
 * The password is hashed using bcrypt before being stored in the database
 * The role is set to 1 for regular users by default
 */

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const User = require('../models/User');

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
