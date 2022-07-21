import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link, useParams } from 'react-router-dom'



const UpdateAuthorForm = (props) =>{
    const [authorName, setAuthorName] = useState({fullName: ""})
    const [authorNameError, setAuthorNameError] = useState("")

    const {authid} = useParams()

    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${authid}`)
            .then(response=>{
                setAuthorName(response.data)
            })
            .catch(err=>console.log(err))
    }, [])

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${authid}`, authorName)
            .then(response=>{
                setAuthorName({name: ""})
                navigate("/")
            })
            .catch(err=>console.log(err))
            
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input type="text" value={authorName.fullName} name="name" onChange={(e) => {
                        setAuthorName({fullName: e.target.value})
                        e.target.value.length < 4?
                        setAuthorNameError("Author's name must be at least 3 characters"):
                        setAuthorNameError("")
                        }}/>
                        <p style={{color: 'red'}}>{authorNameError}</p>
                </div>
                <input type="submit" value="Make Changes" />
            </form>
        </div>
    )
}

export default UpdateAuthorForm