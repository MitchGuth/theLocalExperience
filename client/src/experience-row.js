import React from 'react';
import { NavLink } from 'react-router-dom';

let ExperienceRow = (props) => {
    return <li className="experience-row">
        <NavLink className="experience-navlink" to={`/details/${props.experience.postid}`}>
            <div className="experience-image-container">
                <img className="experience-image" src={`${process.env.REACT_APP_API_HOST}` + props.experience.photourl} alt={props.experience.title} />
            </div>
            <h3 className="experience-title">{props.experience.title}</h3>
        </NavLink>
    </li>
}


export default ExperienceRow;