import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'



const CreateProductForm = (props) =>{
    const [product, setProduct] = useState({title: "", price: "", description: ""})

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/products`, product)
            .then(response=>{
                props.refreshList(response.data)
                setProduct({"title": "", price: "", description: ""})
            })
            .catch(err=>console.log(err))
            
    }

    const handleChange = (e) =>{
        setProduct({...product, [e.target.name]: e.target.value})
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title: </label>
                    <input type="text" value={product.title} name="title" onChange={handleChange}/>
                </div>
                <div>
                    <label>Price: </label>
                    <input type="number" name="price" value={product.price} onChange={handleChange}/>
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" name="description" value={product.description} onChange={handleChange}/>
                </div>
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}

export default CreateProductForm