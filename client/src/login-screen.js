import React from 'react';
import LoginForm from './login-form';
import { connect } from 'react-redux';

let LoginScreen = (props) => 
    <div>
        <h1>Enter login information below</h1>
        <LoginForm {...props} />
    </div>

let ConnectedLoginScreen = connect(state=> {
    return {
        loginEmailInput: state.loginEmailInput,
        loginPasswordInput: state.loginPasswordInput
    }
})(LoginScreen);

export default ConnectedLoginScreen;