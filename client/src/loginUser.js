import getUserContributions from './getUserContributions.js';

let loginUser = (props, userInformation) => {
    fetch(`${process.env.REACT_APP_API_HOST}/api/login`, {
        method: 'POST',
        body: JSON.stringify(userInformation),
        headers: {'Content-Type': 'application/json'}
    })
    .then(results=> {
        return results.json()
    })
    .then(userCredentials=> {
        console.log(userCredentials);
        localStorage.setItem('token', userCredentials.token);
        props.history.push('/');
        props.dispatch({type: 'SET_USER_INFORMATION', user: userCredentials.user})
        getUserContributions(userCredentials);
    })
};


export default loginUser;