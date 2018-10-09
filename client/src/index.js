import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Router from './router.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer.js';

let initialState = {
    loginEmailInput: '',
    loginPasswordInput: '',
    signupNameInput: '',
    signupEmailInput: '',
    signupPasswordInput: '',
    userEmail: '',
    fileInput: '',
    titleInput: '',
    descriptionInput: '',
    selectedFile: '',
    contributeTitle: '',
    contributeDescription: '',
    experiencesArray: []
};

let store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// class Map extends Component {
//     componentDidMount(){
//         this.renderMap()
//     }
//     renderMap = () =>{
//         loadScript("https://maps.googleapis.com/maps/api/js?key={apiKey}")
//         window.initMap = this.initMap
//     }
//     initMap = () =>{
//         let map = new window.google.maps.Map(document.getElementById('map'), {
//             center: {lat: 33.7490 , lng: 84.3880 },
//             zoom: 10
//         })
//     }

//     render() {
//         return (
//             <main>
//                 <div id="map"></div>
//             </main>
//         )
//     }
//     loadScript(url) {
//         let index = window.document.getElementsByTagName("script")[0]
//         let script = window.document.createElement("script")
//         script.src = url
//         script.async= true
//         script.defer= true
//         index.parentNode.insertBefore(script, index)
//     }
// }

let App =
    <Provider store={store}>
        <Router />
    </Provider>

ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
