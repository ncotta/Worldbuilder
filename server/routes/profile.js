const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;


router.get("/", (req, res) => {
    const { token } = req.cookies;

    if (!token) return res.json(false);

    jwt.verify(token, jwtSecret, {}, (error, response) => {
        if (error) throw error;
        res.json(response);
    });
})

module.exports = router;