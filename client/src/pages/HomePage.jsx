import { useEffect, useState } from 'react';
import Post from '../components/Post';
import SideNav from '../components/SideNav';
import '../styles/HomePage.css';

function HomePage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/post`).then(response => {
            response.json().then(posts => {
                setPosts(posts);
            })
        })
    }, []);
    
	return (
		<div className="homepage-container">
            <SideNav />
            <h3 className="filter">Featured</h3>
            {posts.length > 0 && posts.map(post => (
                <Post {...post}/>
            ))}
		</div>
	)
}

export default HomePage;
