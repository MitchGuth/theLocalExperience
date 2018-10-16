let postContribute = async (contributeInformation, props) => {
    let stringifiedContributeInformation = JSON.stringify(contributeInformation);
    let contributionPost = await fetch(`${process.env.REACT_APP_API_HOST}/api/postcontribute`, {
        method: 'POST',
        body: stringifiedContributeInformation,
        headers: {'Content-Type': 'application/json'}
    })
    let contributionPostSuccessful = await (contributionPost.json());
    contributeInformation.postId = contributionPostSuccessful.contributionId;
    props.dispatch({type: 'ADD_EXPERIENCE_CONTRIBUTION', newExperience: contributeInformation});
    props.history.push('/');
};


export default postContribute;