import React from 'react';
import MapRow from './map-row.js';

let DetailsScreen = () => 
    <div>
        <div className="info-section-details-screen">
            <p>Photo</p>
            <p>Description</p>
        </div>
        <div className="map-section-details-screen">
            <MapRow />
        </div>
    </div>


export default DetailsScreen;