import React from 'react'
import Post from '../components/Post';

import WyvernImage from '../assets/wyvern.png';
import GhayataImage from '../assets/ghayata.png';
import MashrutImage from '../assets/mashrut.png';

function HomePage() {
  return (
    <>
        <Post 
            thumbnail={WyvernImage}
            title="Wyverns"
            category="Jinnic Creature"
            time="2024-04-03 2:20"
            glimpse="Primal Aspects whose name is written upon the winds. The ancient books say that the Dragons are descended from the Wyverns, 
            an idea which the Dragons vehemently deny. Both share some resemblence with each other, but where Dragons have many scales 
            and few feathers, Wyverns have the opposite."
        />
        <Post 
            thumbnail={GhayataImage}
            title="Ghayata, Face of Change"
            category="Divinity"
            time="2024-04-03 2:20"
            glimpse='The Prince of All that Changes and founder of the esoteric group that call themselves the Transmutationalists. 
            Their god self was split into pieces and then magically sealed over 10 years ago by a rogue element of the Azraqi Magi. 
            "Mine are the hands of healing, indiscriminate."'
        />
        <Post 
            thumbnail={MashrutImage}
            title="Mashrut"
            category="Civilization"
            time="2024-04-03 2:20"
            glimpse="Home of those of both Fire and Wind. The country of Mashrut traditionally autocratic, whoever holds the Sun-Kissed Throne
            in the capital city of Ywihil holds absolute dominion. The recent death of the King, beloved by the people, sparked a brutal
            vying for the throne. The King's sister, Sharan, away on her brother's business at the time of his death, now marches home to
            quell the upheaval."
        />
    </>
  )
}

export default HomePage;
