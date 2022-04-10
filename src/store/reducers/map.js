const initialState = {
    map: false,
    header: false,
    finish: false,
    edit: false,
    dropdown: false,
    location: '',
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'SET_MAP_ACTIVE':
            return {...state, map: payload.map, header: payload.header}
        case 'SET_ANKET':
            return {...state, finish: payload.finish, edit: payload.edit}
        case 'SET_DROPDOWN':
            return {...state, dropdown: payload.dropdown}
        case 'SET_FILTER_LOCATION':
            return {...state, location: payload}
        default:
            return state
    }
}