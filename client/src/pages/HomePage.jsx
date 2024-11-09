import { useEffect, useState } from 'react';
import Post from '../components/Post';
import SideNav from '../components/SideNav';
import Loading from '../components/Loading';
import '../styles/HomePage.css';

function HomePage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/post`);
                const posts = await response.json();
                setPosts(posts);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
            
        fetchPosts();
    }, []);
    
	return (
		<div className="homepage-container">
            <SideNav />
            <h3 className="filter">Featured</h3>
            {loading && (
                <Loading/>
            )}
            {posts.length > 0 && posts.map(post => (
                <Post key={post.id} {...post}/>
            ))}
		</div>
	)
}

export default HomePage;
