import React from 'react';
import { connect } from 'react-redux';
import DetailRow from './detail-row';

let DetailsScreen = (props) => {
    console.log(props);
    return <div>
        <DetailRow experience={props.experiencesArray.find(experience=>
            (props.match.url === `/details/${experience.postid}`))} />
    </div>
}

let ConnectedDetailsScreen = connect(state=> {
    return {
        experiencesArray: state.experiencesArray
    }
})(DetailsScreen);

export default ConnectedDetailsScreen;