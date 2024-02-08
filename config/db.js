const mongoose = require("mongoose")
require("dotenv").config({ path: ".env" })

const dbConneciton = () => {
    try {
        mongoose.connect(process.env.DB_URL)
        console.log("Database connected successfully")
    } catch (e) {
        console.log(e)
    }
}

module.exports = dbConneciton