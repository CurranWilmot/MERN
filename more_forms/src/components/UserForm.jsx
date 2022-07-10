import { getByTitle } from '@testing-library/react';
import React, { useState } from 'react';



const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [beenSubmitted, setBeenSubmitted] = useState(false);

    const [firstNameError, setFirstNameError] = useState("");
    const[lastNameError, setLastNameError] = useState("");
    const[emailError, setEmailError] = useState("");
    const[passwordError, setPasswordError] = useState("");
    const[confirmPasswordError, setConfirmPasswordError] = useState("");

    const [userList, setUserList] = useState([]);

    const attDict = {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm Password"
    }
    

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword };
        setBeenSubmitted(true);
        setUserList([...userList, newUser]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstName.length > 3 && lastName.length > 3 && email.length > 5 && password.length >= 8 && password !== confirmPassword){
            createUser();
        } else {
            alert("Please correct your form!")
        }
        console.log({firstName, lastName, email, password, confirmPassword})
        setIsSubmitted(true);
    }

    const handleEverything = (e, setError, setThing, thing, min) =>{
        e.target.value.length < 1?setError("")
        :e.target.value.length < min?setError(thing + " must be " + min + " characters or longer!"):
        setError("")
    setThing(e.target.value);}

    // const handlePassConfirm = (e) =>{e.target.value !==  password?
    //     setConfirmPasswordError("Password and Confirm Password must match!"):
    //     setConfirmPasswordError("")
    //     console.log(password)
    // }

    // const handleConfirm = (e) => {
    //     setConfirm(e.target.value);
    //     if (e.target.value !== password) {
    //         setConfirmError("Passwords must match!");
    //     } else {
    //         setConfirmError("")
    //     }
    // }

    const handlePassConfirm = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password){
            setConfirmPasswordError("Password and Confirm Password must match!");
        }
        else{
            setConfirmPasswordError("");
        }
    }

    const welcomeMes = () =>{return beenSubmitted?"Thank you for making an account":"Welcome, please create an account"}
    
    return (
        <div>
            <h1>{welcomeMes()}</h1>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => handleEverything(e, setFirstNameError, setFirstName, "First Name", 2)} />
                    <p style={{color: 'red'}}>{firstNameError}</p>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => handleEverything(e, setLastNameError, setLastName, "Last Name", 2)} />
                    <p style={{color: 'red'}}>{lastNameError}</p>
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => handleEverything(e, setEmailError, setEmail, "Email", 5)} />
                    <p style={{color: 'red'}}>{emailError}</p>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => handleEverything(e, setPasswordError, setPassword, "Password", 8)} />
                    <p style={{color: 'red'}}>{passwordError}</p>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={(e) => handlePassConfirm(e)} />
                    <p style={{color: 'red'}}>{confirmPasswordError}</p>
                    {console.log(password)}
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
                <ul> List of Users' Info: {userList.map(userOb => <p> {Object.getOwnPropertyNames(userOb).map(userKey => <span>{attDict[userKey]}: {userOb[userKey]}, </span>)} </p>)}</ul>
            </div>
        </div>
    );
};



export default UserForm;

//<ul> List of User First Names: {userList.map(userOb => <p> {Object.values(userOb).map(user => <span>{userOb}{user}<span> </span></span>)} </p>)}</ul>

//const handleFirstName = (e) =>{e.target.value.length < 1?setFirstNameError("First Name is required!"):e.target.value.length < 3?setFirstNameError("First Name must be three characters or longer!"):setFirstNameError("")
    //setFirstName(e.target.value);}