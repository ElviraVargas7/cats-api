const express = require("express")
const cors = require("cors")
const dbConneciton = require("./config/db")

const app = express()

dbConneciton()

app.use(cors())
app.use(express.json())
app.use("/cats", require("./routes/cats"))

app.listen(3030, () => {
    console.log("Server running on port 3030")
})