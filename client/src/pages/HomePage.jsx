import React, { useEffect, useState } from 'react'
import Post from '../components/Post';

import WyvernImage from '../assets/wyvern.png';
import GhayataImage from '../assets/ghayata.png';
import MashrutImage from '../assets/mashrut.png';
import SunThroneImage from '../assets/sun-throne.png';

function HomePage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/post").then(response => {
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
            {/* 
            <Post 
                thumbnail={WyvernImage}
                title="Wyverns"
                category="Jinnic Creature"
                time="2024-04-03 2:20pm"
                glimpse="Primal Aspects whose name is written upon the winds. The ancient books say that the Dragons are descended from the Wyverns, 
                an idea which the Dragons vehemently deny. Both share some resemblence with each other, but where Dragons have many scales 
                and few feathers, Wyverns have the opposite."
            />
            <Post 
                thumbnail={GhayataImage}
                title="Ghayata, Face of Change"
                category="Divinity"
                time="2024-04-03 2:45pm"
                glimpse='The Prince of All that Changes and founder of the esoteric group that call themselves the Transmutationalists. 
                Their god self was split into pieces and then magically sealed over 10 years ago by a rogue element of the Azraqi Magi. 
                "Mine are the hands of healing, indiscriminate."'
            />
            <Post
                thumbnail={SunThroneImage}
                title="The Sun-Kissed Throne"
                category="Artifact"
                time="2024-04-05 3:23pm"
                glimpse="The city of Ywihil, though thousands of years old, was built around an even more ancient object, a magnificent chair,
                which has been the seat of Mashrut since its establishment. Many rulers have come and gone, yet the Sun-Kissed Throne remains."
            />
            <Post 
                thumbnail={MashrutImage}
                title="Mashrut"
                category="Civilization"
                time="2024-04-03 4:45pm"
                glimpse="Home of those of both Fire and Wind. The country of Mashrut traditionally autocratic, whoever holds the Sun-Kissed Throne
                in the capital city of Ywihil holds absolute dominion. The recent death of the King, beloved by the people, sparked a brutal
                vying for the throne. The King's sister, Sharan, away on her brother's business at the time of his death, now marches home to
                quell the upheaval."
            />
            */}
		</>
	)
}

export default HomePage;
