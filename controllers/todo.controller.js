const asyncHandler = require("express-async-handler")
const Todo = require("../model/Todo")


exports.createTodo = asyncHandler(async (req, res) => {
    await Todo.create(req.body)
    res.json({ message: "CreateTodo success" })
})
exports.readTodo = asyncHandler(async (req, res) => {
    const result = await Todo.find()
    res.json({ message: "ReadTodo success", result })
})
exports.updeteTodo = asyncHandler(async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "UpdeteTodo success" })
})
exports.deleteTodo = asyncHandler(async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.json({ message: "DeleteTodo success" })
})