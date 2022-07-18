const mongoose = require('mongoose')



const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String
}, {timestamps: true})

module.exports = mongoose.model("Joke", JokeSchema)