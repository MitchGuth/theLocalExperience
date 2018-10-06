let reducer = (oldState, action) => {
    if (action.type === 'UPDATE_TITLE_INPUT') {
        return {
            ...oldState,
            titleInput: action.titleInput
        }
    } else if (action.type === 'UPDATE_DESCRIPTION_INPUT') {
        return {
            ...oldState,
            descriptionInput: action.descriptionInput
        }
    } else if (action.type === 'UPDATE_FILEINPUT_INPUT') {
        return {
            ...oldState,
            fileInput: action.fileInput
        }
    } else if (action.type === 'SET_CONTRIBUTE') {
        return {
            ...oldState,
            selectedFile: action.selectedFile,
            contributeDescription: action.contributeDescription
        }
    } else {
        return {
            ...oldState
        }
    }
}

export default reducer;