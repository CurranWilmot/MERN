import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'



const CreateAuthorForm = (props) =>{
    const [authorName, setAuthorName] = useState({fullName: ""})
    const [authorNameError, setAuthorNameError] = useState("")
    const [errors, setErrors] = useState([])
    
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/authors`, authorName)
            .then(response=>{
                setAuthorName({name: ""})
                navigate("/")
            })
            .catch(err=>{
                const errorArray = []
                const errorResponse = err.response.data.errors
                for(const eachKey in errorResponse){
                    errorArray.push(errorResponse[eachKey].message)
                }
                setErrors(errorArray)
                setAuthorNameError("")
            })
            
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input type="text" value={authorName.fullName} name="name" onChange={(e) => {
                        setAuthorName({fullName: e.target.value})
                        setErrors([])
                        e.target.value.length < 3?
                        setAuthorNameError("Author's name must be at least 3 characters"):
                        setAuthorNameError("")
                        }}/>
                    <p style={{color: 'red'}}>{authorNameError}</p>
                </div>
                <input type="submit" value="Create" />
            </form>
            {
                errors.map((error, i)=>{
                    return(
                        <p style={{color: "red"}} key={i}>{error}</p>
                    )
                })
            }
        </div>
    )
}

export default CreateAuthorForm