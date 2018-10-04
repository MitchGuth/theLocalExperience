import React from 'react';

let ContributeForm = (props) =>
    <form onSubmit={ (event) => {
        event.preventDefault();
        }}
        className="contribute-form"
        props={props.props}
        >
        <input className="contribute-choose-file-button" type="file" />
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