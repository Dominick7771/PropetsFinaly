const initialState = {
    name: null,
    type: null,
    sex: null,
    breed: null,
    color: null,
    height: null,
    features: null,
    description: null,
    location: null,
    contacts: {
        phone: null,
        email: null,
        facebook: null
    },
    images: [],
    date: Date.now(),
    dateString: null,
    found: false,
    photoURL: null,
    coordinates: {
        lat: null,
        lng: null
    }
}



export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'SET_ANKETA_INFO':
            return {
                ...state,
                type: payload.type,
                sex: payload.sex,
                breed: payload.breed,
                color: payload.color,
                height: payload.height,
                features: payload.features,
                description: payload.description,
                contacts: payload.contacts,
                date: payload.date,
                found: payload.found,
                photoURL: payload.photoURL,
                name: payload.name,
                dateString: payload.dateString,
            }
        case 'SET_LOCATION':
            return {...state, location: payload}
        case 'SET_COORDINATES':
            return {...state, coordinates: {lat: payload.lat, lng: payload.lng}}
        case 'SET_ANKETA_IMG':
            return {...state, images: [...state.images, payload]}
        case "SET_ANKET_NULL":
            return {...state,
                name: payload,
                type: payload,
                sex: payload,
                breed: payload,
                color: payload,
                height: payload,
                features: payload,
                description: payload,
                location: payload,
                contacts: {
                    phone: payload,
                    email: payload,
                    facebook: payload
                },
                images: [],
                date: Date.now(),
                found: payload,
                coordinates: {
                    lat: payload,
                    lng: payload
                }}
        default:
            return state
    }
}