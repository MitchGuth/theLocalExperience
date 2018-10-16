import React from 'react';
import ExperiencesContainer from './experiences-container';
import { connect } from 'react-redux';
import checkAuthentication from './checkAuthentication';

let UserContributionsScreen = (props) => {
    checkAuthentication(props);
    return <div>
        <ExperiencesContainer {...props} experiences={props.userContributions}/>
    </div>
}

let ConnectedUserContributionsScreen = connect(state=> {
    return {
        userContributions: state.userContributions
    }
})(UserContributionsScreen);

export default ConnectedUserContributionsScreen;