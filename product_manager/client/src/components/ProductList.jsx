import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import './../App.css'



const ProductList = (props) =>{
    
    const navigate = useNavigate()
    //avoid having complex functions directly in your html

    return(
        <div>
            <h1>All Products</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.productList.map((product, i) => {
                            return(
                                <tr>
                                    <td><Link to={`/${product._id}`}>{product.title}</Link> </td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td>
                                        <button onClick={
                                            () => {
                                                axios.delete(`http://localhost:8000/api/products/${product._id}`)
                                                    .then(response=>props.refreshList())
                                                    .catch(err=>console.log(err))
                                        }
                                        }>
                                            DELETE
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductList