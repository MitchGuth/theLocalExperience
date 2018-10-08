import React,{ Component } from 'react';
import './index.css';
import { Marker } from 'react-google-maps';

class Map extends Component {
    componentDidMount(){
        this.renderMap()
    }
    renderMap = () =>{
        loadScript(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API}&callback=initMap`)
        window.initMap = this.initMap
    }
    initMap = () =>{
        let krogStreet = {lat: 33.7530, lng: -84.3636}
        let map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 33.7490 , lng: -84.3880 },
            zoom: 10
        })
        let marker = new window.google.maps.Marker({
            position: {lat: 33.7530, lng: -84.3636},
            map: map,
            title: 'Krog Sreet Tunnel'
        })
        marker.setMap(map);
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
