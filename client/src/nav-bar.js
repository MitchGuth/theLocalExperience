import React from 'react';
import { NavLink } from 'react-router-dom';


let NavBar = () =>
    <div className="nav-bar">
        <NavLink className="nav-bar-link" to="/"> Home </NavLink>
        <NavLink className="nav-bar-link" to="/login"> Login </NavLink>
        <NavLink className="nav-bar-link" to="/details"> Details </NavLink>
        <NavLink className="nav-bar-link" to="/contribute"> Contribute </NavLink>
        <NavLink className="nav-bar-link" to="/user/contributions">My Contributions</NavLink>
    </div>

export default NavBar;