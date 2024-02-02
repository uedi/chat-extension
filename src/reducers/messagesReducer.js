const messagesReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_MESSAGES':
            return action.data
        case 'ADD_MESSAGE': {
            return state ? [...state, action.data] : [action.data]
        }
        default:
            return state
    }
}

export const setMessages = (data) => {
    return {
        type: 'SET_MESSAGES',
        data: data
    }
}

export const addMessage = (message) => {
    return {
        type: 'ADD_MESSAGE',
        data: message
    }
}

export default messagesReducer