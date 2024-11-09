import WaterMagic from '../assets/water-magic.png';
import FireMagic from '../assets/fire-magic.png';
import EarthMagic from '../assets/earth-magic.png';
import WindMagic from '../assets/wind-magic.png';
import SideNav from '../components/SideNav';
import '../styles/MagicPage.css';

function MagicPage() {
	return (
		<div className="magic-container">
            <SideNav />
            <div className="magic-info">
                <h2 className="title">Magic</h2>
                <p className="about">Magic is a powerful force that can be harnessed by those who have the ability to wield it. There are four types of magic: fire, water, wind, and earth. Each type of magic has its own strengths and weaknesses, and can be used to cast a variety of spells. Magic is a complex and mysterious force, and those who are able to master it are considered to be among the most powerful beings in the world.</p>
            </div>
            <div className="magic-square">
                <div className="quarter top-left">
                    <img src={FireMagic}/> 
                </div>
                <div className="quarter top-right">
                    <img src={WaterMagic}/>
                </div>
                <div className="quarter bottom-left">
                    <img src={WindMagic}/>
                </div>
                <div className="quarter bottom-right">
                    <img src={EarthMagic}/>
                </div>
            </div>
        </div>
	)
}

export default MagicPage;