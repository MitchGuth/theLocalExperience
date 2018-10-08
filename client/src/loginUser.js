let loginUser = (userInformation) => {
    fetch(`${process.env.REACT_APP_API_HOST}/api/login`, {
        method: 'POST',
        body: JSON.stringify(userInformation),
        headers: {'Content-Type': 'application/json'}
    })
};


export default loginUser;