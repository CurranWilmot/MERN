import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'



const ProductInfo = (props) =>{
    const [product, setProduct] = useState({})
    const {prodId} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${prodId}`)
            .then(response=>{
                setProduct(response.data)
            })
            .catch(err=>console.log(err))
    }, [])

    return(
        <>
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </>
    )
}

export default ProductInfo