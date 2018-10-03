import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import NavBar from './nav-bar.js';
import ContributeScreen from './contribute-screen.js';

let Router = () =>
    <div className="router">
        <NavBar/>
        <Route exact path="/" component={ContributeScreen} />
    </div>

export default Router;