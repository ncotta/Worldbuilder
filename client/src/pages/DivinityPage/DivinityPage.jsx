import Ineffables from '../../assets/divine/ineffables.png';
import Primordials from '../../assets/divine/primordials.png';
import Manifestations from '../../assets/divine/manifestations.png';
import Nascents from '../../assets/divine/nascents.png';
import SacredBeasts from '../../assets/divine/sacred-beasts.png';
import './DivinityPage.css';
import { Link } from 'react-router-dom';

function DivinityPage() {
	return (
		<div className="divinity-container">
            <div className="divinity-info">
                <h2 className="title">Jinn</h2>
                <p className="about">The gods of this world are surreal and lovely to behold</p>
            </div>
            <div className="divinity-pantheon">
                <div className="tier ineffables">
                    <Link to="ineffables" className="tier-link">
                        <div className="tier-image">
                            <img src={Ineffables}/>
                        </div>
                    </Link>
                    <Link to="ineffables" className="tier-link">
                        <h4>Ineffables</h4>
                    </Link>
                </div>
                <div className="tier primordials">
                    <Link to="primordials" className="tier-link">
                        <div className="tier-image">
                            <img src={Primordials}/>
                        </div>
                    </Link>
                    <Link to="primordials" className="tier-link">
                        <h4>Primordials</h4>
                    </Link>
                </div>
                <div className="tier manifestations">
                    <Link to="manifestations" className="tier-link">
                        <div className="tier-image">
                            <img src={Manifestations}/>
                        </div>
                    </Link>
                    <Link to="manifestations" className="tier-link">
                        <h4>Manifestations</h4>
                    </Link>
                </div>
                <div className="tier nascents">
                    <Link to="nascents" className="tier-link">
                        <div className="tier-image">
                            <img src={Nascents}/>
                        </div>
                    </Link>
                    <Link to="nascents" className="tier-link">
                        <h4>Nascents</h4>
                    </Link>
                </div>
                <div className="tier sacred-beasts">
                    <Link to="sacred-beasts" className="tier-link">
                        <div className="tier-image">
                            <img src={SacredBeasts}/>
                        </div>
                    </Link>
                    <Link to="sacred-beasts" className="tier-link">
                        <h4>Sacred Beasts</h4>
                    </Link>
                </div>
            </div>
        </div>
	)
}

export default DivinityPage