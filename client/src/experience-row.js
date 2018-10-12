import React from 'react';
import { NavLink } from 'react-router-dom';

let ExperienceRow = (props) => {
    return <li className="experience-row">
        <NavLink className="experience-navlink" to={`/details/${props.experience.postid}`}>
            <img className="experience-image" src={`${process.env.REACT_APP_API_HOST}` + props.experience.photourl} alt={props.experience.title} />
            <h3>{props.experience.title}</h3>
            {/* <p>Location: {props.experience.latitude + ', ' + props.experience.longitude}</p>
            <p>Description: {props.experience.description}</p>
            <p>Time: {props.experience.time}</p> */}
        </NavLink>
    </li>
}


export default ExperienceRow;