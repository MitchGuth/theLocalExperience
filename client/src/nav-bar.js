import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


let NavBar = (props) =>
    <div className="nav-bar">
        {(props.userName) ? 
            <div className="nav-bar-logged-in-container">
                <h4 className="nav-bar-welcome-header">Welcome {props.userName}</h4>
                <div className="nav-bar-links-container">
                    <NavLink className="nav-bar-link" to="/">Home</NavLink>
                    <NavLink className="nav-bar-link" to="/contribute">Contribute</NavLink>
                    <NavLink className="nav-bar-link" to="/user/contributions">My Contributions</NavLink>
                    <button
                        className="logout-button nav-bar-link"
                        onClick={ (event) => {
                            console.log(props);
                            event.preventDefault();
                            localStorage.removeItem('token');
                            props.dispatch({type: 'LOGOUT_USER' });
                            props.history.push('/');
                        }}
                        >Log Out
                    </button>
                </div>
            </div>
            :
            <div className="nav-bar-logged-out-container">
                <NavLink className="nav-bar-link" to="/">Home</NavLink>
                <NavLink className="nav-bar-link" to="/contribute">Contribute</NavLink>
                <NavLink className="nav-bar-link" to="/login">Login</NavLink>
            </div>
        }
    </div>

let ConnectedNavBar = connect(state=> {
    return {
        userName: state.userName
    }
})(NavBar);

export default ConnectedNavBar;