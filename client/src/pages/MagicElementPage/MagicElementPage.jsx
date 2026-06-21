import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Post from '../../components/Post/Post';
import Loading from '../../components/Loading/Loading';
import './MagicElementPage.css';

const elementData = [
    { id: "kindling-sun", name: "Kindling Sun", about: "Worshipped by the Kuratii. The Morning Sun is gentle and new.", elements: "The Hearth, Warmth, Healing, Plants, Life" },
    { id: "blazing-sun", name: "Blazing Sun", about: "Worshipped by the Mashruti. The Noon Sun is a terrible heat and blinding light.", elements: "The Forge, Fire, Light, Vitality" },
    { id: "smoldering-sun", name: "Smoldering Sun", about: "Worshipped by the Jondans. The Evening Sun is a fatigued sun, barely dim.", elements: "Smoke, Ash, Embers, Charcoal, Death" },
    { id: "salt-moon", name: "Salt Moon", about: "Worshipped by the desert people of Mujdahr. The Salt Moon is a two-faced moon.", elements: "Saltwater, Salted Sands, Preservation, Corrosion" },
    { id: "clay-moon", name: "Clay Moon", about: "Worshipped by the Dukwanese. The Clay Moon is the largest of the Moons.", elements: "Clay, Mud, Earth, Substance, Fertility" },
    { id: "cerulean-moon", name: "Cerulean Moon", about: "Worshipped by the water-loving Yaekish. The Cerulean Moon is a vain moon.", elements: "Monsoon Rains, Freshwater, Flow" },
    { id: "obsidian-moon", name: "Obsidian Moon", about: "Worshipped by the Hifians. The Obsidian Moon is the most furtive of the Moons.", elements: "Stone, Chitin, Silk, Barriers" },
    { id: "black-sun", name: "Oil Sun", about: "Celestial bodies were never meant to be crafted by mortal hands, and the Uuthuusians were the first and last to try.", elements: "Black Flame" },
    { id: "waxen-moon", name: "Waxen Moon", about: "The Ealjum strip the skins of their dead and cover them instead in wax.", elements: "Wax, Honey, Resin, Sealing, Containment" },
    { id: "jade-moon", name: "Jade Moon", about: "The hole in the center of this Moon reveals that which should remain behind veils.", elements: "Gnosis, Dreams, Illusions, Madness" },
    { id: "singing-star", name: "Singing Star", about: "From the Singing Star emanated the first melodies.", elements: "Air, Sound, Music, Prophecy" },
    { id: "silver-comet", name: "Silver Comet", about: "The Silver Comet presages great changes or transformations.", elements: "Silver, Transformation" },
    { id: "ice-comet", name: "Ice Comet", about: "With each solar cycle, the Ice Comet returns, renewing the Great Ice Sheets of the South.", elements: "Ice, Mist, Mirrors, Reflections" }
];

function MagicElementPage() {
    const { element } = useParams();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const selectedElement = elementData.find(e => e.id === element) || {
        name: 'Magic',
        about: 'Magic placeholder text.',
        elements: 'Magic placeholder text.'
    };

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/post?limit=1000`);
                const posts = await response.json();
                setPosts(posts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);
    
    return (
        <div className="magic-element-container">
            <h2 className="title">{selectedElement.name}</h2>
            <p className="about">{selectedElement.about}</p>
            <p className="about2">{selectedElement.elements}</p>
            {loading && <Loading />}
            <div className="posts">
                {posts.filter(post => post.category === selectedElement.name).map(post => (
                    <Post key={post.id} {...post} />
                ))}
            </div>
        </div>
    );
}

export default MagicElementPage;
