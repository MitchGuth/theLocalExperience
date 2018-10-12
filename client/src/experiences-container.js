import React from 'react';
import ExperienceRow from './experience-row';

let ExperiencesContainer = (props) => 
    <ul className="experience-container">
        {props.experiencesArray.map(experience=>
            <ExperienceRow experience={experience} />
        )}
    </ul>


// let ConnectedExperiencesScreen = connect(state=> {
//     return {
//         experiencesArray: state.experiencesArray
//     }
// })(ExperiencesScreen);

export default ExperiencesContainer;