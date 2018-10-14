import React from 'react';
import LoginForm from './login-form';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

let LoginScreen = (props) => 
    <div className="login-screen">
        <h2 className="login-header">Enter login information below</h2>
        <LoginForm {...props} />
        <p>Click signup below to create an account!</p>
        <NavLink to="/signup"><button>Signup</button></NavLink>
    </div>

let ConnectedLoginScreen = connect(state=> {
    return {
        loginEmailInput: state.loginEmailInput,
        loginPasswordInput: state.loginPasswordInput
    }
})(LoginScreen);

export default ConnectedLoginScreen;