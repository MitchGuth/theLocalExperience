import React from 'react';

let UserAuthenticationInput = (props) =>
    <input 
        className={props.className}
        onChange={ (event) => {
            let value = event.target.value;
            props.dispatch({type: 'SET_CREDENTIAL_INPUT', userInput: value, stateName: props.stateName})
        }}
        type={props.type}
        value={props.stateInput}
    />

export default UserAuthenticationInput;