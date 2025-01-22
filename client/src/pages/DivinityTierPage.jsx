import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SideNav from '../components/SideNav';
import Post from '../components/Post';
import Loading from '../components/Loading';
import '../styles/DivinityTierPage.css';


function DivinityTierPage() {
    const { tier } = useParams();

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    let category, about;

    switch (tier) {
        case 'ineffables':
            category = 'Divinity Ineffables';
            about = 'Fathomless things beyond the ken of mortals';
            break;

        case 'primordials':
            category = 'Divinity Primordials';
            about = 'Ancient beings representative of the world\'s elements';
            break;
        
        case 'manifestations':
            category = 'Divinity Manifestations';
            about = 'Gods born of the world\'s inhabitants';
            break;

        case 'nascents':
            category = 'Divinity Nascents';
            about = 'Fledgling deities';
            break;

        case 'sacred-beasts':
            category = 'Divinity Sacred Beasts';
            about = 'Great beasts that approach divinity';
            break;
        
        default:
            category = 'Divinity';
            about = 'The divine beings that watch over the world, each with their own unique properties.';
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
        <div className="divinity-tier-container">
            <SideNav />
            <h2 className="title">{tier.charAt(0).toUpperCase() + tier.slice(1)}</h2>
            <p className="about">{about}</p>

            {loading && (
                <Loading />
            )}
            <div className="posts">
                {posts.length > 0 && posts
                    .filter(post => post.category === category)
                    .map(post => <Post key={post.id} {...post} />)
                }
            </div>
        </div>
    )
}

export default DivinityTierPage;