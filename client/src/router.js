import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import NavBar from './nav-bar.js';
import DetailsScreen from './details-screen.js';
import ContributeScreen from './contribute-screen.js';

let Router = () =>
    <div className="router">
        <NavBar/>
        <Route exact path="/" component={ContributeScreen} />
        <Route exact path="/details/:id" component={DetailsScreen} />
    </div>

export default Router;