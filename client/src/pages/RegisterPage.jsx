import React, { useState } from 'react';
import '../styles/LoginRegister.css';

function RegisterPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

    const changeUsername = (event) => {
        setUsername(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    const registerUser = async (event) => {
        event.preventDefault();
        const response = await fetch("http://localhost:4000/register", {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({ username, password })
        });
        
        if (response.status === 200) {
            alert("Success");
        } else {
            alert("Registration failed");  
        }
    }

	return (
		<form className="register" onSubmit={registerUser}>
			<h1>Register</h1>
			<input 
				type="text" 
				placeholder="username" 
                value={username}
                onChange={changeUsername}
			/>
			<input 
                type="password" 
                placeholder="password" 
                value={password}
                onChange={changePassword}
            />
			<button>Register</button>
		</form>
	)
}

export default RegisterPage