import { useEffect, useState } from 'react';
import Post from '../components/Post';
import '../styles/CategoryPage.css';

function CategoryPage({ category, title, about }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/post`).then(response => {
            response.json().then(posts => {
                setPosts(posts);
            })
        })
    }, []);
    
	return (
		<div className="category-container">
            <h2 className="title">{title}</h2>
            <p className="about">{about}</p>
            {posts.length > 0 && posts
                                .filter(post => (
                                    post.category === category
                                ))
                                .map(post => (
                                    <Post {...post}/>
                                ))
            }
		</div>
	)
}

export default CategoryPage;
