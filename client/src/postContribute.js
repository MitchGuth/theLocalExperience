let postContribute = (contributeInformation, props) => {
    let stringifiedContributeInformation = JSON.stringify(contributeInformation);
    fetch(`${process.env.REACT_APP_API_HOST}/api/postcontribute`, {
        method: 'POST',
        body: stringifiedContributeInformation,
        headers: {'Content-Type': 'application/json'}
    })
    .then(response=> {
        let contributionPostSuccessful = (response.json());
        // console.log(postId);
        contributeInformation.postId = contributionPostSuccessful.postId;
        contributeInformation.userContributions = contributionPostSuccessful.newContributionsArray;
        props.dispatch({type: 'ADD_EXPERIENCE_CONTRIBUTION', newExperience: contributeInformation});
    })
};


export default postContribute;