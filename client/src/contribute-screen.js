import React from 'react';
import ContributeForm from './contribute-form.js';
import { connect } from 'react-redux';
import checkAuthentication from './checkAuthentication.js';
import NavBar from './nav-bar.js';

let ContributeScreen = (props) => {
    checkAuthentication(props);
    return <div className="contribute-screen">
        <NavBar {...props}/>
        <ContributeForm {...props}/>
    </div>
}

let ConnectedContributeScreen = connect(state=> {
    return {
        fileInput: state.fileInput,
        titleInput: state.titleInput,
        descriptionInput: state.descriptionInput,
        userName: state.userName,
        userId: state.userId
    }
})(ContributeScreen);

export default ConnectedContributeScreen;