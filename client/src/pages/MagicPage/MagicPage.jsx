import KindlingSun from '../../assets/magic/kindling-sun.png';
import BlazingSun from '../../assets/magic/blazing-sun.png';
import SmolderingSun from '../../assets/magic/smoldering-sun.png';
import SaltMoon from '../../assets/magic/salt-moon.png';
import ClayMoon from '../../assets/magic/clay-moon.png';
import CeruleanMoon from '../../assets/magic/cerulean-moon.png';
import ObsidianMoon from '../../assets/magic/obsidian-moon.png';
import SilverComet from '../../assets/magic/silver-comet.png';
import JadeQuasar from '../../assets/magic/jade-quasar.png';
import { Link } from 'react-router-dom';
import './MagicPage.css';

const celestialBodies = [
    { id: "kindling-sun", name: "Kindling Sun", image: KindlingSun },
    { id: "blazing-sun", name: "Blazing Sun", image: BlazingSun },
    { id: "smoldering-sun", name: "Smoldering Sun", image: SmolderingSun },
    { id: "salt-moon", name: "Salt Moon", image: SaltMoon },
    { id: "clay-moon", name: "Clay Moon", image: ClayMoon },
    { id: "cerulean-moon", name: "Cerulean Moon", image: CeruleanMoon },
    { id: "obsidian-moon", name: "Obsidian Moon", image: ObsidianMoon }
    // { id: "silver-comet", name: "Silver Comet", image: SilverComet },
    // { id: "jade-quasar", name: "Jade Quasar", image: JadeQuasar }
]

function MagicPage() {
	return (
		<div className="magic-container">
            <div className="magic-info">
                <h2 className="title">Magic</h2>
                <p className="about">The energy that flows through the veins of the universe, derived from the celestial bodies</p>
            </div>
            <div className="magic-row">
                {celestialBodies.map(celestialBody => (
                    <div className="tier" key={celestialBody.id}>
                        <Link to={celestialBody.id} className="magic-link">
                            <div className="tier-image">
                                <img src={celestialBody.image}/>
                                <div className="tier-text">{celestialBody.name}</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
	)
}

export default MagicPage;