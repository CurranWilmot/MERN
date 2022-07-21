const {request} = require("express")
const Author = require("./../models/author.model")


module.exports.testApi = (request, response) =>{
    response.json({status: "okay"})
}

module.exports.allAuthors = (request, response) =>{
    Author.find().collation({locale: "en"}).sort({"fullName": "asc"})
        .then(authors => response.json(authors))
        .catch(err=>response.json(err))
}

module.exports.oneAuthor = (request, response) =>{
    Author.findOne({_id: request.params.id})
        .then(author => response.json(author))
        .catch(err=>response.json(err))
}


module.exports.createAuthor = (request, response) =>{
    Author.create(request.body)
        .then(author=>response.json(author))
        .catch(err=>response.status(400).json(err))
}


module.exports.updateAuthor = (request, response) =>{
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new: true, runValidators: true})
        .then(updatedAuthor=>response.json(updatedAuthor))
        .catch(err=>response.json(err))
}

module.exports.deleteAuthor = (request, response) =>{
    Author.deleteOne({_id: request.params.id})
        .then(message=>response.json(message))
        .catch(err=>response.json(err))
}