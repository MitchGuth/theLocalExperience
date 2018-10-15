import React from 'react';
import SignupForm from './signup-form';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

let SignupScreen = (props) => 
    <div className="signup-screen" >
        <h2 className="signup-screen-header">Sign up for an account below</h2>
        <SignupForm {...props}/>
        <h3>Already have an account?</h3>
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