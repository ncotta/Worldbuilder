import { useEffect, useState } from 'react';
import Post from '../../components/Post/Post';
import Loading from '../../components/Loading/Loading';
import './CategoryPage.css';

function CategoryPage({ category, title, about }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const limitParam = 1000; // Fetch all posts

            try {
                const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/post?limit=${limitParam}`);
                const posts = await response.json();
                setPosts(posts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false); // Stop loading after fetching
            }
        };

        fetchPosts();
    }, []);
    
	return (
		<div className="category-container">
            <h2 className="title">{title}</h2>
            <p className="about">{about}</p>
            {loading && (
                <Loading/>
            )}
            <div className="posts">
                {posts.length > 0 && posts
                                    .filter(post => (
                                        post.category === category
                                    ))
                                    .map(post => (
                                        <Post key={post.id} {...post}/>
                                    ))
                }
            </div>
		</div>
	)
}

export default CategoryPage;
