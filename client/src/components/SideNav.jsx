import { Link } from 'react-router-dom';
import '../styles/SideNav.css';

function SideNav() {	
	return (
		<div className="side-nav">
            <nav>
                <Link to="/civilizations" className="category">Civilizations</Link> 
                <Link to="/magic" className="category">Magic</Link>
                <Link to="/jinn" className="category">Jinn</Link>
                <Link to="/characters" className="category">People</Link>
            </nav>
		</div>
	)
}

export default SideNav;