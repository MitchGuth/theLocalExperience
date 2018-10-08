let clearUserInput = (props, type) => {
    props.dispatch({type: 'CLEAR_' + type + '_INPUT'})
};

export default clearUserInput;