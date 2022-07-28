import axios from "axios";
import { GET_TEXTS } from "./Types.jsx"

export function getTexts() {
    return async function (dispatch) {
        var json = await axios.get("/")
        return dispatch({
            type: GET_TEXTS,
            payload: json.data
        })
    }
}

export function getText(value) {
    return async function () {
        const response = await axios.get(`/iecho?text=${value}`)
        return response
    }
}