import React, { useState } from 'react';

const UserForm = props => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);


const createUser = (e) => {
    e.preventDefault();
    const newUser = {firstName, lastName, email, password};
    console.log("Welcome", newUser);
    setHasBeenSubmitted( true );
}


// Validations:
const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if(e.target.value.length < 2) {
        setFirstNameError("First Name must be at least 2 characters.");
    }
    else {
        setFirstNameError("");
    }
}

const handleLastName = (e) => {
    setLastName(e.target.value);
    if(e.target.value.length < 2) {
        setLastNameError("Last Name must be at least 2 characters.");
    }
    else {
        setLastNameError("");
    }
}

const handleEmail = (e) => {
    setEmail(e.target.value);
    if(e.target.value.length < 2) {
        setEmailError("Email must be at least 2 characters.");
    }
    else {
        setEmailError("");
    }
}

const handlePassword = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 8) {
        setPasswordError("Password must be at least 2 characters.");
    }
    else {
        setPasswordError("");
    }
}

const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if(e.target.value.length != password) {
        setConfirmPasswordError("Password must match.");
    }
    else {
        setConfirmPasswordError("");
    }
}


    return (
        <div>
            <h1>ggggggggggggggggggggggggggggggggg</h1>
            <form onSubmit={createUser}>
                {
                    hasBeenSubmitted ?
                    <p>Thank you forsubmitting the for.</p> :
                    <p>Welcome, please fill this form:</p>
                }

                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={handleFirstName} value={firstName}></input>
                    {
                        firstNameError ?
                        <p style={{color:'red'}}>{firstNameError}</p> : 
                        ''
                    }
                </div>

                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={handleLastName} value={lastName}></input>
                    {
                        lastNameError?
                        <p style={{color:'red'}}>{lastNameError}</p> : 
                        ''
                    }
                </div>

                <div>
                    <label>Email:</label>
                    <input type="text" onChange={handleEmail} value={email}></input>
                    {
                        emailError ?
                        <p style={{color:'red'}}>{emailError}</p> : 
                        ''
                    }
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password" onChange={handlePassword} value={password}></input>
                    {
                        passwordError ?
                        <p style={{color:'red'}}>{passwordError}</p> : 
                        ''
                    }
                </div>

                <div>
                    <label>Confirm Pssword:</label>
                    <input type="password" onChange={handleConfirmPassword} value={confirmPassword}></input>
                    {
                        confirmPasswordError ?
                        <p style={{color:'red'}}>{confirmPasswordError}</p> : 
                        ''
                    }
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