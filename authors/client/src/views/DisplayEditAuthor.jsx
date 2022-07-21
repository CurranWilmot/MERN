import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import UpdateAuthorForm from '../components/UpdateAuthorForm'



const DisplayEditAuthor = () =>{

    return(
        <div>
            <h1>Edit Author</h1>
            <Link to="/">Home</Link>
            <UpdateAuthorForm/>
        </div>
    )
}

export default DisplayEditAuthor