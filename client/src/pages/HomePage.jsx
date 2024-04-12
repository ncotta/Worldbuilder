import { useEffect, useState } from 'react';
import Post from '../components/Post';
import SideNav from '../components/SideNav';
import CircularProgress from '@mui/material/CircularProgress';
import '../styles/HomePage.css';

function HomePage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchPosts = async () => {
            await fetch(`${import.meta.env.VITE_SERVER_URL}/post`).then(response => {
                response.json().then(posts => {
                    setPosts(posts);
                })
            })
        }
        fetchPosts();
        setLoading(false);
    }, []);
    
	return (
		<div className="homepage-container">
            <SideNav />
            <h3 className="filter">Featured</h3>
            {loading && (
                <CircularProgress size="4rem" sx={{ color: "var(--typography-high)" }} />
            )}
            {posts.length > 0 && posts.map(post => (
                <Post {...post}/>
            ))}
		</div>
	)
}

export default HomePage;
