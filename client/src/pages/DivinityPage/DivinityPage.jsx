import Ineffables from '../../assets/divine/ineffables.png';
import Primordials from '../../assets/divine/primordials.png';
import Manifestations from '../../assets/divine/manifestations.png';
import Nascents from '../../assets/divine/nascents.png';
import SacredBeasts from '../../assets/divine/sacred-beasts.png';
import './DivinityPage.css';
import { Link } from 'react-router-dom';

const divineTiers = [
    { id: "ineffables", name: "Ineffables", image: Ineffables },
    { id: "primordials", name: "Primordials", image: Primordials },
    { id: "manifestations", name: "Manifestations", image: Manifestations },
    { id: "nascents", name: "Nascents", image: Nascents },
    { id: "sacred-beasts", name: "Sacred Beasts", image: SacredBeasts }
]

function DivinityPage() {
	return (
		<div className="divinity-container">
            <div className="divinity-info">
                <h2 className="title">Jinn</h2>
                <p className="about">The gods of this world are surreal and lovely to behold</p>
            </div>
            <div className="divinity-pantheon">
                {divineTiers.map(divineTier => (
                    <div className="tier" key={divineTier.id}>
                        <Link to={divineTier.id} className="tier-link">
                            <div className="tier-image">
                                <img src={divineTier.image}/>
                                <div className="tier-text">{divineTier.name}</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
	)
}

export default DivinityPage