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
                            <div className="tier-text">Ineffables</div>
                        </div>
                    </Link>
                </div>
                <div className="tier primordials">
                    <Link to="primordials" className="tier-link">
                        <div className="tier-image">
                            <img src={Primordials}/>
                            <div className="tier-text">Primordials</div>
                        </div>
                    </Link>
                </div>
                <div className="tier manifestations">
                    <Link to="manifestations" className="tier-link">
                        <div className="tier-image">
                            <img src={Manifestations}/>
                            <div className="tier-text">Manifestations</div>
                        </div>
                    </Link>
                </div>
                <div className="tier nascents">
                    <Link to="nascents" className="tier-link">
                        <div className="tier-image">
                            <img src={Nascents}/>
                            <div className="tier-text">Nascents</div>
                        </div>
                    </Link>
                </div>
                <div className="tier sacred-beasts">
                    <Link to="sacred-beasts" className="tier-link">
                        <div className="tier-image">
                            <img src={SacredBeasts}/>
                            <div className="tier-text">Sacred Beasts</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
	)
}

export default DivinityPage