import { useEffect, useState, useContext } from 'react';
import Post from '../../components/Post/Post';
import Loading from '../../components/Loading/Loading';
import { RefreshContext } from '../../contexts/RefreshContext';
import './HomePage.css';

function HomePage() {
    const { refreshPosts, setRefreshPosts } = useContext(RefreshContext);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [viewAll, setViewAll] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const limitParam = viewAll ? 1000 : 5;

            try {
                console.log('ENV:', import.meta.env.VITE_SERVER_URL);
                const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/post?limit=${limitParam}`);
                const posts = await response.json();
                setPosts(posts);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
                setRefreshPosts(false);
            }
        }
        
        fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refreshPosts, viewAll]);
    
	return (
		<div className="homepage-container">
            <div className="posts-header">
                <h3 className="filter">Featured Posts</h3>
                {!viewAll && ( <button className="view-all" onClick={() => setViewAll(true)}>View All</button> )}
                {viewAll && ( <button className="view-all" onClick={() => setViewAll(false)}>View Less</button> )}
            </div>
            {loading && (
                <Loading/>
            )}
            <div className="posts">
                {posts.length > 0 && posts.map(post => (
                    <Post key={post.id} {...post}/>
                ))}
            </div>
            
            
		</div>
	)
}

export default HomePage;
