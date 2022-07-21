import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import AuthorList from '../components/AuthorList'
import {Link} from 'react-router-dom'



const DisplayAuthors = () =>{

    return(
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/new">Add an author</Link>
            <h6>We have quotes by:</h6>
            <AuthorList/>
        </div>
    )
}

export default DisplayAuthors