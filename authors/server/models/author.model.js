const mongoose = require('mongoose')



const AuthorSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"]
    }
}, {timestamps: true})

module.exports = mongoose.model("Author", AuthorSchema)