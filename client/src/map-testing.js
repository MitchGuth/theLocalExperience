import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React,{ Component } from 'react';

export class MapContainer extends Component {
    render() {
        return (
            <Map google={this.props.google} zoom={14}>
                <Marker onClick={this.onMarkerClick}
                    name={'Current Location'} />
                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyC5twL7L6UeHvLHA32l_fvae4n9pgxPznQ')
})(MapContainer);