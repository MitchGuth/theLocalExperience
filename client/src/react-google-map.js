// import React from "react";
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
// import { compose, withProps } from 'recompose';
// import './index.css';

// const ReactMap = compose(
//     withProps({
//         googleMapUrl:`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API}&callback=initMap`,
//         loadingElement:<div style={{height: `100%`}}/>,
//         containerElement:<div style={{height: `400px`}} />,
//         mapElement:<div style={{height: `100%`}}/>
//     }),
//     withScriptjs,
//     withGoogleMap
// )((props)=>
//     <GoogleMap
//         defaultZoom={10}
//         defaultCenter={{lat: 33.7490, lng: -84.3880}}
//     >
//     <Marker
//             position={{lat: 33.7530, lng: -84.3636}}/>
//     </GoogleMap>
// )

// withScriptjs(withGoogleMap((props) =>{
//     <GoogleMap
//         defaultZoom={10}
//         defaultCenter={{lat: 33.7490, lng: -84.3880}}
//         >
//         {props.isMarkerShown && <Marker
//             position={{lat: 33.7530, lng: -84.3636}}/>}
//     </GoogleMap>
// }))

// export default ReactMap;