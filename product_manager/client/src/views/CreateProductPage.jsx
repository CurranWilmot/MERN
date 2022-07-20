import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CreateProductForm from '../components/CreateProductForm'



const CreateProductPage = () =>{
    
    return(
        <>
            <h1>CreateProductPage</h1>
            <CreateProductForm/>
        </>
    )
}

export default CreateProductPage