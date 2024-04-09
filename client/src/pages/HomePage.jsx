import React, { useEffect, useState } from 'react'
import Post from '../components/Post';

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
		<>
            {posts.length > 0 && posts.map(post => (
                <Post {...post}/>
            ))}
		</>
	)
}

export default HomePage;
