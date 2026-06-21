/** 
 * Model representing a "post", which is a piece of content created by a user.
 * Each post has a title, category, glimpse (a short summary), cover image, and an author (referencing a User).
 * The schema also includes timestamps for when the post was created and last updated.
 */

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const PostSchema = new Schema({
    title: String,
    category: String,
    glimpse: String,
    cover: String,
    author: { type: Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

module.exports = model("Post", PostSchema);
