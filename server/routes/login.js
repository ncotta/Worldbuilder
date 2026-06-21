/**
 * Login route for user authentication
 * Verifies the provided username and password against the database
 * If the credentials are correct, generates a JWT token and sets it as a cookie
 * The token contains the user's username, id, and role
 */

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const jwtSecret = process.env.JWT_SECRET;

router.post("/", async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    if (!userDoc) return res.status(400).json("Wrong credentials");

    const passwordOk = bcrypt.compareSync(password, userDoc.password);
    if (passwordOk) {
        // User is authenticated, generate JWT token
        jwt.sign({ username, id: userDoc._id, role: userDoc.role }, jwtSecret, {}, (error, token) => {
            if (error) throw error;
            res.cookie("token", token, { 
                httpOnly: true,
                secure: true,
                sameSite: "None"
            }).json({
                id: userDoc._id,
                username,
                role: userDoc.role
            });
        });
    } else {
        // Password is incorrect
        res.status(400).json("Wrong credentials");
    }
});

module.exports = router;
