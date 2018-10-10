import React from 'react';
import { connect } from 'react-redux';
import ExperienceRow from './experience-row';

let ExperiencesContainer = (props) => 
    <ul>
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