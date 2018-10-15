import React from 'react';
import UserAuthenticationInput from './user-authentication-input';
import loginUser from './loginUser';
import clearUserInput from './clearUserInput';

let LoginForm = (props) =>
    <form
        className="login-form"
        onSubmit={ (event) => {
            event.preventDefault();
            props.dispatch({type: 'SET_USEREMAIL', userEmail: props.loginEmailInput});
            let userInformation = {
                email: props.loginEmailInput,
                password: props.loginPasswordInput
            };
            loginUser(props, userInformation);
            clearUserInput(props, 'LOGIN');
        }}
    >
        <h3 className="login-header">Email</h3>
        <UserAuthenticationInput 
            type="email"
            stateInput={props.loginEmailInput}
            stateName="loginEmailInput"
            className="login-email"
            {...props}
        />
        <h3 className="login-header">Password</h3>
        <UserAuthenticationInput 
            type="password"
            stateInput={props.loginPasswordInput}
            stateName="loginPasswordInput"
            className="login-password"
            {...props}
        />
        <input type="submit" value="Log In" className="login-submit-button" />
    </form>

export default LoginForm;