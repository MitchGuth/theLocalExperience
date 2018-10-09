import React from 'react';
import SignupForm from './signup-form';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

let SignupScreen = (props) => 
    <div>
        <h1>Sign up for an account below</h1>
        <SignupForm {...props}/>
        <h2>Already have an account?</h2>
        <NavLink to="/login"><button>Log in</button></NavLink>
    </div>


let ConnectedSignupScreen = connect(state=> {
    return {
        signupNameInput: state.signupNameInput,
        signupEmailInput: state.signupEmailInput,
        signupPasswordInput: state.signupPasswordInput
    }
})(SignupScreen);

export default ConnectedSignupScreen;