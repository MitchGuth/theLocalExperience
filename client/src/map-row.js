import React from 'react';
import Map from './map-example.js';

let MapRow = (props) => {
    return <div>
        <Map {...props}/>
    </div>
}

export default MapRow;