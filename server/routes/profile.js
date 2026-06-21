/**
 * Profile route for user authentication
 * Verifies the JWT token from the cookie and returns the user's profile information
 * If the token is valid, returns the user's username, id, and role
 * If the token is invalid or missing, returns false
 */

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

router.get("/", (req, res) => {
    const { token } = req.cookies;

    if (!token) return res.json(false);

    jwt.verify(token, jwtSecret, {}, (error, response) => {
        if (error) return res.json(false);
        res.json(response);
    });
})

module.exports = router;