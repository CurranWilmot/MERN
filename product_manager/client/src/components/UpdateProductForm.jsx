import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'



const UpdateProductForm = (props) =>{
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState()
    const [description, setDescription] = useState("")

    //combine these states^

    const {prodId} = useParams()

    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${prodId}`)
            .then(response=>{
                console.log(response.data)
                setTitle(response.data.title)
                setPrice(response.data.price)
                setDescription(response.data.description)
            })
            .catch(err=>console.log(err))
    }, [])

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${prodId}`, {title, price, description})
            .then(response=>navigate("/"))
            .catch(err=>console.log(err))

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title: </label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Price: </label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}

export default UpdateProductForm