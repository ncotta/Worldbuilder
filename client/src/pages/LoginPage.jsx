import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Snackbar } from '@mui/material';
import '../styles/LoginRegister.css';
import { UserContext } from '../contexts/UserContext';

function LoginPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [open, setOpen] = useState(false);
    const { setUserInfo } = useContext(UserContext);

    const changeUsername = (event) => {
        setUsername(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    const login = async (event) => {
        event.preventDefault();
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/login`, {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: {  "Content-Type": "application/json" },
            credentials: "include"
        });

        if (response.ok) {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
            })
        } else {
            setOpen(true);
        }
    }

    if (redirect) {
        return <Navigate to={"/"} />
    }

	return (
		<form className="login" onSubmit={login}>
			<h1>Login</h1>
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
			<button>Login</button>
            <Snackbar
                message="Incorrect username or password, please try again."
                autoHideDuration={4000}
                open={open}
                onClose={() => { setOpen(false); }}
            />
		</form>
	)
}

export default LoginPage;
