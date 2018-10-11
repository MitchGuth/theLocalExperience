import React from 'react';
import { connect } from 'react-redux';
import DetailRow from './detail-row';
import MapRow from './map-row.js';
import { NavLink } from 'react-router-dom';

let DetailsScreen = (props) => {
    return <div>
        <div className="info-section-details-screen" >
            <DetailRow 
                experience={props.experiencesArray.find(experience=>
                (props.match.url === `/details/${experience.postid}`))} 
            />
        </div>
        <div className="map-section-details-screen">
            <MapRow {...props}/>
        </div>
        <NavLink to="/experiences"><button>Back to Experiences</button></NavLink>
    </div>
}

let ConnectedDetailsScreen = connect(state=> {
    return {
        experiencesArray: state.experiencesArray
    }
})(DetailsScreen);

export default ConnectedDetailsScreen;