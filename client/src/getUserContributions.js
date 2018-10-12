let getUserContributions = (props, userCredentials) => {
    fetch(`${process.env.REACT_APP_API_HOST}/api/user/${userCredentials.user.userid}/contributions`)
    .then(data=> {
        return data.json();
    })
    .then(userContributions=> {
        console.log(userContributions);
        props.dispatch({type: 'SET_USER_CONTRIBUTIONS', userContributions: userContributions})
    })
};

export default getUserContributions;