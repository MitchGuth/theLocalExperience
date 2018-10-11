let postContribute = (contributeInformation, props) => {
    let stringifiedContributeInformation = JSON.stringify(contributeInformation);
    fetch(`${process.env.REACT_APP_API_HOST}/api/postcontribute`, {
        method: 'POST',
        body: stringifiedContributeInformation,
        headers: {'Content-Type': 'application/json'}
    })
    .then(response=> {
        let postId = (response.json());
        contributeInformation.postId = postId;
        props.dispatch({type: 'ADD_EXPERIENCE_CONTRIBUTION', newExperience: contributeInformation})
    })
};


export default postContribute;