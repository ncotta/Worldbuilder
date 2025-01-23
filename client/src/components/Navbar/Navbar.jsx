import { useEffect, useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

function Navbar() {
    const { setUserInfo, userInfo } = useContext(UserContext);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/profile`, {
            credentials: "include"
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            })
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const logout = () => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/logout`, {
            credentials: "include",
            method: "POST"
        });
        
        setUserInfo(null);
    }

    const username = userInfo?.username;
    const role = userInfo?.role;

	return (
		<header>
            <div className="navbar">
                <Link to="/" className="logo">Worldbuilder</Link>
                <nav>
                    {username && role === 0 && (
                        <>
                            <h4 className="welcome">Welcome, {username}</h4>
                            <div className="links">
                                <Link to="/create">Create</Link>
                                <a onClick={logout}>Logout</a>
                            </div>
                        </>
                    )}
                    {username && role === 1 && (
                        <>
                            <h4 className="welcome">Welcome, {username}</h4>
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
