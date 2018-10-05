let postContribute = (formData) => {
    return fetch(`${process.env.REACT_APP_API_HOST}/api/postcontribute`, {
        method: 'POST',
        body: formData
    })
        .then(results => {
            return results.text()
        })
        .then(message=> {
            return message;
        })
}

export default postContribute;