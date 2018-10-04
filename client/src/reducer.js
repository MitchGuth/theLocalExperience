let reducer = (oldState, action) => {
    if (action.type === 'UPDATE_DESCRIPTION_INPUT') {
        console.log(oldState);
        return {
            ...oldState,
            descriptionInput: action.descriptionInput
        }
    } else if (action.type === 'SET_CONTRIBUTE_DESCRIPTION') {
        return {
            ...oldState,
            contributeDescription: action.contributeDescription
        }
    } else {
        return {
            ...oldState
        }
    }
}

export default reducer;