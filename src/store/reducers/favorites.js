const initialState = {
    isFavorite: false,
    userID: null
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'SET_FAVORITE':
            return {
                ...state,
                isFavorite: payload.isFavorite,
                userID: payload.userID
            }
        default:
            return state
    }
}