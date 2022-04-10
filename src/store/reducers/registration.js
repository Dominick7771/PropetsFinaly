const initialState = {
    name: null,
    email: null,
    password: null,
}


export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'SET_USER_NAME':
            return {...state, name: payload}
        case 'SET_USER_EMAIL':
            return {...state, email: payload}
        case 'SET_USER_PASSWORD':
            return {...state, password: payload}
        default:
            return state
    }
}