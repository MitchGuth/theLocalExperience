import React from 'react';
import postContributePhoto from './postContributePhoto';
import postContribute from './postContribute';
import clearUserInput from './clearUserInput';

let ContributeForm = (props) =>
    <div className="contribute-container">
        <form 
            encType="multipart/form-data"
            onSubmit={ (event) => {
                event.preventDefault();
                let photoUrl = '';
                let formData = new FormData();
                let date = new Date();
                let time = date.toLocaleTimeString('en-US');
                props.dispatch({type: 'SET_CONTRIBUTE', selectedFile: props.fileInput, contributeDescription: props.descriptionInput});
                formData.append('selectedFile', props.fileInput);
                navigator.geolocation.getCurrentPosition(function(position) {
                    let userLocationLatitude = (position.coords.latitude);
                    let userLocationLongitude = (position.coords.longitude);
                    postContributePhoto(formData)
                    .then(name=> {
                        photoUrl = `/uploads/${name}`;
                        let contributeInformation = {
                            userId: props.userId,
                            latitude: userLocationLatitude,
                            longitude: userLocationLongitude,
                            title: props.titleInput,
                            description: props.descriptionInput,
                            photoUrl: photoUrl,  
                            time: time
                        };
                        postContribute(contributeInformation, props);
                        clearUserInput(props, 'CONTRIBUTE');
                    })
                })
            }}
            className="contribute-form"
            props={props.props}
            >
            <p>Import Picture</p>
            <input 
                onChange={ (event) => {
                    props.dispatch({type: 'UPDATE_FILEINPUT_INPUT', fileInput: event.target.files[0]})
                }}
                className="contribute-choose-file-button form-item" 
                type="file"
            />
            <p>Title</p>
            <textarea
                onChange={ (event) => {
                    let value = event.target.value;
                    props.dispatch({type: 'UPDATE_TITLE_INPUT', titleInput: value})
                }}
                className="contribute-title-input form-item"
                placeholder="Write a title for your experience..."
                value={props.titleInput}
            />
            <p>Description</p>
            <textarea 
                onChange={ (event) => {
                    let value = event.target.value;
                    props.dispatch({type: 'UPDATE_DESCRIPTION_INPUT', descriptionInput: value})

                }}
                className="contribute-description-input form-item" 
                placeholder="Write a brief description of your experience..." 
                value={props.descriptionInput}
            />
            <input className="contribute-submit-button form-item" type="submit" value="Submit Experience" />
        </form>
    </div>

export default ContributeForm;