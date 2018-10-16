let checkAuthentication = (props) => {
    if (localStorage.getItem('token')) {
        let token = localStorage.getItem('token');
        let parsedToken = JSON.parse(token);
        fetch(`${process.env.REACT_APP_API_HOST}/api/checktoken`, {
            method: 'GET',
            headers: { 
                'authorization': parsedToken,
                'Content-Type': 'application/json'
            }
        })
        .then(result=> {
            return result.json();
        })
        .then(data=> {
            console.log(data);
            props.dispatch({type: 'SET_USER_INFORMATION', user: {userid: data.userid, name: data.name}})
        })
        console.log(token);
    } else {
        console.log('no token');
    }
};

export default checkAuthentication;