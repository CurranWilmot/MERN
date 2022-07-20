import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import UpdateProductForm from '../components/UpdateProductForm'
import ProductInfo from '../components/ProductInfo'



const DisplayOneAndEdit = () =>{
    
    return(
        <>
            <UpdateProductForm/>
            <ProductInfo/>
        </>
    )
}

export default DisplayOneAndEdit