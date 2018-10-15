import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


let NavBar = (props) =>
    <div className="nav-bar">
        <NavLink className="nav-bar-link" to="/"> Home </NavLink>
        {/* <NavLink className="nav-bar-link" to="/login"> Login </NavLink> */}
        {/* <NavLink className="nav-bar-link" to="/details"> Details </NavLink> */}
        <NavLink className="nav-bar-link" to="/contribute"> Contribute </NavLink>
        {/* <NavLink className="nav-bar-link" to="/user/contributions">My Contributions</NavLink> */}
        {(((localStorage.getItem("token"))) ? 
            <div className="nav-bar-logged-in-container">
                <h4 className="nav-bar-welcome-header">Welcome {props.userName}</h4>
                <NavLink className="nav-bar-link" to="/user/contributions">My Contributions</NavLink>
                <button
                    className="logout-button"
                    onClick={ (event) => {
                        event.preventDefault();
                        localStorage.removeItem('token');
                        props.dispatch({type: 'LOGOUT_USER' })
                    }}
                >
                    Log Out
                </button>
            </div> :
            <NavLink to="/login"> Login </NavLink>)}
    </div>

let ConnectedNavBar = connect(state=> {
    return {
        userName: state.userName
    }
})(NavBar);

export default ConnectedNavBar;