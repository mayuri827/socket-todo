const { readTodo, createTodo, updeteTodo, deleteTodo } = require("../controllers/todo.controller")

const router = require("express").Router()
router
    .get("/", readTodo)
    .post("/add", createTodo)
    .put("/updete/:id", updeteTodo)
    .delete("/delete/:id", deleteTodo)

module.exports = router