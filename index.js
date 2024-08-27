const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()



//step 1 middleware
app.use(express.json()) //body parsal
app.use(cors({ origin: true, credentials: true })) //vegvegle port no cors origin reseach sharing 


//step 2 routers
app.use("/api/notes", require("./routers/todo.router"))

//step 3 404 routes
app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource Not Found 404" }) //route ani method check kraychi error aalatr
})
//step 4 error handler
app.use((err, req, res, next) => {
    console.log(err)
    req.status(500).json({ message: "SERVER RUNNING", error: err.message })

})
//step 5 connection

mongoose.connect(process.env.MONGO_URL)

mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    app.listen(process.env.PORT, console.log("SERVER RUNNING")
    )

})
