import React from 'react';
import postContribute from './postContribute';

let ContributeForm = (props) =>
    <form onSubmit={ (event) => {
        event.preventDefault();
        props.dispatch({type: 'SET_CONTRIBUTE', selectedFile: props.fileInput, contributeDescription: props.descriptionInput})
        let formData = new FormData();
        formData.append('selectedFile', props.fileInput);
        postContribute(formData);    
        }}
        className="contribute-form"
        props={props.props}
        >
        <input 
            onChange={ (event) => {
                props.dispatch({type: 'UPDATE_FILEINPUT_INPUT', fileInput: event.target.files[0]})
            }}
            className="contribute-choose-file-button" 
            type="file"
        />
        <input 
            onChange={ (event) => {
                let value = event.target.value;
                props.dispatch({type: 'UPDATE_DESCRIPTION_INPUT', descriptionInput: value})

            }}
            className="contribute-description-input" 
            type="text" 
            placeholder="description" 
            value={props.descriptionInput}
        />
        <input className="contribute-submit-button" type="submit" value="Submit" />
    </form>

export default ContributeForm;