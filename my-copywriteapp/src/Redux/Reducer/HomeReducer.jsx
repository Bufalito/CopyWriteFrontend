import { GET_TEXTS } from "../Actions/Types"
const initialState = {
    texts: []
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TEXTS:
            return {
                ...state,
                texts: action.payload
            }
        default:
            return state
    }
}