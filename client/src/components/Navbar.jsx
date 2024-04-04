import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<header>
            <div className="navbar">
                <Link to="/" className="logo">Worldbuilder</Link>
                <nav>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </nav>
            </div>
		</header>
	)
}

export default Navbar;
