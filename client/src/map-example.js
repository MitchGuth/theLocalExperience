import React,{ Component } from 'react';
import './index.css';

class Map extends Component {
    componentDidMount(){
        this.renderMap()
    }
    renderMap = () =>{
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyC5twL7L6UeHvLHA32l_fvae4n9pgxPznQ&callback=initMap")
        window.initMap = this.initMap
    }
    initMap = () =>{
        let map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 33.7490 , lng: 84.3880 },
            zoom: 10
        })
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