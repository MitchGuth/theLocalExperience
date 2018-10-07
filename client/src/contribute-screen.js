import React from 'react';
import ContributeForm from './contribute-form.js';
import { connect } from 'react-redux';

let ContributeScreen = (props) => 
    <div className="contribute-screen">
        <ContributeForm {...props}/>
    </div>

let ConnectedContributeScreen = connect(state=> {
    return {
        fileInput: state.fileInput,
        titleInput: state.titleInput,
        descriptionInput: state.descriptionInput,
    }
})(ContributeScreen);

export default ConnectedContributeScreen;