const asyncHandler = require("express-async-handler")

exports.createTodo = asyncHandler(async (req, res) => {
    res.json({ message: "CreateTodo success" })
})
exports.readTodo = asyncHandler(async (req, res) => {
    res.json({ message: "ReadTodo success" })
})
exports.updeteTodo = asyncHandler(async (req, res) => {
    res.json({ message: "UpdeteTodo success" })
})
exports.deleteTodo = asyncHandler(async (req, res) => {
    res.json({ message: "DeleteTodo success" })
})