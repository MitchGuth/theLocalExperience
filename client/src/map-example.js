import React,{ Component } from 'react';
import './index.css';

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
        let ponceCity = {lat: 33.7719, lng: -84.3665}
        let loganFarm = {lat: 34.0693, lng: -84.6734}
        let lakeView = {lat: 45.9462, lng: -86.2364}
        let map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 33.7490 , lng: -84.3880 },
            zoom: 10
        })
        let markerKrog = new window.google.maps.Marker({
            position: krogStreet,
            map: map,
            title: 'Krog Sreet Tunnel'
        })
        markerKrog.setMap(map);
        let markerPonce = new window.google.maps.Marker({
            position: ponceCity, 
            map: map,
            title: 'Ponce City Market'
        })
        markerPonce.setMap(map);
        let markerLogan = new window.google.maps.Marker({
            position: loganFarm, 
            map: map,
            title: 'Logan Farm Park'
        })
        markerLogan.setMap(map);
        let markerLake = new window.google.maps.Marker({
            position: lakeView,
            map: map, 
            title: 'Lake View Park'
        })
        markerLake.setMap(map);
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
