import { Link } from 'react-router-dom';
import '../styles/SideNav.css';

function SideNav() {	
	return (
		<div className="side-nav">
            <nav>
                <Link to="/civilizations" className="side-nav-category">Civilizations</Link> 
                <Link to="/beasts" className="side-nav-category">Beasts</Link>
                <Link to="/magic" className="side-nav-category">Magic</Link>
                <Link to="/jinn" className="side-nav-category">Jinn</Link>
                <Link to="/characters" className="side-nav-category">Characters</Link>
            </nav>
		</div>
	)
}

export default SideNav;