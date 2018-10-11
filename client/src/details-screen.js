import React from 'react';
import { connect } from 'react-redux';
import DetailRow from './detail-row';
import MapRow from './map-row.js';
import DetailsMap from './details-map';

let DetailsScreen = (props) => {
    return <div>
        <div className="info-section-details-screen" >
            <DetailRow 
                experience={props.experiencesArray.find(experience=>
                (props.match.url === `/details/${experience.postid}`))} 
            />
        </div>
        <div className="map-section-details-screen">
            {/* <DetailsMap {...props} /> */}
        </div>
    </div>
}

let ConnectedDetailsScreen = connect(state=> {
    return {
        experiencesArray: state.experiencesArray
    }
})(DetailsScreen);

export default ConnectedDetailsScreen;