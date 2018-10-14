import React,{ Component } from 'react';
import './index.css';

class DetailsMap extends Component {
    componentDidMount() {
        this.renderMap();
    }
    renderMap = () =>{
        loadScript(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API}&callback=initMap`)
        window.initMap = this.initMap
    }
    initMap = (props) =>{
        let map = new window.google.maps.Map(document.getElementById('details-map'), {
            center: {lat: Number(this.props.latitude), lng: Number(this.props.longitude) },
            zoom: 15
        })
        let createMarkers = (props) =>{
            let contentString = '<div id="content" >' +
                `<h3 class="info-window-header">${this.props.title}</h3>` +
                `<img class="info-window-image" src=${`${process.env.REACT_APP_API_HOST}` + this.props.photourl} alt="${this.props.title}" />` +
                '</div>';
            let infoWindow = new window.google.maps.InfoWindow({
                content: contentString
            });
            let marker = new window.google.maps.Marker({
                position: new window.google.maps.LatLng(this.props.latitude, this.props.longitude),
                map: map
            })
            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            })
            marker.setMap(map);
        }
        createMarkers();
    }

    render() {
        return (
            <main>
                <div id="details-map"></div>
            </main>
        );
    }
}

let loadScript = (url) =>{
    let index = window.document.getElementsByTagName("script")[0]
    let script = window.document.createElement("script")
    script.src = url
    script.async= true
    script.defer= true
    index.parentNode.insertBefore(script, index)
};

export default DetailsMap;