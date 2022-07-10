import React, { useState } from 'react';
import UserForm from './UserForm';


const UserFormDisplay = (props) =>{
    return(
        <div>
            <p>This is the First Name: {props.firstName}</p>
            <p>This is the Last Name: {props.lastName}</p>
            <p>This is the email: {props.email}</p>
            <p>This is the Password: {props.password}</p>
            <p>This is the Confirm Password: {props.confirmPassword}</p>
        </div>
    )
}
export default UserFormDisplay;