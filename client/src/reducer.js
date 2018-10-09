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
    } else if (action.type === 'SET_CREDENTIAL_INPUT') {
        return {
            ...oldState,
            [action.stateName]: action.userInput
        }
    } else if (action.type === 'SET_USEREMAIL') {
        return {
            ...oldState,
            userEmail: action.userEmail
        }
    } else if (action.type === 'CLEAR_LOGIN_INPUT') {
        return {
            ...oldState,
            loginEmailInput: '',
            loginPasswordInput: ''
        }
    } else if (action.type === 'CLEAR_SIGNUP_INPUT') {
        return {
            ...oldState,
            signupNameInput: '',
            signupEmailInput: '',
            signupPasswordInput: ''
        }
    } else {
        return {
            ...oldState
        }
    }
}

export default reducer;