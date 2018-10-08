import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import NavBar from './nav-bar.js';
import HomeScreen from './home-screen';
import LoginScreen from './login-screen';
import DetailsScreen from './details-screen.js';
import ContributeScreen from './contribute-screen.js';

let Router = () =>
    <HashRouter>
        <div className="router">
            <NavBar/>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/details/:id" component={DetailsScreen} />
            <Route exact path="/contribute" component={ContributeScreen} />
        </div>
    </HashRouter>

export default Router;