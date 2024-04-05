const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express();

const salt = bcrypt.genSaltSync(10);
const jwtSecret = ''; 

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());

mongoose.connect("mongodb+srv://nikcotta:MLx5yRYzciBsRAe@cluster0.hhjn4rl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

// Registration
app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    try { 
        const userDoc = await User.create({ 
            username, 
            password: bcrypt.hashSync(password, salt)
        });
        res.json(userDoc);
    } catch(e) {
        res.status(400).json(e);
    }
});

// Login
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
        // logged in
        jwt.sign({ username, id: userDoc._id }, jwtSecret, {}, (error, token) => {
            if (error) throw error;
            res.cookie("token", token).json({
                id: userDoc._id,
                username
            });
        });
    } else {
        res.status(400).json("Wrong credentials");
    }
})

// Logout
app.post("/logout", (req, res) => {
    res.cookie("token", "").json("OK");
})

// Check token validity
app.get("/profile", (req, res) => {
    const { token } = req.cookies;

    jwt.verify(token, jwtSecret, {}, (error, response) => {
        if (error) throw error;
        res.json(response);
    });
})

app.listen(4000);