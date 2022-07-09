import React, { useState } from 'react';



const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [userList, setUserList] = useState([]);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setUserList([...userList, newUser]);
        console.log(userList)
    };

    const attDict = {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm Password"
    }
    return (
        <div>
            
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
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