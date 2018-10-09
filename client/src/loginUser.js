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
    })
};


export default loginUser;