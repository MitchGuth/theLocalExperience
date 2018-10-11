import React,{ Component } from 'react';
import './index.css';

// let markerPoints = [
//     {title: 'Krog Street Tunnel', latitude: 33.7530, longitude: -84.3636, postId: 1},
//     {title: 'Ponce City Market', latitude: 33.7719, longitude: -84.3665, postId: 2},
//     {title: 'Logan Farm Park', latitude: 34.0693, longitude: -84.6734, postId: 3},
//     {title: 'Lake View Park', latitude: 45.9462, longitude: -86.2364, postId: 4}
// ]


class Map extends Component {
    constructor (props) {
        super(props);
        this.state = {experiencesArray: props.experiencesArray}
    }
    componentDidMount(props){
        fetch(`${process.env.REACT_APP_API_HOST}/api/getexperiences`)
            .then(results=> {
                return results.json();
            })
            .then(experiences=> {
                this.props.dispatch({type: 'SET_EXPERIENCES_ARRAY', experiencesArray: experiences})
            })
            .then(this.renderMap());
    }
    renderMap = () =>{
        loadScript(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API}&callback=initMap`)
        window.initMap = this.initMap
    }
    initMap = (props) =>{
        let map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 33.7490 , lng: -84.3880 },
            zoom: 10
        })
        let createMarkers = () =>{
            for (let i = 0; i < this.props.experiencesArray.length; i++){
                let contentString = '<div id="content" >' +
                    `<h3 class="info-window-header">${this.props.experiencesArray[i].title}</h3>` +
                    `<img class="info-window-image" src=${`${process.env.REACT_APP_API_HOST}` + this.props.experiencesArray[i].photourl} alt=${this.props.experiencesArray[i].title}"` +
                    '</div>';
                let infoWindow = new window.google.maps.InfoWindow({
                    content: contentString
                });
                let marker = new window.google.maps.Marker({
                    position: new window.google.maps.LatLng(this.props.experiencesArray[i].latitude, this.props.experiencesArray[i].longitude),
                    map: map
                })
                marker.addListener('click', function() {
                    infoWindow.open(map, marker);
                })
                marker.setMap(map);
            }
        }
        createMarkers();
    }

    render() {
        return (
            <main>
                <div id="map"></div>
            </main>
        )
    }
}
    let loadScript = (url) =>{
        let index = window.document.getElementsByTagName("script")[0]
        let script = window.document.createElement("script")
        script.src = url
        script.async= true
        script.defer= true
        index.parentNode.insertBefore(script, index)
    }


export default Map;
