const initialState = {
    images: []
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'SET_IMG':
            return {...state, images: [...state.images, payload]}
        case 'REMOVE_IMG':
            return {...state, images: payload}
        default:
            return state
    }
}