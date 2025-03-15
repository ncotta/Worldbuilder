import { MapContainer, ImageOverlay, Marker } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import L from "leaflet"; // Import Leaflet
import "leaflet/dist/leaflet.css";
import WorldPng from "../../assets/newworld.jpg";
import EmptyPng from "../../assets/empty.png";

function CivilizationMap() {
    const bounds = [[0, 0], [1317, 2752]]; 
    const markerPositions = [
        {"position": [875, 850], "id": "675a5f5bb4d3412d08a0f75c"},
        {"position": [625, 550], "id": "67612f997f102a35cce0dc48"},
        {"position": [425, 800], "id": "6611c22d6a395619265ba838"},
        {"position": [340, 1480], "id": "675a9cedb4d3412d08a0f7a9"},
        {"position": [515, 1675], "id": "675a9bb6b4d3412d08a0f7a2"},
        {"position": [860, 1700], "id": "675a9ed3b4d3412d08a0f7d2"},
        {"position": [765, 2125], "id": "675a9d5cb4d3412d08a0f7b0"},
        {"position": [500, 2250], "id": "6795edabe3cb4133207f6ba2"}
    ];

    const navigate = useNavigate();

    const handleMarkerClick = (id) => {
        navigate(`/post/${id}`);
    }

    return (
        <MapContainer
            center={[658, 1376]}
            zoom={-0.9}
            minZoom={-0.9}
            maxZoom={-0.9} 
            style={{ width: "100%", height: "60vh" }}
            crs={L.CRS.Simple}
            maxBounds={bounds}
            maxBoundsViscosity={1.0}
            scrollWheelZoom={false}
            doubleClickZoom={false} 
            zoomControl={false} 
            dragging={false}
            touchZoom={false}
            keyboard={false}
        >
            <ImageOverlay url={WorldPng} bounds={bounds} style={{ filter: "sepia(100%)" }} />
            {markerPositions.map((marker) => (
                <Marker 
                    position={marker.position}
                    eventHandlers={{
                        click: () => handleMarkerClick(marker.id)
                    }}
                    icon={new L.Icon({
                        iconUrl: EmptyPng,
                        iconSize: [75, 35],
                        iconAnchor: [41, 25],
                    })}
                />
            ))}
        </MapContainer>
    );
}

export default CivilizationMap;
