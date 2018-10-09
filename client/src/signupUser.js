import loginUser from "./loginUser";

let signupUser = (props) => {
    fetch(`${process.env.REACT_APP_API_HOST}/api/signup`, {
        method: 'POST',
        body: JSON.stringify(props),
        headers: {'Content-Type': 'application/json'}
    })
    .then(results=> {
        return results.json();
    })
    .then(message=> {
        if (message === 'Email already taken') {
            console.log('Email already taken!');
        } else {
            loginUser(props, message);
        }
    })
};

export default signupUser;