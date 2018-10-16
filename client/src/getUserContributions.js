let getUserContributions = (props, userId) => {
    fetch(`${process.env.REACT_APP_API_HOST}/api/user/${userId}/contributions`, {
        method: 'GET',
        headers: { authorization: JSON.parse(localStorage.getItem('token'))}
    })
    .then(data=> {
        return data.json();
    })
    .then(userContributions=> {
        props.dispatch({type: 'SET_USER_CONTRIBUTIONS', userContributions: userContributions})
    })
};

export default getUserContributions;