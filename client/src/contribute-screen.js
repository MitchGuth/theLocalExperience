import React from 'react';
import ContributeForm from './contribute-form.js';
import { connect } from 'react-redux';

let ContributeScreen = (props) => 
    <div>
        <ContributeForm {...props}/>
    </div>

let ConnectedContributeScreen = connect(state=> {
    return {
        fileInput: state.fileInput,
        descriptionInput: state.descriptionInput,
    }
})(ContributeScreen);

export default ConnectedContributeScreen;