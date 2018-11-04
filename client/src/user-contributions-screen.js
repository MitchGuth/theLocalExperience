import React from 'react';
import ExperiencesContainer from './experiences-container';
import { connect } from 'react-redux';
import checkAuthentication from './checkAuthentication';
import NavBar from './nav-bar';

let UserContributionsScreen = (props) => {
    checkAuthentication(props);
    return <div>
        <NavBar {...props}/>
        <ExperiencesContainer {...props} experiences={props.userContributions}/>
    </div>
}

let ConnectedUserContributionsScreen = connect(state=> {
    return {
        userContributions: state.userContributions
    }
})(UserContributionsScreen);

export default ConnectedUserContributionsScreen;