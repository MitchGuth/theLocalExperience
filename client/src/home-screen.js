import React from 'react';
import MapRow from './map-row';
import { connect } from 'react-redux';
import ExperiencesContainer from './experiences-container';
import Map from './map-example';

let HomeScreen = (props) => {
    return <div>
        {/* <MapRow {...props}/> */}
        <Map {...props} />
        <ExperiencesContainer {...props}/>
        {/* <button
            type="button"
            onClick={ () => {
                fetch(`${process.env.REACT_APP_API_HOST}/api/getexperiences`)
                .then(results=> {
                    return results.json();
                })
                .then(experiences=> {
                    props.dispatch({type: 'SET_EXPERIENCES_ARRAY', experiencesArray: experiences})
                    props.history.push('/experiences');
                })
            }}
        >
            Retrieve
        </button> */}
    </div>
};

let ConnectedHomeScreen = connect(state=> {
    return {
        experiencesArray: state.experiencesArray
    }
})(HomeScreen);

export default ConnectedHomeScreen;