import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductInfo from '../components/ProductInfo'
import UpdateProductForm from '../components/UpdateProductForm'
import {useParams, Link} from 'react-router-dom'



const DisplayOneProduct = () =>{
    const {prodId} = useParams()
    return(
        <>
            <ProductInfo/>
            <Link to={`/${prodId}/edit`}>Edit</Link>
        </>
    )
}

export default DisplayOneProduct