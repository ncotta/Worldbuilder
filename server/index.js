const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const fs = require('fs');
const uploadMiddleware = multer({ dest: 'uploads/' })
const app = express();

const User = require('./models/User');
const Post = require('./models/Post');

const salt = bcrypt.genSaltSync(10);
const jwtSecret = '';  //! FIXME

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

mongoose.connect(""); //! FIXME

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

// Create post
app.post("/post", uploadMiddleware.single("file"), async (req, res) => {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const extension = parts[parts.length - 1];
    const newPath = path + "." + extension;
    fs.renameSync(path, newPath);

    const { token } = req.cookies;
    jwt.verify(token, jwtSecret, {}, async (error, response) => {
        if (error) throw error;
        const { title, category, glimpse } = req.body;
        const postDoc = await Post.create({
            title,
            category,
            glimpse,
            cover: newPath,
            author: response.id
        });

        res.json(postDoc);
    });

    
});

// Get posts
app.get("/post", async (req, res) => {
    res.json(
        await Post.find()
            .populate("author", ["username"])
            .sort({createdAt: -1})
            .limit(10)
    );
})

app.listen(4000);