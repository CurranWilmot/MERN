import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import './../App.css'



const AuthorList = (props) =>{
    
    const [authorsList, setAuthorsList] = useState()
    const [refresh, setRefresh] = useState(true)

    const refreshList = () =>{
        setRefresh(!refresh)
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors`)
            .then(response=>{
                setAuthorsList(response.data)
            })
            .catch(err=>console.log(err))
    }, [refresh])

    const removeAuthor = (authId) =>{
        axios.delete(`http://localhost:8000/api/authors/${authId}`)
            .then(response=>refreshList())
            .catch(err=>console.log(err))

    }

    return(
        <div className="App">
            {authorsList?
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        authorsList.map((author, i) => {
                            return(
                                <tr key={i}>
                                    <td>{author.fullName}</td>
                                    <td>
                                        <button><Link to={`/edit/${author._id}`}>Edit</Link></button>
                                        <button onClick={() => removeAuthor(author._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>:
            <h1>Loading Authors...</h1>
            }   
        </div>
    )
}

export default AuthorList