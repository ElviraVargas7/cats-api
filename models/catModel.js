const mongoose = require("mongoose")

const { Schema } = mongoose

const catSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("cat", catSchema)