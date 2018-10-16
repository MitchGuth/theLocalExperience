import React from 'react';
import MapRow from './map-row';
import { connect } from 'react-redux';
import ExperiencesContainer from './experiences-container';
import checkAuthentication from './checkToken'

let HomeScreen = (props) => {
    checkAuthentication(props);
    return <div>
        <div className="logo-container">
            <img className="logo" src={process.env.REACT_APP_API_HOST + '/imgs/the-local-experience-logo.png'} alt="The Local Experience"/>
        </div>
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