require("dotenv").config();

const path = require('path');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();

const registerRoutes = require('./routes/register');
const loginRoutes = require('./routes/login');
const logoutRoutes = require('./routes/logout');
const profileRoutes = require('./routes/profile');
const postRoutes = require('./routes/post');

app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

mongoose.connect(process.env.MONGODB_URL);

app.use("/register", registerRoutes);  // Registration
app.use("/login", loginRoutes);  // Login
app.use("/logout", logoutRoutes); // Logout
app.use("/profile", profileRoutes);  // Profile for jwt token validity
app.use("/post", postRoutes);  //  Posts

if (process.env.NODE_ENV !== 'production') {
    app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
    });
}

app.listen(process.env.PORT || 4000);