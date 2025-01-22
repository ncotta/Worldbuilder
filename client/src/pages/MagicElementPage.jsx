import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SideNav from '../components/SideNav';
import Post from '../components/Post';
import Loading from '../components/Loading';
import '../styles/MagicElementPage.css';

function MagicElementPage() {
	const { element } = useParams();
	
	const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    let category, about, about2;

    switch (element) {
        case 'fire':
            category = 'Fire Magic';
            about = 'Under the domain of the Sun. Fire is passion and power.';
            about2 = 'Heat, Sight, Power, Passion, Sealing.';
            break;
        case 'air':
            category = 'Air Magic';
            about = 'Under the domain of the Sun. Air is freedom and movement.';
            about2 = 'Wind, Breath, Sound, Freedom.';
            break;
        case 'water':
            category = 'Water Magic';
            about = 'Under the domain of the Moons. To be like water is to be adaptable, to fill the shape of the vessel desired.';
            about2 = 'Flow, Change, Blood.';
            break;
        case 'earth':
            category = 'Earth Magic';
            about = 'Under the domain of the Moons. Earth is solid and diverse.';
            about2 = 'Substance, Flesh, Stamina.';
            break;
        default:
            category = 'Magic';
            about = 'The magic of this world is divided into four elements, each with its own unique properties.';
            about2 = 'Fire, Air, Water, Earth.';
    }

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
		<div className="magic-element-container">
            <SideNav />
            <h2 className="title">{element.charAt(0).toUpperCase() + element.slice(1)}</h2>
            <p className="about">{about}</p>
            <p className="about2">{about2}</p>
            {loading && (
                <Loading/>
            )}
            <div className="posts">
                {posts.length > 0 && posts
                    .filter(post => post.category === category)
                    .map(post => <Post key={post.id} {...post}/>)
                }
            </div>
		</div>
	)
}

export default MagicElementPage;