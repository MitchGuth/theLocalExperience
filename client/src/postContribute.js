let postContribute = (formData) => {
    console.log(formData);
    fetch('http://localhost:5000/api/postcontribute', {
        method: 'POST',
        body: formData
    })
        .then(results => {
            return results
        })
        .then(message=> {
            console.log('Posted')
        })
}

export default postContribute;