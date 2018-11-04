import React from 'react';
import { connect } from 'react-redux';
import DetailRow from './detail-row';
import NavBar from './nav-bar';

let DetailsScreen = (props) => {
    window.scrollTo(0, 0)
    return <div>
            <NavBar {...props}/>
            <div className="info-section-details-screen" >
                <DetailRow 
                    experience={props.experiencesArray.find(experience=>
                    (props.match.url === `/details/${experience.postid}`))} 
                />
            </div>
        </div>
}

let ConnectedDetailsScreen = connect(state=> {
    return {
        experiencesArray: state.experiencesArray
    }
})(DetailsScreen);

export default ConnectedDetailsScreen;