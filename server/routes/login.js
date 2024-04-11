const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

const User = require('../models/User');


router.post("/", async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    if (!userDoc) return res.status(400).json("Wrong credentials");

    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
        // logged in
        jwt.sign({ username, id: userDoc._id, role: userDoc.role }, jwtSecret, {}, (error, token) => {
            if (error) throw error;
            res.cookie("token", token, { sameSite: "Lax"}).json({
                id: userDoc._id,
                username,
                role: userDoc.role
            });
        });
    } else {
        res.status(400).json("Wrong credentials");
    }
});

module.exports = router;