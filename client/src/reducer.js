let reducer = (oldState, action) => {
    if (action.type === 'UPDATE_DESCRIPTION_INPUT') {
        return {
            ...oldState,
            descriptionInput: action.descriptionInput
        }
    } else {
        return {
            ...oldState
        }
    }
}

export default reducer;