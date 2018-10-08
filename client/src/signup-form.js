import React from 'react';
import UserAuthenticationInput from './user-authentication-input';
import signupUser from './signupUser';

let SignupForm = (props) => 
    <form
        onSubmit={ () => {
            props.dispatch({type: 'SET_USEREMAIL', userEmail: props.signupEmailInput});
            signupUser(props);
        }}
    >
        <h3>Name</h3>
        <UserAuthenticationInput 
            type="text"
            stateInput={props.signupNameInput}
            stateName="signupNameInput"
            className="signup-name"
            {...props}
        />
        <h3>Email</h3>
        <UserAuthenticationInput 
            type="email"
            stateInput={props.signupEmailInput}
            stateName="signupEmailInput"
            className="signup-email"
            {...props}
        />
        <h3>Password</h3>
        <UserAuthenticationInput 
            type="password"
            stateInput={props.signupPasswordInput}
            stateName="signupPasswordInput"
            className="signup-password"
            {...props}
        />
        <input type="submit" value="Sign up" />
    </form>


export default SignupForm;