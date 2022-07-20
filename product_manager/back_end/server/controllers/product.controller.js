const {request} = require("express")
const Product = require("./../models/product.model")

module.exports.testApi = (request, response) =>{
    response.json({status: "okay"})
}

module.exports.allProducts = (request, response) =>{
    Product.find()
        .then(products => response.json(products))
        .catch(err=>response.json(err))
}

module.exports.oneProduct = (request, response) =>{
    Product.findOne({_id: request.params.id})
        .then(product => response.json(product))
        .catch(err=>response.json(err))
}


module.exports.createProduct = (request, response) =>{
    Product.create(request.body)
        .then(product=>response.json(product))
        .catch(err=>response.json(err))
}


module.exports.updateProduct = (request, response) =>{
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
        .then(updatedProduct=>response.json(updatedProduct))
        .catch(err=>response.json(err))
}

module.exports.deleteProduct = (request, response) =>{
    Product.deleteOne({_id: request.params.id})
        .then(message=>response.json(message))
        .catch(err=>response.json(err))
}