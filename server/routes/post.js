const express = require('express');
const router = express.Router();

const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const fs = require('fs');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

const User = require('../models/User');
const Post = require('../models/Post');


// GET posts
router.get("/", async (req, res) => {
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;

    const postDoc = await Post.find()
                        .populate("author", ["username"])
                        .sort({createdAt: -1})
                        .limit(limit)

    res.json(postDoc);
})

// GET a post
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const postDoc = await Post.findById(id)
                        .populate("author", ["username"])

    res.json(postDoc);
})

// POST a post
router.post("/", uploadMiddleware.single("file"), async (req, res) => {
    let newPath = null;

    if (req.file) {
        const { originalname, path } = req.file;
        const parts = originalname.split('.');
        const extension = parts[parts.length - 1];
        newPath = path + "." + extension;
        fs.renameSync(path, newPath);
    }

    const { token } = req.cookies;
    jwt.verify(token, jwtSecret, {}, async (error, response) => {
        if (error) throw error;
        const { title, category, glimpse } = req.body;

        const userDoc = await User.findById(response.id);
        const isAdmin = JSON.stringify(userDoc.role) === "0";
        if (!isAdmin) {
            return res.status(401).json("You do not have permissions!");
        }

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


// PUT a post
router.put("/", uploadMiddleware.single("file"), async (req, res) => {
    let newPath = null;

    const { token } = req.cookies;
    jwt.verify(token, jwtSecret, {}, async (error, response) => {
        if (error) throw error;

        const { id, title, category, glimpse } = req.body;
        const postDoc = await Post.findById(id);
        const userDoc = await User.findById(response.id);
        const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(response.id);
        const isAdmin = JSON.stringify(userDoc.role) === "0";
        
        if (!isAdmin) {
            return res.status(401).json("You do not have permissions!");
        } else if (!isAuthor) {
            return res.status(400).json("You are not the author!");
        }

        // Handle file update
        if (req.file) {
            const { originalname, path: tempPath } = req.file;
            const extension = originalname.split('.').pop();
            newPath = `${tempPath}.${extension}`;
            fs.renameSync(tempPath, newPath);

            if (postDoc.cover) {
                try {
                    fs.unlinkSync(postDoc.cover);
                }
                catch (err) {
                    // Do not unlink if it does not exist
                    console.error("Error deleting old cover file:", err);
                }
            }
        }

        // Update post
        await Post.updateOne({
            _id: id
        }, { 
            title, 
            category, 
            glimpse,
            cover: newPath ? newPath : postDoc.cover
        });

        res.json(postDoc);
    });
})

// DELETE a post
router.delete("/:id", async (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, jwtSecret, {}, async (error, response) => {
        if (error) throw error;

        const { id } = req.params;
        const postDoc = await Post.findById(id);
        const userDoc = await User.findById(response.id);
        const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(response.id);
        const isAdmin = JSON.stringify(userDoc.role) === "0";
        
        if (!isAdmin) {
            return res.status(401).json("You do not have permissions!");
        } else if (!isAuthor) {
            return res.status(400).json("You are not the author!");
        }

        if (postDoc.cover) {
                try {
                    fs.unlinkSync(postDoc.cover);
                }
                catch (err) {
                    // Do not unlink if it does not exist
                    console.error("Error deleting old cover file:", err);
                }
            }

        await Post.deleteOne({ _id: id });
        
        res.json(postDoc);
    });
})

module.exports = router;