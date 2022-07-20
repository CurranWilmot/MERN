import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CreateProductForm from '../components/CreateProductForm'
import ProductList from '../components/ProductList'



const DisplayProducts = () =>{

    const [productList, setProductList] = useState([])
    const [refresh, setRefresh] = useState(true)

    const refreshList = () =>{
        setRefresh(!refresh)
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products`)
            .then(response=>{
                setProductList(response.data)
            })
            .catch(err=>console.log(err))
    }, [refresh])
    
    return(
        <>
            <CreateProductForm refreshList={refreshList}/>
            <ProductList productList={productList} refreshList={refreshList}/>
        </>
    )
}

export default DisplayProducts