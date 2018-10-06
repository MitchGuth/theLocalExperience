let postContribute = (contributeInformation) => {
    let stringifiedContributeInformation = JSON.stringify(contributeInformation);
    console.log(stringifiedContributeInformation);
    fetch(`${process.env.REACT_APP_API_HOST}/api/postcontribute`, {
        method: 'POST',
        body: stringifiedContributeInformation,
        headers: {'Content-Type': 'application/json'}
    })
};


export default postContribute;