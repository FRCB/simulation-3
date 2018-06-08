let initialState = {
    title: '',
    username: '',
    content: ''
}

const UPDATE_USER = "USER";
const UPDATE_TITLE = 'UPDATE_TITLE';
const UPDATE_CONTENT = 'UPDATE_CONTENT';


export default function reducer(state = initialState, action) {
    switch(action) {
        case UPDATE_USER:
            return Object.assign( {}, state, {username: action.payload});
        case UPDATE_TITLE:
            return Object.assign({}, state, { title: action.payload });
        case UPDATE_CONTENT:
            return Object.assign({}, state, { content: action.payload });
        default:
            return state;
    }
}

export function updateUsername( username) {
    return {
        type: UPDATE_USER,
        payload: { username }
    }
}

export function updateTitle(title) {
    return {
        type: UPDATE_TITLE,
        payload: title
    }
}

export function updateContent(content) {
    return {
        type: UPDATE_CONTENT,
        payload: content
    }
}

