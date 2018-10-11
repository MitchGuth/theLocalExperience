let getUserContributions = (userCredentials) => {
    fetch(`${process.env.REACT_APP_API_HOST}/api/user/${userCredentials.user.userid}/contributions`)
    .then(data=> {
        return data.json();
    })
    .then(userContributions=> {
        console.log(userContributions);
    })
};

export default getUserContributions;