import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Router from './router.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer.js';

let initialState = {
    fileInput: '',
    descriptionInput: '',
    selectedFile: '',
    contributeDescription: ''
};

let store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let App =
    <Provider store={store}>
        <Router />
    </Provider>

ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
