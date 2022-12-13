import React, { useState } from 'react';

const UserForm = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


const createUser = (e) => {
    e.preventDefault();
    const newUser = {firstName, lastName, email, password};
    console.log("Welcome", newUser);
}


    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName}></input>
                </div>

                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName}></input>
                </div>

                <div>
                    <label>Email:</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                </div>

                <div>
                    <label>Pssword:</label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                </div>

                <div>
                    <label>Confirm Pssword:</label>
                    <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}></input>
                </div>

                <input type="submit" value="Create User" />

            </form>


            <h2>Your Form Data:</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email Name: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    )

}


export default UserForm;