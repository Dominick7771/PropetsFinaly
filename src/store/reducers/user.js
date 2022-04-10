const initialState = {
    email: null,
    token: null,
    id: null,
    name: null
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'SET_USER':
            return {...state, email: payload.email, token: payload.token, id: payload.id}
        case 'SET_INFO_USER':
            return {...state, name: payload.name, id: payload.id}
        case 'REMOVE_USER':
            return {...state, email: null, token: null, id: null, name: null}
        case 'CHANGE_NAME':
            return {...state, name: payload.name}
        default:
            return state
    }
}