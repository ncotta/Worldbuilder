import { Link } from 'react-router-dom';
import { useState } from 'react';
import './CategoryNavbar.css';

function CategoryNavbar() {	
	return (
		<div className="category-navbar">
            <nav>
                {/* <Link to="/realms" className="category">Realms</Link> */}
                <Link to="/civilizations" className="category">Civilizations</Link>
                {/* <Link to="/creatures" className="category">Creatures</Link> */}
                <Link to="/magic" className="category">Magic</Link>
                <Link to="/jinn" className="category">Jinn</Link>
                {/* <Link to="/factions" className="category">Factions</Link> */}
                <Link to="/people" className="category">People</Link>
                <Link to="/stories" className="category">Stories</Link>
            </nav>
		</div>
	)
}

export default CategoryNavbar;