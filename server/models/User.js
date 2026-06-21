/**
 *  Model representing a "user" in the system. Each user has a username, password, and role
 *  The username is required, must be at least 4 characters long, and must be unique
 *  The password is required, and the role is a number that indicates the user's permissions or access level
 *  The role differentiates between regular users and admins (1 for regular users, 0 for admins)
 */

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    username: { type: String, required: true, min: 4, unique: true },
    password: { type: String, required: true },
    role: { type: Number, required: true }
}, { timestamps: true });

module.exports = model("User", UserSchema);
