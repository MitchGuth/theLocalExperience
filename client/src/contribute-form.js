import React from 'react';

let ContributeForm = () =>
    <form onSubmit={ (event) => {
        event.preventDefault();
        }}
        className="contribute-form">
        <input className="contribute-choose-file-button" type="file" />
        <input className="contribute-description-input" type="text" placeholder="description" />
        <input className="contribute-submit-button" type="submit" value="Submit" />
    </form>

export default ContributeForm;