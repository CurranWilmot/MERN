import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'




const TestPage = () =>{
    const [info, setInfo] = useState()

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/test`)
            .then(response=>{
                console.log(response.data)
                setInfo(response.data)
            })
            .catch(err=>console.log(err))
    }, [])
    return(
        <div>
            <h1>TestPage</h1>
            {
                info?
                <h1>{info.status}</h1>:
                <h1>Loading...</h1>
            }
        </div>
    )
}

export default TestPage