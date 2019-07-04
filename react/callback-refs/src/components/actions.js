export const addMsgAction = (msg) => {
    return {
        type: 'ADD_MESSAGE',
        message: msg,
    }
}

export const delMsgAction = (index) => {
    return {
        type: 'DELETE_MESSAGE',
        index,
    }
}