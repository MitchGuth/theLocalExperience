import React from 'react';
import DetailsMap from './details-map';

let DetailRow = (props) =>
    <div>
        {(props.experience === undefined ? <p>Loading</p> :
            <div>
                <h3 className="details-title-header details-header">Title</h3>
                <p className="details-title details-data">{props.experience.title}</p>
                <h3 className="details-location-header details-header">Location</h3>
                <p className="details-location details-data">{props.experience.latitude + ', ' + props.experience.longitude}</p>
                <h3 className="details-time-header details-header">Time</h3>
                <p className="details-time details-data">{props.experience.time}</p>
                <h3 className="details-description-header details-header">Description</h3>
                <p className="details-description details-data">{props.experience.description}</p>
                <img className="details-image" src={`${process.env.REACT_APP_API_HOST}` + props.experience.photourl} alt={props.experience.title}/>
                <div className="map-section-details-screen">
                    <DetailsMap {...props.experience}/>
                </div>
            </div>
        )}
    </div>


export default DetailRow;