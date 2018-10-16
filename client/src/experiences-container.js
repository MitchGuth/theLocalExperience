import React from 'react';
import ExperienceRow from './experience-row';

let ExperiencesContainer = (props) => 
    <ul className="experience-container">
        {props.experiences.map(experience=>
            <ExperienceRow experience={experience} />
        )}
    </ul>



export default ExperiencesContainer;