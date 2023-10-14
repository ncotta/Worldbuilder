/*
Author: Niklaas Cotta
Last modified: 10/9/23
Description: Server base
*/

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3001

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/worldbuilder", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to database"))
    .catch(console.error);

const Todo = require('./db_models/Todo');

// GET
app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
})

// POST
app.post('/todo/new', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });
    todo.save();
    res.json(todo);
})

// UPDATE
app.put('/todo/complete/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    todo.complete = !todo.complete;
    todo.save();
    res.json(todo);
})

// DELETE
app.delete('/todo/delete/:id', async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);
    res.json(result);
})

app.listen(port, () => console.log(`Server started on port ${port}`));