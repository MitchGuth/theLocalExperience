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
    } else if (action.type === 'CLEAR_CONTRIBUTE_INPUT') {
        return {
            ...oldState,
            fileInput: '',
            titleInput: '',
            descriptionInput: '',
            selectedFile: '',
            contributeTitle: '',
            contributeDescription: ''
        }
    } else if (action.type === 'SET_EXPERIENCES_ARRAY') {
        return {
            ...oldState,
            experiencesArray: action.experiencesArray
        }
    } else if (action.type === 'ADD_EXPERIENCE_CONTRIBUTION') {
        // console.log(action);
        return {
            ...oldState,
            experiencesArray: [
                ...oldState.experiencesArray,
                action.newExperience
            ],
            userContributions: [
                ...oldState.userContributions,
                action.newExperience
            ]
        }
    } else if (action.type === 'SET_USER_CONTRIBUTIONS') {
        return {
            ...oldState,
            userContributions: action.userContributions
        }
    } else if (action.type === 'SET_USER_INFORMATION') {
        return {
            ...oldState,
            userId: action.user.userid,
            userName: action.user.name
        }
    } else if (action.type === 'LOGOUT_USER') {
        return {
            ...oldState,
            userId: '',
            userName: '',
            userEmail: '',
            userContributions: []
        }
    } else {
        return {
            ...oldState
        }
    }
}

export default reducer;