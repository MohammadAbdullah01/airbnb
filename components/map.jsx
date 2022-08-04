import React from 'react';
import Map from 'react-map-gl';

const MapBox = () => {
    return (
        <Map
            initialViewState={{
                longitude: -100,
                latitude: 40,
                zoom: 3.5
            }}
            style={{ width: '100%', height: '100%' }}
            mapStyle="mapbox://styles/mohammadabdullah01/cl6fayo69001x14nklh2u13ls"
            mapboxAccessToken={process.env.mapbox_key}
        />
    );
};

export default MapBox;