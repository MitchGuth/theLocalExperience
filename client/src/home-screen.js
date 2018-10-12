import React from 'react';
import MapRow from './map-row';
import { connect } from 'react-redux';
import ExperiencesContainer from './experiences-container';

let HomeScreen = (props) => {
    return <div>
        <MapRow {...props}/>
        <ExperiencesContainer {...props} experiences={props.experiencesArray}/>
    </div>
};

let ConnectedHomeScreen = connect(state=> {
    return {
        experiencesArray: state.experiencesArray
    }
})(HomeScreen);

export default ConnectedHomeScreen;