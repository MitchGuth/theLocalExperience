import React from 'react';

let DetailRow = (props) => {
    let result = props.experience;
    console.log(result);
    return <div>
        <p>test</p>
        <p>{props.title}</p>
    </div>
}

export default DetailRow;