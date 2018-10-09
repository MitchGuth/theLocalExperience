import React from 'react';
import { NavLink } from 'react-router-dom';

let ExperienceRow = (props) => {
    console.log(props.experience.title);
    return <li>
        <NavLink to={`/details/${props.experience.postid}`}>
            <p>Title: {props.experience.title}</p>
            {/* <p>Location: {props.experience.latitude + ', ' + props.experience.longitude}</p>
            <p>Description: {props.experience.description}</p>
            <p>Time: {props.experience.time}</p> */}
        </NavLink>
    </li>
}


export default ExperienceRow;