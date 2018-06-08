let initialState = {
    username: '',
    id: '',
    profile_picture: ''
}

const USER = "USER";


export default function reducer(state = initialState, action) {
    switch(action) {
        case USER:
            return Object.assign( {}, state, action.payload);
        default:
            return state;
    }
}

export function user( id, username, profile_picture ) {
    return {
        type: USER,
        payload: { id, username, profile_picture }
    }
}

