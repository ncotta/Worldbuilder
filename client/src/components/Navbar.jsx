import React, { useEffect, useState, useContext } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

function Navbar() {
    const { setUserInfo, userInfo } = useContext(UserContext);

    useEffect(() => {
        fetch("http://localhost:4000/profile", {
            credentials: "include"
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            })
        })
    }, []);

    const logout = () => {
        fetch("http://localhost:4000/logout", {
            credentials: "include",
            method: "POST"
        });
        
        setUserInfo(null);
    }

    const username = userInfo?.username;

	return (
		<header>
            <div className="navbar">
                <Link to="/" className="logo">Worldbuilder</Link>
                <nav>
                    {username && (
                        <>
                            <Link to="/create">Create</Link>
                            <a onClick={logout}>Logout</a>
                        </>
                    )}
                    {!username && (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>    
                        </>
                    )}
                    
                </nav>
            </div>
		</header>
	)
}

export default Navbar;
