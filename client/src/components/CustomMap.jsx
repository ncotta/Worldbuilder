import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function CustomMap() {
    return (
        <div style={{ width: '100%', height: '80vh' }}>
            <Map
                mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
                initialViewState={{
                    latitude: 37.7749,
                    longitude: -122.4194,
                    zoom: 10
                }}
                style={{
                    width: '100%',

                }}
                mapStyle={import.meta.env.VITE_MAPBOX_STYLE}
            />
        </div>
    )
}

export default CustomMap;