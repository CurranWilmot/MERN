import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import CreateAuthorForm from '../components/CreateAuthorForm'



const DisplayAddAuthor = () =>{

    return(
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/">Home</Link>
            <h6>Add Author</h6>
            <CreateAuthorForm/>
        </div>
    )
}

export default DisplayAddAuthor