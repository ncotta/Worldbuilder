import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Snackbar } from '@mui/material';
import '../styles/LoginRegister.css';

function RegisterPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    const changeUsername = (event) => {
        setUsername(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    const registerUser = async (event) => {
        event.preventDefault();
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/register`, {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({ username, password })
        });
        
        if (response.status === 200) {
            setMessage("Account created successfully");
            setRedirect(true);
        } else {
            setMessage("Username already exists"); 
        }

        setOpen(true);  // TODO: snackbar doesnt show when login successful
    }

    if (redirect) return <Navigate to={"/login"} />

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
            <Snackbar
                message={message}
                autoHideDuration={4000}
                open={open}
                onClose={() => { setOpen(false); }}
            />
		</form>
	)
}

export default RegisterPage