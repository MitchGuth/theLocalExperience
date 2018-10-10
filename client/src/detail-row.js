import React from 'react';

let DetailRow = (props) =>
    <div>
        {(props.experience === undefined ? <p>Loading</p> :
            <div>
                <h3 className="details-title-header">Title</h3>
                <p className="details-title">{props.experience.title}</p>
                <h3 className="details-location-header">Location</h3>
                <p className="details-location">{props.experience.latitude + ', ' + props.experience.longitude}</p>
                <h3 className="details-time-header">Time</h3>
                <p className="details-time">{props.experience.time}</p>
                <h3 className="details-description-header">Description</h3>
                <p className="details-description">{props.experience.description}</p>
            </div>
        )}
    </div>


export default DetailRow;