let postContribute = (formData) => {
    return fetch('http://localhost:5000/api/postcontribute', {
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