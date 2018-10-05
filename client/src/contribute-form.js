import React from 'react';
import postContribute from './postContribute';

let ContributeForm = (props) =>
    <div className="contribute-container">
        <form onSubmit={ (event) => {
            event.preventDefault();
            let photoUrl = '';
            let formData = new FormData();
            let date = new Date();
            let time = date.toLocaleTimeString('en-US');
            console.log(time);
            props.dispatch({type: 'SET_CONTRIBUTE', selectedFile: props.fileInput, contributeDescription: props.descriptionInput});
            formData.append('selectedFile', props.fileInput);
            navigator.geolocation.getCurrentPosition(function(position) {
                let userLocationLatitude = (position.coords.latitude);
                let userLocationLongitude = (position.coords.longitude);
                console.log(userLocationLatitude);
                console.log(userLocationLongitude);
            })
            postContribute(formData)
                .then(name=> {
                    photoUrl = `/uploads/${name}`;
                    return photoUrl;
                })
            }}
            className="contribute-form"
            props={props.props}
            >
            <input 
                onChange={ (event) => {
                    props.dispatch({type: 'UPDATE_FILEINPUT_INPUT', fileInput: event.target.files[0]})
                }}
                className="contribute-choose-file-button form-item" 
                type="file"
            />
            <textarea 
                onChange={ (event) => {
                    let value = event.target.value;
                    props.dispatch({type: 'UPDATE_DESCRIPTION_INPUT', descriptionInput: value})

                }}
                className="contribute-description-input form-item" 
                placeholder="description" 
                value={props.descriptionInput}
            />
            <input className="contribute-submit-button form-item" type="submit" value="Submit" />
        </form>
    </div>

export default ContributeForm;