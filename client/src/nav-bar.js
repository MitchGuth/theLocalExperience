import React from 'react';
import { NavLink } from 'react-router-dom';


let NavBar = () =>
    <div className="nav-bar">
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/login"> Login </NavLink>
        <NavLink to="/details"> Details </NavLink>
        <NavLink to="/contribute"> Contribute </NavLink>
        <NavLink to="/user/contributions">My Contributions</NavLink>
    </div>

export default NavBar;