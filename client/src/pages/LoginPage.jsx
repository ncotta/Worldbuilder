import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import '../styles/LoginRegister.css';
import { UserContext } from '../components/UserContext';

function LoginPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const { setUserInfo } = useContext(UserContext);

    const changeUsername = (event) => {
        setUsername(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    const login = async (event) => {
        event.preventDefault();
        const response = await fetch("http://localhost:4000/login", {
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
            alert("Wrong Credentials");
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
		</form>
	)
}

export default LoginPage;