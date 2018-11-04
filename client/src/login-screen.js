import React from 'react';
import LoginForm from './login-form';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import NavBar from './nav-bar';

let LoginScreen = (props) => 
    // <div className="login-screen">
    <div>
        <NavBar {...props}/>
            <div className="login-screen">
            <h2 className="login-screen-header">Enter login information below</h2>
            <LoginForm {...props} />
            <h3>Don't have an account? Click signup to create one!</h3>
            <NavLink to="/signup"><button>Signup</button></NavLink>
        </div>
    </div>

let ConnectedLoginScreen = connect(state=> {
    return {
        loginEmailInput: state.loginEmailInput,
        loginPasswordInput: state.loginPasswordInput
    }
})(LoginScreen);

export default ConnectedLoginScreen;