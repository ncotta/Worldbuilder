import WaterMagic from '../assets/magic/water.png';
import FireMagic from '../assets/magic/fire.png';
import EarthMagic from '../assets/magic/earth.png';
import WindMagic from '../assets/magic/wind.png';
import SideNav from '../components/SideNav';
import '../styles/MagicPage.css';
import { Link } from 'react-router-dom';

function MagicPage() {
	return (
		<div className="magic-container">
            <SideNav />
            <div className="magic-info">
                <h2 className="title">Magic</h2>
                <p className="about">Magic is a powerful force that can be harnessed by those who have the ability to wield it. There are four types of magic: fire, water, wind, and earth. Each type of magic has its own strengths and weaknesses, and can be used to cast a variety of spells. Magic is a complex and mysterious force, and those who are able to master it are considered to be among the most powerful beings in the world</p>
            </div>
            <div className="magic-square">
                <div className="quarter top-left">
                    <Link to="fire" className="magic-link">
                        <img src={FireMagic}/> 
                        <div className="magic-text">Fire</div>
                    </Link>
                </div>
                <div className="quarter top-right">
                    <Link to="water" className="magic-link">
                        <img src={WaterMagic}/>
                        <div className="magic-text">Water</div>
                    </Link>
                </div>
                <div className="quarter bottom-left">
                    <Link to="wind" className="magic-link">
                        <img src={WindMagic}/>
                        <div className="magic-text">Wind</div>
                    </Link>
                </div>
                <div className="quarter bottom-right">
                    <Link to="earth" className="magic-link">
                        <img src={EarthMagic}/>
                        <div className="magic-text">Earth</div>
                    </Link>
                </div>
            </div>
        </div>
	)
}

export default MagicPage;