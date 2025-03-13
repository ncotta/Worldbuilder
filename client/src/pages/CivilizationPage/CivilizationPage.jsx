import CivilizationMap from "../../components/Civilizationmap/CivilizationMap";
import "./CivilizationPage.css";

function CivilizationPage() {
	return (
		<div className="civilization-container">
			<div className="civilization-info">
                <h2 className="title">Map of the Known World</h2>
                <p className="about">Visit a country by clicking it's name</p>
            </div>
            <CivilizationMap />
		</div>
	);
}

export default CivilizationPage;