let postContribute = async (contributeInformation, props) => {
    let stringifiedContributeInformation = JSON.stringify(contributeInformation);
    let contributionPost = await fetch(`${process.env.REACT_APP_API_HOST}/api/postcontribute`, {
        method: 'POST',
        body: stringifiedContributeInformation,
        headers: {'Content-Type': 'application/json'}
    })
    // .then(response=> {
    let contributionPostSuccessful = await (contributionPost.json());
    console.log(contributionPostSuccessful);
    contributeInformation.postId = contributionPostSuccessful.contributionId;
    contributeInformation.userContributions = contributionPostSuccessful.newContributionsArray.contributions;
    console.log(contributeInformation);
    props.dispatch({type: 'ADD_EXPERIENCE_CONTRIBUTION', newExperience: contributeInformation});
    // })
};


export default postContribute;