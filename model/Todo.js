const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    desc: { type: String, required: true },
    priority: { type: Boolean, required: true },
    complete: { type: Boolean, default: false },
}, { timestamps: true })

module.exports = mongoose.model("todo", todoSchema)