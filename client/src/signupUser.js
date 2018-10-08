let signupUser = (props) => {
    console.log(props);
    fetch(`${process.env.REACT_APP_API_HOST}/api/signup`, {
        method: 'POST',
        body: JSON.stringify(props),
        headers: {'Content-Type': 'application/json'}
    })
};

export default signupUser;