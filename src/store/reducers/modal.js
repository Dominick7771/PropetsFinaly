const initialState = {
    modal: false,
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'SET_MODAL':
            return {...state, modal: payload}
        default:
            return state
    }
}