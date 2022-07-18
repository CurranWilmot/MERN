const {request} = require("express")
const Joke = require("./../models/joke.model")


module.exports.testApi = (request, response) => {
    response.json({Status: "ok"})
}


module.exports.allJokes = (request, response) => {
    Joke.find()
        .then(jokes => response.json(jokes))
        .catch(err=> response.json(err))
    }


module.exports.oneJoke = (request, response) => {
    Joke.findOne({_id: request.params.id})
        .then(joke => response.json(joke))
        .catch(err => response.json(err))
}


module.exports.addJoke = (request, response) => {
    Joke.create(request.body)
        .then(joke => response.json(joke))
        .catch(err => response.json(err))
}


module.exports.updateJoke = (request, response) => {
    Joke.findOneAndUpdate(
        {_id: request.params.id},
        request.body,
        {new: true}
    )
        .then(updatedJoke => response.json(updatedJoke))
        .catch(err => response.json(err))
}

module.exports.deleteJoke = (request, response) => {
    Joke.deleteOne({_id: request.params.id})
        .then(message=>response.json(message))
        .catch(err=>response.json(err))
}